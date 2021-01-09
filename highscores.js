init();

function init() {
    const submit = document.getElementById( "submit" );
    submit.addEventListener( "click", function () {
        let tooSchoolForCoolScores;
        if(localStorage.getItem('tooSchoolForCoolScores')) {
            tooSchoolForCoolScores = JSON.parse(localStorage.getItem('tooSchoolForCoolScores'));
        } else {
            tooSchoolForCoolScores = [];
        }
        const lastScore = localStorage.getItem( 'latest-score' ) 
        const initials = document.getElementById( "initials" ).value;
        const userScore = { [initials]: lastScore}
        tooSchoolForCoolScores.push(userScore);
        localStorage.setItem('tooSchoolForCoolScores', JSON.stringify(tooSchoolForCoolScores));
        console.log( initials );
        const timeRemaining = localStorage.getItem( 'timeRemaining' )

        console.log( timeRemaining );
        document.getElementById( "highName" ).style.display = "none"; //hide
        // document.getElementById( "highName" ).classList.add( "hide" )
        document.getElementById( "highScoreList" ).style.display = "block"; //show
        // document.getElementById( "highscoreList" ).classList.remove( "hide" )
        tooSchoolForCoolScores.forEach((record) => {
            Object.keys(record).forEach(key => {
                document.getElementById( "displayHide" ).textContent += " \n " + key + "'s score was:  " + record[key] +' \n '
            })

        })

    } );
}