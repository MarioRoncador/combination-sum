(function() {
  function HomeController() {

    var home = this;
    var title = " - Combination Sum";
    var description = "This calculator takes a set of numbers and returns all possible combinations to reach a given sum. A threshold can be specified and if no combinations adds up to the sum, the closest result is checked agaist the threshold -- Widely used in accounting, auditing, finance and data analysis.";
    var timeNow = new Date().getTime();
    var tmpArray = [];
    var finalArray = [];
    var errorMessageNoCombination = "NO COMBINATIONS";
    var thresholdMessage = "- The closest combination is: ";
    var thresholdYes = " - WITHIN the threshold";
    var thresholdNo = " - NOT WITHIN the threshold";
    var errorMessageNoValues = "PLEASE INSERT THE REQUIRED VALUES";
    var array = [];

    home.title = title;
    home.description = description;
    home.timeNow = timeNow;
    home.errorMessageNoCombination = errorMessageNoCombination;
    home.thresholdMessage = thresholdMessage;
    home.thresholdYes = thresholdYes;
    home.thresholdNo = thresholdNo;
    home.errorMessageNoValues = errorMessageNoValues;


    // function linked to the run button and displys the result
    home.runFunction = function(sum,numbersArray,threshold) {
      home.closestSum = 0;
      arrayBuilder(numbersArray);

      //function that builds an array for input to function
      function arrayBuilder(numbersArray){
        if(numbersArray == null){
          alert(home.errorMessageNoValues);
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
          finalArray[0] = (home.errorMessageNoCombination);
          home.combinations = finalArray;
        }else if(upperLimit > home.closestSum && threshold){
          finalArray[0] = (home.errorMessageNoCombination+" "+home.thresholdMessage+home.closestSum+" "+home.thresholdNo);
          home.combinations = finalArray;
        }else{
          finalArray[0] = (home.errorMessageNoCombination+" "+home.thresholdMessage+home.closestSum+" "+home.thresholdYes);
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
        if(s > home.closestSum && s < targetSum){
          home.closestSum = s;
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

    home.copyResult = function() {
      level = $(this).parent().prev().find('select option:selected').val();
      console.log($(this));
      console.log("Copy function to be implemented");
    }

  }

  angular
  .module('combinationSum')
  .controller('HomeController', [HomeController]);
})();
