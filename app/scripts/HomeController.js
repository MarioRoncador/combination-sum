(function() {
  function HomeController() {

    var home = this;
    var title = "Combination Sum";
    var description = "This calculator takes a set of numbers and returns all possible combinations to reach a given sum. Widely used in accounting, auditing, finance and data analysis.";
    var timeNow = new Date().getTime();
    var tmpArray = [];
    var finalArray = [];
    var errorMessageNoCombination = "NO COMBINATIONS SUM UP TO THE GIVEN NUMBER";
    var errorMessageNoValues = "PLEASE INSERT THE REQUIRED VALUES";
    var array = [];

    home.title = title;
    home.description = description;
    home.timeNow = timeNow;
    home.errorMessageNoCombination = errorMessageNoCombination;
    home.errorMessageNoValues = errorMessageNoValues;

    // function linked to the run button and displys the result
    home.runFunction = function(sum,numbersArray) {

      arrayBuilder(numbersArray);

      //function that builds an array for input to function - consider to slice
      function arrayBuilder(numbersArray){
        if(numbersArray == null){
          alert(home.errorMessageNoValues);
          exit; //stop the execution of function
        }else{
          array = numbersArray.split(/[ ,]+/).map(Number);
          return array;
        }
      }

      targetSum = sum;

      finalArray = [];  //clear array
      sum_up_recursive(array, targetSum, tmpArray);
      if(finalArray[0] == null || finalArray[0] == 0){
        finalArray[0]= home.errorMessageNoCombination;
        home.combinations = finalArray;
      }else{
        home.combinations = finalArray;
      }
    }

    // function that calculates the combination and returns it
    function sum_up_recursive(numbers, number, partialArray) {
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
        sum_up_recursive(remaining, targetSum, partical_arr);
      }
    }
  }

  angular
  .module('combinationSum')
  .controller('HomeController', [HomeController]);
})();
