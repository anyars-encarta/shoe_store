import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  brand: varchar('brand', { length: 100 }),
  price: integer('price'),
  image: varchar('image', { length: 255 }),
});
