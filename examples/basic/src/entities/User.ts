import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Comment } from "./Comments";

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    comment: "The primary user identifier",
  })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToMany(() => Comment, (comment) => comment.author)
  comments: Comment[];
}
