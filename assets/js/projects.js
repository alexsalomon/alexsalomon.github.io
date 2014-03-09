
$(document).ready(function() 
{
	display_element_using_fadein_effect("#projects-content", 1500);
});

function display_element_using_fadein_effect(element, duration)
{
	$(element).css("display", "none");
	$(element).fadeIn(duration);
}
