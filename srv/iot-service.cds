using {iot} from '../db/iot';

service IotService {

    entity Environment as projection on iot.Environment;

}
