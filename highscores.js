const submit = getElementById( "sumbit" );
const initials = document.getElementById( "Initials" ).value;





submit.addEventListener( "click", function () {
            var initials;
    var finalScore = {
        initials: initials,
        score: timeRemaining
    };
            console.log( finalScore );



            // var initials = document.getElementById( "Initials" ).value;
            // var finalScore = {
            //     Initials: initials,
            //     score: timeRemaining,
            // };
            // consol.log( finalScore );


            //  createSubmit.addEventListener( "click", function () {
            //              var initials = createInput.value;
            //              if ( initials === null ) {
            //                  console.log( "No value entered!" );
            //              } else {
            //                  var finalScore = {
            //                      initials: initials,
            //                      score: timeRemaining
            //                  }
            //                  console.log( finalScore );
            //                  var allScores = localStorage.getItem( "allScores" );
            //                  if ( allScores === null ) {
            //                      allScores = [];
            //                  } else {
            //                      allScores = JSON.parse( allScores );
            //                  }
            //                  allScores.push( finalScore );
            //                  var newScore = JSON.stringify( allScores );
            //                  localStorage.setItem( "allScores", newScore );
            //                  // Travels to final page
            //                  window.location.replace( "./HighScores.html" );
            //              }