class MixcloudController {
  static $inject = ['$scope', '$rootScope', '$log', 'mixcloudService'];

  constructor($scope, $rootScope, $log, mixcloudService) {
    this.$scope = $scope;
    this.$log = $log;
    this.mixcloudService = mixcloudService;
    this.mixcloudService.test();
    this.test = '';
    this.stories = [
      {
        'assignee': '1',
        'criteria': 'It tests!',
        'description': 'This is a test',
        'id': '1',
        'reporter': '2',
        'status': 'To Do',
        'title': 'First Story',
        'type': 'Spike'
      },
      {
        'assignee': '2',
        'criteria': 'It works!',
        'description': 'testing something',
        'id': '2',
        'reporter': '1',
        'status': 'In Progress',
        'title': 'Second Story',
        'type': 'Enhancement'
      }
    ];

    this.statuses = [
      { name: 'To Do' },
      { name: 'In Progress' },
      { name: 'Code Review' },
      { name: 'QA Review' },
      { name: 'Verified' }
    ];
  }

  setCurrentStory(story) {
    this.$log.debug(story);
  }
}

export default MixcloudController;