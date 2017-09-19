class Geo {
  lat: string;
  lng: string;
}

class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

class Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export class User {
  userId: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}