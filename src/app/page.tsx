

import { getProducts } from '../lib/products';
import { useProductStore } from '../store/products';
import Image from 'next/image';
import type { Product } from '../store/products';

export default async function HomePage() {
  const products = await getProducts();
  useProductStore.getState().setProducts(products);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Nike Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
            <Image src={product.image} alt={product.name} width={128} height={128} className="w-32 h-32 object-contain mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.brand}</p>
            <p className="text-lg font-bold mt-2">${(product.price / 100).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
