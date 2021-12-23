import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
  dataStore = service;
  model() {
    return [
      this.dataStore.createRecord('post', {
        title: 'My Post',
        desc: 'My Decsription of post',
      }),
    ];
  }
}