export type TUsers = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TUsersAddress;
  phone: string;
  website: string;
  company: TUsersCompany;
}

type TUsersAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TUsersAddressGeo;
}

type TUsersAddressGeo = {
  lat: string;
  lng: string;
}

type TUsersCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
}








