import { DataSource, EntityMetadata, EntitySchema } from "typeorm";
import { ConnectionMetadataBuilder } from "typeorm/connection/ConnectionMetadataBuilder";
import { RelationMetadata } from "typeorm/metadata/RelationMetadata";
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
  const handleRelation = (
    entity: EntityMetadata,
    {
      relationType,
      inverseEntityMetadata,
      propertyPath,
      inverseSidePropertyPath,
      isOwning,
      joinTableName,
    }: RelationMetadata
  ) => {
    const column = entity.columns.find((c) => c.propertyName === propertyPath);
    const nullable = column ? column.isNullable : false;

    return {
      relationType,
      propertyPath,
      isOwning,
      nullable,
      inverseSidePropertyPath,
      source: entity.tableName,
      target: inverseEntityMetadata.tableName,
    };
  };

  const relationData = meta.reduce<BuilderRelations>((acc, entity) => {
    const entityRelations = entity.relations.map((rel) => {
      // if (rel.junctionEntityMetadata) {

      //   return handleRelation(
      //     rel.junctionEntityMetadata,
      //     rel.junctionEntityMetadata.relations
      //   );
      // }
      return handleRelation(entity, rel);
    });

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
