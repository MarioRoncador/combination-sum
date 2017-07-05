(function() {
  function config($locationProvider, $stateProvider, $translateProvider) {
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController as home',
      templateUrl: '/templates/home.html'
    });

// This are the translations, I'd rather have them in the TranslationController, but I'm not able to do so
// I followed this example: https://angular-translate.github.io/docs/#/guide

    var translationsEN = {
     HEADLINE: 'What an awesome module!',
     PARAGRAPH: 'Srsly!',
     BUTTON_LANG_DE: 'German',
     BUTTON_LANG_EN: 'English'
    };

    var translationsDE= {
     HEADLINE: 'Was für ein großartiges Modul!',
     PARAGRAPH: 'Ernsthaft!',
     BUTTON_LANG_DE: 'Deutsch',
     BUTTON_LANG_EN: 'Englisch'
    };

// I'd keep only the following part here if I'd know how to solve the problem above

    $translateProvider
    .translations('en', translationsEN)
    .translations('de', translationsDE)
    .preferredLanguage('en');
}

  angular
  .module('combinationSum', ['ui.router','pascalprecht.translate'])
  .config(config);
})();
