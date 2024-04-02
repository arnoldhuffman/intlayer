#!/usr/bin/env node

import { setAPI } from 'intlayer-cli';
import { webpack } from 'webpack';
import * as packageJson from '../package.json';
import { startServer, bundle } from '../src/scripts';
import webpackConfig from '../webpack.config';

// Create a Webpack compiler instance with your configuration
const compiler = webpack(webpackConfig);

setAPI({
  version: packageJson.version,
  serve: () => startServer(compiler),
  build: () => bundle(compiler),
});