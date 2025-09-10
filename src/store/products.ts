import { create } from 'zustand';

export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
};

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
