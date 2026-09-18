import {defineConfig} from 'oxlint';

import otherConfig from './other.config';

export default defineConfig({
  extends: [otherConfig]
})
