const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Ruby/Rails",
				weight: 10
			}, {
				text: "css3",
				weight: 12
			}, {
				text: "javascript",
				weight: 12
			}, {
				text: "jquery",
				weight: 8
			}, {
				text: "Git",
				weight: 15
			}, {
				text: "python",
				weight: 4
			}, {
				text: "ember",
				weight: 9
			}, {
				text: "heroku",
				weight: 8
			}, {
				text: "html5",
				weight: 12
			}, {
				text: "grunt",
				weight: 5
			}, {
				text: "sass",
				weight: 5
			}, {
				text: "react",
				weight: 4
			}, {
				text: "AWS",
				weight: 4
			}, {
				text: "MongoDB",
				weight: 4
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
				"am a Digital Marketing Analyst, Customer Success Specialist and a Frontend Web Developer", "am passionate about cooking", "also love the Boston Red Sox.", "am a team player", "work hard", "solve problems."
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
