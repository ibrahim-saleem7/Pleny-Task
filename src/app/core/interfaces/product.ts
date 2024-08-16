export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    brand: string;
    rating: number;
    thumbnail: string;
    quantity?: number
  }