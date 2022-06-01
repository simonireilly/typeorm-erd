import { DataSource, EntityMetadata, EntitySchema } from "typeorm";
import { ConnectionMetadataBuilder } from "typeorm/connection/ConnectionMetadataBuilder";
import { RelationType } from "typeorm/metadata/types/RelationTypes";

export type BuilderRelations = Record<
  string,
  {
    entityRelations: RelationData[];
  }
>;

interface RelationData {
  relationType: RelationType;
  propertyPath: string;
  nullable: boolean;
  isOwning: boolean;
  inverseSidePropertyPath: string;
  source: string;
  target: string;
}

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

/**
 * Return the relation data for each table
 *
 */
const relations = (meta: EntityMetadata[]): BuilderRelations => {
  const relationData = meta.reduce<BuilderRelations>((acc, entity) => {
    const entityRelations = entity.ownRelations.map(
      ({
        relationType,
        inverseEntityMetadata,
        propertyPath,
        inverseSidePropertyPath,
        isOwning,
      }) => {
        return {
          relationType,
          propertyPath,
          isOwning,
          nullable:
            entity.columns.find((c) => c.propertyName === propertyPath)
              ?.isNullable || false,
          inverseSidePropertyPath,
          source: entity.tableName,
          target: inverseEntityMetadata.tableName,
        };
      }
    );

    return {
      ...acc,
      [entity.tableName]: {
        entityRelations,
      },
    };
  }, {});

  return relationData;
};

export const builders = {
  entityMetaData,
  relations,
};
