export type BaseMapType<Entity, Model, DomainToResponse> = {
  TypeormToDomain(model: Model): Entity;

  TypeormArrayToDomain(models: Model[]): Entity[];

  DomainToResponse(entity: Entity): DomainToResponse;
}
