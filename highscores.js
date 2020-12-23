const submit = getElementById( "sumbit" );
const initials = document.getElementById( "Initials" ).value;





submit.addEventListener( "click", function () {
            var initials;
            var finalScore = {
                initials: initials,
                score: timeRemaining
            };
            console.log( finalScore );