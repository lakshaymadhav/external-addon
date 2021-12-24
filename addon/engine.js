import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;

export default class MyEngine extends Engine {
  modulePrefix = modulePrefix;
  Resolver = Resolver;

  dependencies = {
    services: ['data-store'],
    externalRoutes: ['home', 'blog'],
  };
}

loadInitializers(MyEngine, modulePrefix);
