import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PostEditController extends Controller {
  option = ['public', 'community', 'private'];
  type = 'public';

  @action
  foo(mode) {
    this.set('type', mode);
  }
}
