(function() {
  function TranslateController($translate, $scope) {

    $translate('HEADLINE').then(function (headline) {
      $scope.headline = headline;
    });
    $translate('PARAGRAPH').then(function (paragraph) {
      $scope.paragraph = paragraph;
    });

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
  }

  angular
  .module('combinationSum')
  .controller('TranslateController', ['$translate','$scope', TranslateController]);
})();

// This is how they suggest to setup the TranslateController at this page: https://angular-translate.github.io/docs/#/guide
// I'd like also to make it specific and not use $scope if possible
// Probably in the final version we need to move all the text from the HomeController to here, the TranslateController
