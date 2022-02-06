interface Address {
  street: string;
  zip: number;
}

export interface User {
  name: string;
  age: number;
  country: string;
  admin: boolean;
  address: Address;
}
