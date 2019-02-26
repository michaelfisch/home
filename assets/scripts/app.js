const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Ruby/Rails",
				weight: 10
			}, {
				text: "CSS3",
				weight: 12
			}, {
				text: "JavaScript",
				weight: 12
			}, {
				text: "jQuery",
				weight: 9
			}, {
				text: "Git",
				weight: 15
			}, {
				text: "Python",
				weight: 4
			}, {
				text: "Ember",
				weight: 4
			}, {
				text: "Heroku",
				weight: 8
			}, {
				text: "HTML5",
				weight: 12
			}, {
				text: "Grunt",
				weight: 5
			}, {
				text: "Sass",
				weight: 6
			}, {
				text: "React",
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
				"I'm a Customer Success Specialist and a Frontend Web Developer...", "I'm passionate about frontend development, sports and cooking...", "I'm a team player and I work hard...", "But more importantly...", "I find solutions and solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: .85,
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
