using {AdminService} from './admin-service';

extend service AdminService with {
    entity Destination {
        key Name        : String;
            Description : String;
    }
}
