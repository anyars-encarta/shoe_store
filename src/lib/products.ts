
import { db } from '@/db';
import { products } from '@/db/schema';

export async function getProducts() {
  return await db.select().from(products);
}
