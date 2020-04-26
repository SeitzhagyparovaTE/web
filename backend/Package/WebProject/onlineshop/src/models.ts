export class Category {
  id: number;
  name: string;
}

export class LoginResponse {
  token: string;
}

export class Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}