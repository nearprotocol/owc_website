(function() {

	AOS.init();

	var lazyTubes = document.querySelectorAll('[data-lazytube]');
	for (var i = 0; i < lazyTubes.length; i++) {
		var lazyTube = lazyTubes[i];

		lazyTube.addEventListener('click', function() {
			var iframe = document.createElement('iframe');
			iframe.src = 'https://www.youtube.com/embed/' + lazyTube.dataset.lazytube + '?autoplay=1&showinfo=0&rel=0';
			iframe.frameBorder = '0';
			iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
			iframe.allowFullscreen = true;

			lazyTube.appendChild(iframe);
		}, { once: true });
	}

})();

