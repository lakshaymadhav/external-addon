import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class PostEditRoute extends Route {
  option = ['public', 'community', 'private'];
  type = 'public';
  @action
  foo(selecttype) {
    this.set('type', selecttype);
  }
}
