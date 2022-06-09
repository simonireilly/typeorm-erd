import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { Product } from "./Product";

@Entity("tag", { schema: "shop" })
export class Tag {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @ManyToMany(() => Product, (product) => product.tags)
  products: Product[];
}
