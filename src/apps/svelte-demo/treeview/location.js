export class Location {
  constructor(name, locations, visible) {
    this.name = name;
    this.locations = locations.map(l => new Location(l, [], false));
  }

  addLocation(name) {
    let newLocation = new Location(name, [], false);
    this.locations.push(newLocation);
    return newLocation;
  }
  
  getLocation(name) {
    return this.locations.find(l => l.name === name);
  }
}