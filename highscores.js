init();

function init() {
    const submit = document.getElementById( "submit" );
    submit.addEventListener( "click", function () {
        const initials = document.getElementById( "initials" ).value;
        console.log( initials );
        const timeRemaining = localStorage.getItem( 'timeRemaining' )
        console.log( timeRemaining );
        document.getElementById( "highName" ).style.display = "none"; //hide
        // document.getElementById( "highName" ).classList.add( "hide" )
        document.getElementById( "highscoreList" ).style.display = "block"; //show
        // document.getElementById( "highscoreList" ).classList.remove( "hide" )
        document.getElementById( "displayHide" ).textContent = "  " + initials + "  did it in:  " + timeRemaining
    } );
}