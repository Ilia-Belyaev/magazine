export type Categories = string[];

export type Product = {
  id: number;
  isFavorite: boolean;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  availabilityStatus: string;
  minimumOrderQuantity: number;
  sku: string;
  tags: string[];
  images: string[];
  thumbnail: string;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;
  weight: number;
  dimensions: Dimension;
  meta: Meta;
  reviews: Reviews;
};

export type CustomProduct = {
    product: Product;
    count: number;
}

export type CustomProducts = CustomProduct[];

export type Products = Product[];

export type Dimension = {
    width: number;
    height: number;
    depth: number;
}

export type Meta = {
    barcode: string;
    qrCode: string;
    createdAt: string;
    updatedAt: string;
}

export type Review = {
    reviewerName: string;
    reviewerEmail: string;
    rating: number;
    comment: string;
    date: string;
}

export type Reviews = Review[];

export type AuthStatus = 'UNKNOWN' | 'AUTH' | 'NO_AUTH';

export type StockStatusValue = {
    status: 'INCREMENT' | 'DECREMENT';
    id: number;
}

export type AuthData = {
    login: string | null;
    password: string | null;
}

export type UserData = {
    email: string;
    token: string;
}
