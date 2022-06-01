import { AppDataSource } from "../../examples/basic/src/data-source";
import { Mermaid } from "./mermaid";

describe("mermaid adapter", () => {
  test("builds a basic table", async () => {
    const erd = new Mermaid(AppDataSource);
    await erd.initialize();

    expect(erd.render()).toEqual(`erDiagram
  user {
    integer id PK The primary user identifier
    varchar firstName
    varchar lastName
    integer age
  }
  comment {
    integer id PK The ID for the comment
    varchar text
    integer likes
    integer authorId FK The primary user identifier
  }
user ||--|{ comment: comments
comment }|--|| user: author`);
  });
});
