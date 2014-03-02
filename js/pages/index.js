
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
