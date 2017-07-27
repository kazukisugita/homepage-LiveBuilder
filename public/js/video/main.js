(function () {

  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector('#heroVideo'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 767px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: '/video/World.mp4',
        type: 'video/mp4'
      }
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      // document.querySelector('#video-container').style.display = 'none';
    }
  });


  function setHeightToHero() {
    var windowInnerHeight = $(window).innerHeight();
    $('#video-container').css('height',windowInnerHeight);
  }

  function detectUserAgent() {
    if(isMobile.tablet == true) {
      document.getElementById("heroVideo").remove();
      var container = document.getElementById("video-container");
      container.classList.add("inTablet");
    }
  }

  function onloadEventHandler() {
    // detectUserAgent();
    setHeightToHero();
  }

  function onWindowResiseHandler() {
    setHeightToHero();
  }

  window.addEventListener('DOMContentLoaded', onloadEventHandler, false);
  window.addEventListener('resize', onWindowResiseHandler, false);

}());
