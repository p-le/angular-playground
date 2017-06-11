class MixcloudService {
  static $inject = ['$http', '$log'];

  constructor($http, $log) {
    this.$http = $http;
    this.$log = $log;
  }

  test() {
    this.$http.get('https://api.mixcloud.com/spartacus/')
      .then((result) => this.$log.debug(result))
      .catch((err) => this.$log.debug(err));
  }
}

export default MixcloudService;