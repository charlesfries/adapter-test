import Route from '@ember/routing/route';
import { service } from '@ember/service';

import type Store from '@ember-data/store';

export default class ApplicationRoute extends Route {
  @service declare store: Store;

  async model() {
    const user1 = await this.store.findRecord('user', 'charlesfries');
    const user2 = await this.store.findRecord('user', 'bob');

    const configs1 = await user1.configs;
    const configs2 = await user2.configs;

    console.log(user1.id)
    console.log(configs1[0].id, configs1[0].value)
    
    console.log(user2.id)
    console.log(configs2[0].id, configs2[0].value)

    return user1;
  }
}
