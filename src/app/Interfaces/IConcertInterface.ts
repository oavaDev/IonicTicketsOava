export interface IConcertInterface {
  _id : string;
  name: string;
  description: string;
  category: string;
  artists: [{ name: string; image: string }];
  participants: number;
  date: string;
  city: string;
  country: string;
  location: string;
  price: string;
  image: string;
  user: string;
}
