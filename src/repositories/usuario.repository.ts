import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbsDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.mongodbs') dataSource: MongodbsDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
