
$(document).ready(function() 
{
	align_paragraphs_based_on_screen_width();
});

$(window).resize(function()
{
	align_paragraphs_based_on_screen_width();
});

function align_paragraphs_based_on_screen_width()
{
	if( $('body').innerWidth() < 768 )
	{
		$("p").css("display","inline");
		$("#back-links").css("padding-top","10px");
	}
	else
	{
		$("p").css("display","block");
		$("#back-links").css("padding-top","0");
	}
}