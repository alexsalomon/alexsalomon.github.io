
$(document).ready(function() 
{
	display_element_using_fadein_effect(".projects-content", 1500);
	enable_colorful_image_on_hover();
});

function display_element_using_fadein_effect(element, duration)
{
	$(element).css("display", "none");
	$(element).fadeIn(duration);
}

function enable_colorful_image_on_hover()
{   
	$('#project-icons img').bind('mouseenter mouseleave', function() {
	    $(this).attr({
	        src: $(this).attr('src-on-hover') 
	        , 'src-on-hover': $(this).attr('src') 
	    })
	});
}