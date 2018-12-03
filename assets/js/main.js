function personaleModal() {
  let personalebtns = $(".personale-btn");
  for (var i = 0; i < personalebtns.length; i++) {
    personalebtns[i].onclick = function() {
      // modal til block
      $(".personale-modal").css("display", "block");
      // få fat i det rigtige billede og insert det i modal
      $(".modal-img").attr("src", $(this).parent().prev().attr("src"));
      // få fat i den rigtige tekst og insert det i modal
      $(".modal-info").html($(this).next().html());
    }
    // modal til none når man trykker på close
    $(".closebtn").click(function() {
      $(".personale-modal").css("display", "none");
    });
  }
}

function navbg() {
  // hvis width af window er mindre end 992px når man loader siden
  if ($(window).width() < 992) {
    $("#nav").css("background", "#222831");
  } else {
    $("#nav").css("background", "transparent");
  }

  // hvis scroll position er mere end 50 når man loader siden
  if ($(window).scrollTop() > 50) {
    $("#nav").css("background", "#222831");
  }

  // skift baggrund på nav hvis scroll position er mere end 50, fjern hvis ikke
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $("#nav").css("background", "#222831");
    } else if ($(window).width() > 992) {
      $("#nav").css("background", "transparent");
    }
  });

  // hvis man resizer window ned til under 992px, så skift baggrund
  $(window).resize(function() {
    if ($(window).width() < 992 || $(window).scrollTop() > 50 ) {
      $("#nav").css("background", "#222831");
    } else {
      $("#nav").css("background", "transparent");
    }
  });
}


// luk mobil nav når man trykker på en af links
$(function(){
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });

// animation når man trykker på links
$("a[href^='#']").click(function(e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	}, 500 );
});

// Initialize Animate on scroll libary
AOS.init();

function accordion() {
  //når man trykker på plus eller minus knappen, så vil priser enten slide op eller ned og knap vil blive til + eller -
  $(".pricebtn").each(function() {
    $(this).click(function() {
      $(this).parent().next().slideToggle();
      if ($(this).html() == "+") {
        $(this).html("-");
      } else {
        $(this).html("+");
      }
    })
  });
}


// SLIDER PLUGIN
jssor_1_slider_init = function() {

    var jssor_1_options = {
      $AutoPlay: 1,
      $Idle: 0,
      $SlideDuration: 5000,
      $SlideEasing: $Jease$.$Linear,
      $PauseOnHover: 0,
      $SlideWidth: 140,
      $Align: 0
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 2000;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $Jssor$.$AddEvent(window, "load", ScaleSlider);
    $Jssor$.$AddEvent(window, "resize", ScaleSlider);
    $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
};

function valgAfService() {
  // når man skifter i select, så vis den div med radios der passer til select value
  $("#valgafservice").change(function() {
    if ($("#valgafservice").val() == "enPerson") {
      $(".enperson-radios").fadeIn();
      $(".familie-radios").hide();
      $(".institution-radios").hide();
    } else if ($("#valgafservice").val() == "familie") {
      $(".familie-radios").fadeIn();
      $(".enperson-radios").hide();
      $(".institution-radios").hide();
    } else if ($("#valgafservice").val() == "institution") {
      $(".institution-radios").fadeIn();
      $(".familie-radios").hide();
      $(".enperson-radios").hide();
    }
  });
}
