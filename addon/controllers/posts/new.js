import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PostsNewController extends Controller {
  option = ['public', 'community', 'private'];
  type = 'public';

  @action
  chooseType(mode) {
    this.set('type', mode);
  }
}
