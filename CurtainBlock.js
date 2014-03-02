// CurtainBlock.js
// Written by Jessie Mills
// Edited by Kittyhawk Contrail
function CurtainBlock(persistent,transparency,redir) {$(function() {
	$curtain = $('.CurtainBlock');
	$alert = $('.CurtainBlockAlert');
	$confirm = $('.CurtainBlockConfirm');
	$deny = $('.CurtainBlockDeny');
	complete = 0;
	
    //check to see if we're on a 'safe' tagged page
    allsafe=1;
    $('.tags').each( function(index, element ){
        allsafe=1;
        if( $(element).children('a:contains("nsfw")').length > 0) {
            allsafe=0;
            return false;
        }
    } )
    if (allsafe) {
        $curtain.hide();
        complete = 1; persistent = 0;
    }
	    
	// Checks for localStorage and disables the curtain, if that option is toggled.
	if (persistent) {
	if (localStorage.getItem("curtainConfirm")) {
		$curtain.hide();
			complete = 1;
		};
	};
	// If we see that stored key, run the Curtain.
	if (complete === 0) {
		$confirm.show();
   		$deny.show();
		// Redirect / hide based on user input
		if (transparency) {
			$curtain.css('background-color','rgba(0,0,0,0.85');
		}
		$confirm.click(function () {
			$curtain.fadeOut(750);
			$alert.fadeOut(350);
			// If we're persistent, set up the localStorage
			if (persistent) {
				localStorage.setItem("curtainConfirm", true);
			};
		});
		$deny.click(function () {
			// Redir function
			window.location.replace(redir);
		});
	}
})};
