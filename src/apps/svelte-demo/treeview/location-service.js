import { Location } from './location';

export class LocationService {
  getLocations() {
    let usa = new Location('USA', ['New York', 'Texas'], true);
    let nyc = usa.getLocation('New York').addLocation('New York City');
    nyc.addLocation('Brooklyn');
    nyc.addLocation('Manhattan');
    nyc.addLocation('Queens');
    nyc.addLocation('Bronx');
    nyc.addLocation('Staten Island');
    usa.getLocation('Texas').addLocation('Houston');
    usa.getLocation('Texas').addLocation('Austin');
    usa.getLocation('Texas').addLocation('Dallas');
    let germany = new Location('Germany', ['Berlin'], true);
    let norway = new Location('Norway', ['Oslo'], true);
    return [usa, germany, norway];
  }
}