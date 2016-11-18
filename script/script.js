$(document).ready(function(){

  // Main nav to scroll
  $("#nav-menu").click(function(evn){
    evn.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top -navOffset}, 0);
  });

  $("nav a").click(function(evn){
      evn.preventDefault();
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top -navOffset}, 400);
  });

  $(".mobile-nav a").click(function(evn){
      evn.preventDefault();
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top -navOffset}, 400);
  });


  // Sluzby nav to switch
  $(".sluzby-web").click(function(evn){
    evn.preventDefault();
    $('#sluzby-uvod').css("display", "none");
    $('#sluzby-strategie').css("display", "none");
    $('#sluzby-web').css("display", "block");

    $('.sluzby-nav > a').removeClass("active2");
    $('.sluzby-nav > .sluzby-web').addClass("active2");
    $('.sluzby-nav > a').css("display", "inline-block");

    $('html, body').animate({
      scrollTop: $('#sluzby').offset().top -navOffset}, 200);
  });

  $(".sluzby-strategie").click(function(evn){
    evn.preventDefault();
    $('#sluzby-uvod').css("display", "none");
    $('#sluzby-web').css("display", "none");
    $('#sluzby-strategie').css("display", "block");

    $('.sluzby-nav > a').removeClass("active2");
    $('.sluzby-nav > .sluzby-strategie').addClass("active2");
    $('.sluzby-nav > a').css("display", "inline-block");

    $('html, body').animate({
      scrollTop: $('#sluzby').offset().top -navOffset}, 200);
  });

  $(".sluzby-uvod").click(function(evn){
    evn.preventDefault();
    $('#sluzby-uvod').css("display", "block");
    $('#sluzby-web').css("display", "none");
    $('#sluzby-strategie').css("display", "none");
    $('.sluzby-nav > a').css("display", "none");

    $('html, body').animate({
      scrollTop: $('#sluzby').offset().top -navOffset}, 200);
  });


  // Reseni nav to show
  $(".reseni-table a").click(function(evn){
    evn.preventDefault();
    $(this.hash).toggle()
  });

  $(".reseni-toggle").click(function(evn){
    evn.preventDefault();
    $('.reseni-table div:first-of-type').toggle();
    $('.reseni-table div').css("min-width", "320px");
  });


  // CTA to scroll
  $(".btn-uvod").click(function(evn){
      evn.preventDefault();
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top -navOffset}, 400);
  });

  $(".sluzby-reseni").click(function(evn){
    evn.preventDefault();
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top -navOffset}, 400);
  });


  // Fix nav after scroll
  var  mn = $("#main-nav");
  mns = "nav-fix";
  hdr = $('header').height();

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr -91 ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });


  // Nav offset with width change
  var navOffset = 89
  if (matchMedia) {
  var mq = window.matchMedia("(min-width: 600px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
  }

  function WidthChange(mq) {
    if (mq.matches) {
      navOffset = 89
    } else {
      navOffset = -3
    }
  }

  window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - navOffset);
  });


  // Nav to scroll array (a+href)
  var aChildren = $("nav li").children(); // find the a children of the list items
  var aArray = []; // create the empty aArray
  for (var i=0; i < aChildren.length; i++) {
      var aChild = aChildren[i];
      var ahref = $(aChild).attr('href');
      if (ahref.startsWith('#')) { // add to query if it is id link
        aArray.push(ahref);
      }
  };

  // add active class after scroll
  $(window).scroll(function(){
      var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
      var windowHeight = $(window).height(); // get the height of the window
      var docHeight = $(document).height();

      for (var i=0; i < aArray.length; i++) {
          var theID = aArray[i];
          var divPos = $(theID).offset().top; // get the offset of the div from the top of page
          var divHeight = $(theID).height(); // get the height of the div in question
          if (windowPos +250 >= divPos && windowPos < (divPos + divHeight -100)) {
              $("a[href='" + theID + "']").addClass("active");
          } else {
              $("a[href='" + theID + "']").removeClass("active");
          }
      }
  });


  /*? showcase galery
  var container = $('.showcase');

  $(".showcase-images>img").click(function(evn){
    $(".showcase-images").css("width","100%")
    $(".showcase-images").css("margin-top","60px")

    container.animate({
    scrollTop: $(this).offset().top - container.offset().top + container.scrollTop() -20
    }, 200);

  });*/


  // scrolldepth tracking
  jQuery(function() {
    jQuery.scrollDepth({
      elements: ['#sluzby', '#projekty', '#konzultace', '#cenik', '#kontakt', '#omne', 'footer'],
      percentage: false,
      pixelDepth: false,
      nonInteraction: false
    });
  });

});
