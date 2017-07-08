(function() {
  function HomeController(TranslationsService) {

    var home = this;
    var array = [];
    var timeNow = new Date().getTime();
    var tmpArray = [];
    var finalArray = [];

    home.timeNow = timeNow;

    home.changeLanguage = changeLanguage;
    // English as a default language
    changeLanguage("en");

     function changeLanguage(lang) {
       console.info(`Switching language to ${lang}`);
       console.count("HERE!");
      var switcher = {
        "en": function() { home.translations = TranslationsService["en-US"]; },
        "it": function() { home.translations = TranslationsService["it-IT"]; },
        "es": function() { home.translations = TranslationsService["es-ES"]; },
        "de": function() { home.translations = TranslationsService["de-DE"]; },
      };
      return switcher[lang]();
    };

    // function linked to the run button and displys the result
    home.runFunction = function(sum,numbersArray,threshold) {
      home.translations.closestSum = 0;
      arrayBuilder(numbersArray);

      //function that builds an array for input to function
      function arrayBuilder(numbersArray){
        if(numbersArray == null){
          alert(home.translations.errorMessageNoValues);
          exit; //stop the execution of function
        }else{
          array = numbersArray.split(/[ ,]+/).map(Number);
          console.log(array);
          return array;
        }
      }

      targetSum = sum;

      finalArray = [];  //clear array

      // the recursive function is at the bottom
      sum_up_recursive(array, targetSum, tmpArray, threshold);
      // print the correct result
      // print closestSum and distance from Threshold if no combinations sum up to targetSum

      if(finalArray[0] == null || finalArray[0] == 0){
        var upperLimit = targetSum - threshold;
        console.log(upperLimit);
        if(threshold == undefined){
          finalArray[0] = (home.translations.errorMessageNoCombination);
          home.combinations = finalArray;
        }else if(upperLimit > home.translations.closestSum && threshold){
          finalArray[0] = (home.translations.errorMessageNoCombination+" "+home.translations.thresholdMessage+home.translations.closestSum+" "+home.translations.thresholdNo);
          home.combinations = finalArray;
        }else{
          finalArray[0] = (home.translations.errorMessageNoCombination+" "+home.translations.thresholdMessage+home.translations.closestSum+" "+home.translations.thresholdYes);
          home.combinations = finalArray;
        }
      }else{
        home.combinations = finalArray;
      }
    }

    // function that calculates the combination and returns it
    function sum_up_recursive(numbers, number, partialArray, threshold) {
      //--- checks to be performed before running the algorithm
      // 1) smallest number should be equal or greater than target
      // for(i=0;i<array.length-1){
      //   if(targetSum ){
      //     home.combinations = errorMessageNoCombination;
      //   }
      // }

      var s=0;

      partialArray.forEach(function(entry) {
        s=s+entry;
        if(s > home.translations.closestSum && s < targetSum){
          home.translations.closestSum = s;
        }
      });
      if (s == targetSum) {
        //finalArray.push(partialArray);
        var res = partialArray.join();
        res=res.replace(/,/g , '+');
        res= res+"="+s;
        console.log("Here you go!");
        console.log(res);
        finalArray.push(partialArray);
        //$("#container").text(res);
      }
      if (s >= targetSum) {
        return;
      }
      for (var i=0; i<numbers.length; i++) {
        n = numbers[i];
        //var remaining = copyArray(cardArray, i+1, cardArray.length-1);
        var remaining = [];
        var remaining = numbers.slice(i+1);
        var partical_arr = partialArray.slice();
        partical_arr.push(n);
        sum_up_recursive(remaining, targetSum, partical_arr, threshold);
      }
    }

    // copy result to clipboard
    //var clipboard = new Clipboard(home.copyResult());

    home.copyResult = function(combination) {
      // console.log($("*#combination").text());
      // var text = $("*#combination").text();
      console.log(combination);
      window.prompt("Copy to clipboard: Cmd+C, Enter", combination);
    }
  }

  angular
  .module('combinationSum')
  .controller('HomeController', ['TranslationsService', HomeController]);
})();
