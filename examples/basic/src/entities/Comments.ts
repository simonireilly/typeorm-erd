import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn({
    comment: "The ID for the comment",
  })
  id: number;

  @Column({
    length: 300,
  })
  text: string;

  @ManyToOne(() => User, {
    createForeignKeyConstraints: false,
  })
  author: User;

  @Column({})
  likes: number;
}
