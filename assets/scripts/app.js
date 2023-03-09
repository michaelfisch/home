const Portfolio = function() {
	// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

	function makeWords() {
		var words = [
			{
				text: "Ruby/Rails", // Text you want to appear as an item in bubble
				weight: 6 // Weight of text, use scale of 1-10
			}, {
				text: "CSS3",
				weight: 9
			}, {
				text: "JavaScript",
				weight: 8
			}, {
				text: "jQuery",
				weight: 8
			}, {
				text: "Git",
				weight: 10
			}, {
				text: "Python",
				weight: 2
			}, {
				text: "Ember",
				weight: 4
			}, {
				text: "Heroku",
				weight: 7
			}, {
				text: "HTML5",
				weight: 9
			}, {
				text: "Grunt",
				weight: 5
			}, {
				text: "Sass",
				weight: 5
			}, {
				text: "React",
				weight: 2
			}, {
				text: "AWS",
				weight: 5
			}, {
				text: "MongoDB",
				weight: 6
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
				"I'm a Customer Success & Support Specialist", "I'm passionate about support, technology and athletics...", "But more importantly...", "I enjoy helping customers solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: .2,
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
