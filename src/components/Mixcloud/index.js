import angular from 'angular';

import MixcloudController from './mixcloud.controller';
import MixcloudService from './mixcloud.service';

const mixcloudModule = angular.module('mainApp.mixcloud', []);
mixcloudModule
  .controller('mixcloudController', MixcloudController)
  .service('mixcloudService', MixcloudService)

export default mixcloudModule.name;