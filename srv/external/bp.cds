namespace my.bp;

/*
Entity for MySQL Table based on this Schema:

CREATE TABLE `BusinessPartner` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(111) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

*/
/*
@cds.persistence.exists
entity BusinessPartner {
  key ID : Integer;
  name : String(111);
}

*/