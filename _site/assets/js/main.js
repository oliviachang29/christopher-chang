var lazyLoadInstance = new LazyLoad();

var xs = 480;
var sm = 576;
var md = 768;
var lg = 992;


$(document).ready(function() {
	 if ($(window).width() > md) {
	 	$('#fullpage').fullpage({
			//options here
			// autoScrolling:true,
			navigation: true,
			navigationPosition: 'right',
			responsiveWidth: md
		});
	 }
});