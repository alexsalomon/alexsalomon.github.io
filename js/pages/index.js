
$(document).ready(function() 
{
	//load gravatar image
	var gravatar_image_url = get_gravatar_image_url('alexsalomon.th@gmail.com', 150); //need to change img-circle-border css to change image size
	$('#gravatar_image').attr('src', gravatar_image_url);
});

function get_gravatar_image_url(email, size, default_image, allowed_rating, force_default)
{
	email = typeof email !== 'undefined' ? email : 'alexsalomon.th@gmail.com';
	size = (size >= 1 && size <= 2048) ? size : 80;
	default_image = typeof default_image !== 'undefined' ? default_image : 'mm';
	allowed_rating = typeof allowed_rating !== 'undefined' ? allowed_rating : 'x';
	force_default = force_default === true ? 'y' : 'n';

	return ("http://www.gravatar.com/avatar/" + md5(email.toLowerCase().trim()) + "?size=" + size + "&default=" + encodeURIComponent(default_image) + "&rating=" + allowed_rating + (force_default === 'y' ? "&forcedefault=" + force_default : ''));
}
   
function change_image_source_on_hover(element, nohover_image, hover_image)
{
	$("#" + element).hover(
		function () {
			$(this).attr("src", hover_image);
		},
		function () {
			$(this).attr("src", nohover_image);
		}
	);
}

change_image_source_on_hover("linkedin", "assets/icons/LinkedIn_grey.jpg", "assets/icons/LinkedIn_color.jpg");
change_image_source_on_hover("github", "assets/icons/Github_grey.jpg", "assets/icons/Github_color.jpg");
change_image_source_on_hover("instagram", "assets/icons/Instagram_grey.jpg", "assets/icons/Instagram_color.jpg");
change_image_source_on_hover("email", "assets/icons/email_color.png", "assets/icons/email_color.png");