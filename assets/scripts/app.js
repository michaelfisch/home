const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Ruby/Rails",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "jquery",
				weight: 6
			}, {
				text: "Git",
				weight: 7
			}, {
				text: "python",
				weight: 5
			}, {
				text: "ember",
				weight: 9
			}, {
				text: "heroku",
				weight: 15
			}, {
				text: "html5",
				weight: 7
			}, {
				text: "grunt",
				weight: 7
			}, {
				text: "sass",
				weight: 3
			}, {
				text: "react",
				weight: 5
			}, {
				text: "AWS",
				weight: 5
			}, {
				text: "MongoDB",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.coding-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "also love the Boston Red Sox.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
