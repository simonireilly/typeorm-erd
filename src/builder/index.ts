import { DataSource, EntitySchema } from "typeorm";
import { ConnectionMetadataBuilder } from "typeorm/connection/ConnectionMetadataBuilder";

const entityMetaData = async (connection: DataSource) => {
  const connectionMetadataBuilder = new ConnectionMetadataBuilder(connection);

  const { entities } = connection.options;
  const TEntities = entities as (Function | EntitySchema<any> | string)[];

  let entityMetadata;

  if (entities) {
    entityMetadata = await connectionMetadataBuilder.buildEntityMetadatas(
      TEntities
    );
  } else {
    throw Error("No entities found on connection");
  }

  return entityMetadata;
};

export const builders = {
  entityMetaData,
};
