export class LocationData {
    public city = 'Mooselookmeguntic';
    public state: String = 'NY';
    public lat = 15.5;
    public long = 15.5;
    public userZip = '23232';
    public weatherStation = 'RAH';
    public timeZone = 'America/New_York';

    constructor(city: string, state: string, lat: number, long: number, userZip: string, weatherStation: string, timeZone: string) {
      this.city = city;
      this.state = state;
      this.lat = lat;
      this.long = long;
      this.userZip = userZip;
      this.weatherStation = weatherStation;
      this.timeZone = timeZone;
    }
}
