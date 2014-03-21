
$(document).ready(function() 
{
	load_gravatar_image();
	align_paragraphs_based_on_screen_width();
	display_element_using_fadein_effect("#bio-content", 1500);
	enable_colorful_image_on_hover();
});

$(window).resize(function()
{
	align_paragraphs_based_on_screen_width();
});

function align_paragraphs_based_on_screen_width()
{
	if( $('body').innerWidth() < 380 )
	{
		$("#bio-content").css("width","auto");
		$("p").css("display","inline");
	}
	else if( $('body').innerWidth() > 380 && $('body').innerWidth() < 768 )
	{
		$("#bio-content").css("width","350");
		$("p").css("display","inline");
	}	
	else
	{
		$("#bio-content").css("width","auto");
		$("p").css("display","block");
	}
}

function load_gravatar_image()
{
	//need to change img-circle-border css to change image size
	var gravatar_image_url = get_gravatar_image_url('alexsalomon.th@gmail.com', 135);
	$('#gravatar_image').attr('src', gravatar_image_url);
}

function get_gravatar_image_url(email, size, default_image, allowed_rating, force_default)
{
	email = typeof email !== 'undefined' ? email : 'alexsalomon.th@gmail.com';
	size = (size >= 1 && size <= 2048) ? size : 80;
	default_image = typeof default_image !== 'undefined' ? default_image : 'mm';
	allowed_rating = typeof allowed_rating !== 'undefined' ? allowed_rating : 'x';
	force_default = force_default === true ? 'y' : 'n';

	return ("http://www.gravatar.com/avatar/" + md5(email.toLowerCase().trim()) + "?size=" + size + "&default=" + encodeURIComponent(default_image) + "&rating=" + allowed_rating + (force_default === 'y' ? "&forcedefault=" + force_default : ''));
}

function display_element_using_fadein_effect(element, duration)
{
	$(element).css("display", "none");
	$(element).fadeIn(duration);
}

function enable_colorful_image_on_hover()
{   
	$('#bio-content-icons img').bind('mouseenter mouseleave', function() {
	    $(this).attr({
	        src: $(this).attr('src-on-hover') 
	        , 'src-on-hover': $(this).attr('src') 
	    })
	});
}
