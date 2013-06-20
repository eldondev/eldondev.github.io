$(function () {
$('.homesection').each( function (index, link) {
	if(location.pathname == '/') {
		link.attributes['href'].textContent = link.attributes['href'].textContent.replace(/^\//,'')
	}
}
)
});
