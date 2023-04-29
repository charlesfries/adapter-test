import Model, { hasMany, type AsyncHasMany } from '@ember-data/model';

import type ConfigModel from './config';

export default class UserModel extends Model {
  @hasMany('config') declare configs: AsyncHasMany<ConfigModel>;
}
