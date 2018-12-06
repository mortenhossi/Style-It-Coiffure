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
     var navMain = $(".navbar-collapse");
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

function mobilbooking() {
  // form validation til mobilfrisør siden
  $(".mobilbtn").click(function() {
    // hvis der ingen value er i nummer, hvis de ikke bruger tal, eller hvis length ikke er 8.
    if ($(".nummermobil").val() === "") {
      event.preventDefault();
      $(".nummermobilerror").html("Skriv venligst telefonnummer");
      $(".mobilikkeudfyldt").html("Udfyld venligst formularen");
    } else if (isNaN($(".nummermobil").val())) {
      event.preventDefault();
      $(".nummermobilerror").html("Skriv venligst telefonnummer");
      $(".mobilikkeudfyldt").html("Udfyld venligst formularen");
    } else if ($(".nummermobil").val().length != 8) {
      event.preventDefault();
      $(".nummermobilerror").html("Skriv venligst telefonnummer");
      $(".mobilikkeudfyldt").html("Udfyld venligst formularen");
    } else {
      $(".nummermobilerror").html("");
    }

    // bliver nødt til at bruge normal javascript, da jQuery returner null her
    let service = document.querySelector("#valgafservice").value;

    if (service === "none") {
      // hvis de ikke har valgt service
      event.preventDefault();
      $(".serviceerror").html("Vælg venligst service");
      $(".mobilikkeudfyldt").html("Udfyld venligst formularen");
    } else {
      $(".serviceerror").html("");
    }

    if ($("#valgafservice").val() === "enPerson") {
      // hvis service er valgt til en person, check om de har trykket på en af radios
      if (!$("#dame-radio").is(":checked") && !$("#herre-radio").is(":checked") && !$("#barn-radio").is(":checked")) {
        event.preventDefault();
        $(".serviceerror").html("Vælg venligst service");
        $(".mobilikkeudfyldt").html("Udfyld venligst formularen");
      } else {
        $(".serviceerror").html("");
      }
    }

    if ($("#valgafservice").val() === "familie") {
      // hvis service er valgt til familie, check om de har trykket på en af radios
      if (!$("#3-5Personer").is(":checked") && !$("#6-8Personer").is(":checked")) {
        event.preventDefault();
        $(".serviceerror").html("Vælg venligst service");
        $(".mobilikkeudfyldt").html("Udfyld venligst formularen");
      } else {
        $(".serviceerror").html("");
      }
    }

    if ($("#valgafservice").val() === "institution") {
      // hvis service er valgt til institution, check om de har trykket på en af radios
      if (!$("#10-20Personer").is(":checked") && !$("#21-30Personer").is(":checked")) {
        event.preventDefault();
        $(".serviceerror").html("Vælg venligst service");
        $(".mobilikkeudfyldt").html("Udfyld venligst formularen");
      } else {
        $(".serviceerror").html("");
      }
    }

    if ($(".formlokation").val() === "") {
      // check om de har valgt en lokation
      event.preventDefault();
      $(".lokationerorr").html("Skriv venligst lokation");
      $(".mobilikkeudfyldt").html("Udfyld venligst formularen");
    } else {
      $(".lokationerorr").html("");
    }
  });
}
