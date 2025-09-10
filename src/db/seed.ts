import { db } from './index';
import { products } from './schema';

const nikeProducts = [
  { name: 'Nike Air Max 90', brand: 'Nike', price: 12000, image: '/images/airmax90.jpg' },
  { name: 'Nike Air Force 1', brand: 'Nike', price: 11000, image: '/images/airforce1.jpg' },
  { name: 'Nike Dunk Low', brand: 'Nike', price: 10000, image: '/images/dunklow.jpg' },
];

export async function seedProducts() {
  await db.delete(products);
  await db.insert(products).values(nikeProducts);
}

if (require.main === module) {
  seedProducts().then(() => {
    console.log('Seeded Nike products');
    process.exit(0);
  });
}
