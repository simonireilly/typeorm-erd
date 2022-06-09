import {
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tag } from "./Tag";

@Entity("product", { schema: "shop" })
export class Product {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @ManyToMany(() => Tag, (tag) => tag.products)
  @JoinTable({
    name: "product_tag",
    joinColumns: [{ name: "productId", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "tagId", referencedColumnName: "id" }],
    schema: "shop",
  })
  tags: Tag[];
}
