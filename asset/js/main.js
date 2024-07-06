jQuery(document).ready(function ($) {
  function sliderProduct() {
    const slider = $(".slider .slider__inner");

    let btnNext = $(".btn.btn__control.--next"),
      btnPrev = $(".btn.btn__control.--prev");

    let flkSlider = slider.flickity({
      pageDots: false,
      prevNextButtons: false,
      groupCells: true,
      cellAlign: "left",
      freeScroll: false,
      wrapAround: false,
      contain: true,
      dragThreshold: 0,
      on: {
        change: function () {
          toggleBtnControl();
        },
      },
    });
    let flkty = flkSlider.data("flickity");

    const toggleBtnControl = () => {
      if (flkty.selectedIndex - 1 < 0) {
        btnPrev.addClass("opacity-20 pointer-events-none");
        btnNext.removeClass("opacity-20 pointer-events-none");
      } else if (flkty.selectedIndex + 1 == flkty.slides.length) {
        btnPrev.removeClass("opacity-20 pointer-events-none");
        btnNext.addClass("opacity-20 pointer-events-none");
      } else {
        btnPrev.removeClass("opacity-20 pointer-events-none");
        btnNext.removeClass("opacity-20 pointer-events-none");
      }
    };
    toggleBtnControl();

    function handleDrag() {
      if ($(window).width() > 1200) {
        if ($(".img", slider).length > 5) {
          flkty.bindDrag();
        } else {
          flkty.unbindDrag();
        }
      } else {
        flkty.bindDrag();
      }

      if (flkty.isDraggable == true) {
        btnNext.removeClass("1200:hidden");
        btnNext.addClass("inline-flex");
        btnPrev.removeClass("1200:hidden");
        btnPrev.addClass("inline-flex");
      } else {
        btnNext.removeClass("inline-flex");
        btnNext.addClass("1200:hidden");
        btnPrev.removeClass("inline-flex");
        btnPrev.addClass("1200:hidden");
      }
    }
    handleDrag();

    btnPrev.on("click", function () {
      flkSlider.flickity("previous");
    });
    btnNext.on("click", function () {
      flkSlider.flickity("next");
    });
    $(window).resize(function () {
      handleDrag();
      flkty.resize();
    });
  }
  sliderProduct();
  const setLineHeightTimeSection = () => {
    let list = $(".timeline");
    if (list.length > 0) {
      let list = $(".timeline"),
        firstItem = $(".timeline .item").first().height(),
        lastItem = $(".timeline .item").last().height(),
        line = $(".devolopment .line"),
        heightLine = list.height(),
        widthWindown = $(window).width();

      if (widthWindown <= 767) {
        // line.style.height = `${heightLine - lastItem}px`;
        line.css({
          height: `${heightLine - lastItem}px`,
        });
      } else {
        // line.style.height = `${heightLine - (lastItem / 2 + firstItem / 2)}px`;
        line.css({
          height: `${heightLine - (lastItem / 2 + firstItem / 2)}px`,
        });
      }
    }
  };

  $(window).resize(function () {
    setLineHeightTimeSection();
  });
  setLineHeightTimeSection();

  $("body")
    .imagesLoaded()
    .always(function (instance) {
      // Slider
      sliderProduct();
      $(window).resize(function () {
        setLineHeightTimeSection();
      });
      //Line Time
      setLineHeightTimeSection();
    })
    .done(function (instance) {
      console.log("all images successfully loaded");
    });
});
