export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface FilterState {
  categories: string[];
  priceRange: string | null;
}
