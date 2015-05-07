//Only when all of the HTML is loaded, call the initialize function;
$(document).ready(function(){
  //-------------- added vars  -----------
    // var startTrain = "";
    // var endLin = "";
    // var stStn = "";
    // var endStn = "";
  // ----------end of added vars ---------
    var mta = {
      'n': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
      'l': ['8th-l', '6th', 'us', '3rd', '1st'],
      's': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
    };

    function menu() {
      var response = prompt('Welcome to MTA!!! \n(m)ta or (q)uit');
      while(response !== 'q') {
        var userInput = getUserInput();
        var tripLength = calculateStops(userInput);
        alert('Your trip length is ' + tripLength + ' stops!');
      }
    }

    function getUserInput() {
      // var startTrain = prompt('What train do you want to get on at: \n' + Object.keys(mta).join(', ') + '?');
    $('#calcJourney').click(function(){
      var startTrain = $('#startTrain').val();
     console.log("startTrain = "+startTrain);
      //})
    //----------------------------------
    //  var firstStop = prompt('Which stop: ' + mta[startTrain].join(', '));
      var firstStop = $('#firstStop').val();
     console.log("firstStop = "+firstStop);
      })
    //----------------------------------
      var stopTrain = prompt('What train do you want to get on at: \n' + Object.keys(mta).join(', ') + '?');
    //-----------------------------------------
//      var stopTrain = $('#stopTrain').val();
//     console.log("stopTrain = "+stopTrain);
    //-----------------------------------------
      var lastStop = prompt('Which stop: ' + mta[stopTrain].join(', '));
      return {startTrain: startTrain, 
              firstStop: firstStop,
              stopTrain: stopTrain,
              lastStop: lastStop};
    }

    function calculateStops(userInput) {
      return userInput.startTrain === userInput.stopTrain ? sameLine(userInput) : differentLines(userInput);
    }

    function differentLines(userInput) {
      var intersection = mta[userInput.startTrain].filter(function(stop) {
          return mta[userInput.stopTrain].indexOf(stop) != -1;
        })[0];

      var startTrainIndex = mta[userInput.startTrain].indexOf(userInput.firstStop);
      var startTrainIntersectionIndex = mta[userInput.startTrain].indexOf(intersection);
      var firstTripLength = Math.abs(startTrainIndex - startTrainIntersectionIndex);

      var stopTrainIndex = mta[userInput.stopTrain].indexOf(userInput.lastStop);
      var stopTrainIntersectionIndex = mta[userInput.stopTrain].indexOf(intersection);
      var lastTripLength = Math.abs(stopTrainIndex - stopTrainIntersectionIndex);

      return firstTripLength + lastTripLength;
    }

    function sameLine(userInput) {
      return Math.abs(mta[userInput.startTrain].indexOf(userInput.firstStop) - mta[userInput.stopTrain].indexOf(userInput.lastStop));
    }

    menu();
})