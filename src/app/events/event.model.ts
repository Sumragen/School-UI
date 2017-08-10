/**
 * Created by sumragen on 04.07.17.
 */
export class Event {
  _id: number;
  name: string;
  date: Date;
  description: string;
  address: {
    city: string;
    country: string;
  };
  location: {
    latitude: number;
    longitude: number;
  }
}
