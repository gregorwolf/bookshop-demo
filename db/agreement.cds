using {
  cuid,
  managed,
  sap.common.CodeList as CodeList
} from '@sap/cds/common';

namespace agreement;

entity Status : CodeList {
  key code : String(40);
}

entity Agreement : cuid, managed {
  description : String(100);
  items       : Composition of many AgreementItem
                  on items.agreement = $self;
};

entity AgreementItem : cuid, managed {
  agreement : Association to one Agreement not null;
  pricings  : Composition of many AgreementItemPricing
                on pricings.item = $self;
};

entity AgreementItemPricing : cuid {
  item      : Association to one AgreementItem not null;
  changeSet : Association to one ChangeSet not null;
  validFrom : Date;
  validTo   : Date;
  status    : Association to one Status not null;
}

@cds.autoexpose
entity ChangeSet : cuid, managed {
  validFromDefault      : Date not null;
  validToDefault        : Date;
  descr                 : String(100);
  changeSetToAgreements : Association to many ChangeSetToAgreement
                            on changeSetToAgreements.changeSet = $self;
  agreementItemPricings : Association to many AgreementItemPricing
                            on agreementItemPricings.changeSet = $self;
}

@cds.autoexpose
entity ChangeSetToAgreement : managed {
  key agreement : Association to one Agreement;
  key changeSet : Association to one ChangeSet;
      active    : Boolean default false;
}

view ChangeSetToAgreementSearch as
  select from ChangeSetToAgreement as csta
  left join AgreementChangesAndStatus as ac
    on  ac.changeSetId = csta.changeSet.ID
    and ac.agreementId = csta.agreement.ID
  {
    key agreement,
    key changeSet,
        active,
        ac.status      as status,
        ac.noOfChanges as noOfChanges,
  };


view ChangeSetSearch as
  select from ChangeSet as c
  left join AgreementChangesAndStatus as ac
    on ac.changeSetId = c.ID
  left join ChangeSetToFinalized as ctf
    on ctf.changeSetId = c.ID
  mixin {
    changeSetToAgreements : Association to many ChangeSetToAgreementSearch
                              on c.ID = changeSetToAgreements.changeSet.ID;
  }
  into {
    key c.ID                    as ID,
        c.validFromDefault      as validFromDefault,
        c.validToDefault        as validToDefault,
        c.createdAt             as createdAt,
        c.createdBy             as createdBy,
        c.modifiedAt            as modifiedAt,
        c.modifiedBy            as modifiedBy,
        c.descr                 as changeSetDescription,
        changeSetToAgreements,
        // c.changeSetToAgreements as changeSetToAgreements,
        c.agreementItemPricings as agreementItemPricings,
        ac.status               as status,
        ac.noOfChanges          as noOfChanges,
        ac.pricingIds           as pricingIds,
        ctf.isFinalized         as isFinalized
  };

view AgreementChangesAndStatus as
  select from ChangeSet as c
  left join ChangeSetToAgreement as cpa
    on cpa.changeSet.ID = c.ID
  left join Agreement as pa
    on cpa.agreement.ID = pa.ID
  left join AgreementItem as pai
    on pa.ID = pai.agreement.ID
  left join AgreementItemPricing as paip
    on  pai.ID = paip.item.ID
    and c.ID   = paip.changeSet.ID
  {
    pa.ID  as agreementId,
    c.ID   as changeSetId,
    count(
      paip.ID
    )      as noOfChanges : String,
    // Quick fix to be HANA Compatible
    1      as status      : Integer,
    'Test' as pricingIds  : String
  /*
  group_concat(
    distinct(
      paip.status.code
    )
  )     as status      : Integer,
  group_concat(
    distinct(
      paip.ID
    )
  )     as pricingIds  : String
  */
  }
  group by
    pa.ID,
    c.ID;

view ChangeSetToFinalized as
  select from ChangeSet as c
  left outer join AgreementItemPricing as ap
    on ap.changeSet.ID = c.ID
  left outer join AgreementItemPricing as fp
    on(
          fp.changeSet.ID =  c.ID
      and fp.status.code  in ('CLOSED')
    )
  {
    c.ID as changeSetId,
    case
      when
        COUNT(
          distinct ap.ID
        ) = COUNT(
          distinct fp.ID
        )
        and COUNT(
          distinct ap.ID
        ) > 0
      then
        TRUE
      else
        FALSE
    end  as isFinalized : Boolean
  }
  group by
    c.ID;
