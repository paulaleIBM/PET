jQuery(document).ready(function($){

  //open My Tools container
  /*$('.my-tools-btn').on('click', function(event){
    event.preventDefault();
    $('.my-tools-container').addClass('is-visible');
    $('#watson-marketing-tools').addClass('is-visible');
    $('.my-tools-btn').toggleClass('active');
  });*/

  $( ".my-tools-btn" ).click(function() {
    $( "#my-tools-container" ).toggle();
    $("#watson-marketing-tools").toggle();
    $('.my-tools-btn').toggleClass('active');
});
  //close My Tools container
  $('#close-my-tools-btn').on('click', function(event){
    event.preventDefault();
    /*$('.my-tools-container').removeClass('is-visible');
    $('#watson-marketing-tools').removeClass('is-visible');*/
    document.getElementById('my-tools-container').style.display = 'none';
    document.getElementById('watson-marketing-tools').style.display = 'none';
    $('.my-tools-btn').toggleClass('active');
  });

  /* UBX hide/show sections */
  $("#ubx-show-sections").click(function(){
    $("#ubx-section-wrapper").slideToggle("fast");
    $("#ubx-show-sections-label").text( $("#ubx-show-sections-label").text() == '+ Show features' ? "- Hide features" : "+ Show features");
  });

  $("#ubx-show-addon").click(function(){
    $("#ubx-addon-wrapper").slideToggle("fast");
    $("#ubx-show-addon-label").text( $("#ubx-show-addon-label").text() == '- Hide add-ons' ? "+ Show add-ons" : "- Hide add-ons");
  });

  /* WCA hide/show sections */
  $("#wca-show-sections").click(function(){
    $("#wca-section-wrapper").slideToggle("fast");
    $("#wca-show-sections-label").text( $("#wca-show-sections-label").text() == '+ Show features' ? "- Hide features" : "+ Show features");
  });

  $("#wca-show-addon").click(function(){
    $("#wca-addon-wrapper").slideToggle("fast");
    $("#wca-show-addon-label").text( $("#wca-show-addon-label").text() == '- Hide add-ons' ? "+ Show add-ons" : "- Hide add-ons");
  });

  /* CXA hide/show sections */
  $("#cxa-show-sections").click(function(){
    $("#cxa-section-wrapper").slideToggle("fast");
    $("#cxa-show-sections-label").text( $("#cxa-show-sections-label").text() == '+ Show features' ? "- Hide features" : "+ Show features");
  });

  $("#cxa-show-addon").click(function(){
    $("#cxa-addon-wrapper").slideToggle("fast");
    $("#cxa-show-addon-label").text( $("#cxa-show-addon-label").text() == '- Hide add-ons' ? "+ Show add-ons" : "- Hide add-ons");
  });

  /* Realtime hide/show sections */
  $("#realtime-show-sections").click(function(){
    $("#realtime-section-wrapper").slideToggle("fast");
    $("#realtime-show-sections-label").text( $("#realtime-show-sections-label").text() == '+ Show features' ? "- Hide features" : "+ Show features");
  });

  $("#realtime-show-addon").click(function(){
    $("#realtime-addon-wrapper").slideToggle("fast");
    $("#realtime-show-addon-label").text( $("#realtime-show-addon-label").text() == '+ Show add-ons' ? "- Hide add-ons" : "+ Show add-ons");
  });

  /* MI hide/show sections */
  $("#mi-show-sections").click(function(){
    $("#mi-section-wrapper").slideToggle("fast");
    $("#mi-show-sections-label").text( $("#mi-show-sections-label").text() == '- Hide features' ? "+ Show features" : "- Hide features");
  });

  $("#mi-show-addon").click(function(){
    $("#mi-addon-wrapper").slideToggle("fast");
    $("#mi-show-addon-label").text( $("#mi-show-addon-label").text() == '- Hide add-ons' ? "+ Show add-ons" : "- Hide add-ons");
  });

  $('#ubx-1').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('ubx-dashboards').style.display = 'block';
    }
    else {
      document.getElementById('ubx-dashboards').style.display = 'none';
      console.log("unchecked");
    }
  });

  /* Campaign Automation Switches */
  $('#wca-switch').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('wca-btn').style.display = 'block';
      console.log("checked");
    }
    else {
      document.getElementById('wca-btn').style.display = 'none';
      console.log("unchecked");
    }
  });

  $('#ca-1').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('wca-overview-btn').style.display = 'block';
      console.log("checked");
    }
    else {
      document.getElementById('wca-overview-btn').style.display = 'none';
      console.log("unchecked");
    }
  });

  $('#ca-2').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('wca-workspaces-btn').style.display = 'block';
      console.log("checked");
    }
    else {
      document.getElementById('wca-workspaces-btn').style.display = 'none';
      console.log("unchecked");
    }
  });

  $('#ca-3').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('wca-programs-btn').style.display = 'block';
      console.log("checked");
    }
    else {
      document.getElementById('wca-programs-btn').style.display = 'none';
      console.log("unchecked");
    }
  });

  $('#ca-4').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('wca-social-btn').style.display = 'block';
      console.log("checked");
    }
    else {
      document.getElementById('wca-social-btn').style.display = 'none';
      console.log("unchecked");
    }

    $('#ca-5').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-mobile-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-mobile-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-6').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-email-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-email-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-7').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-landingpage-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-landingpage-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-8').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-performancesnapshot-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-performancesnapshot-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-9').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-goals-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-goals-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-10').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-journeydesign-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-journeydesign-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-11').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-assetlibrary-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-assetlibrary-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-12').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-score-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-score-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-13').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-alerts-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-alerts-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-14').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-audience-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-audience-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-15').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-databaseadmin-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-databaseadmin-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-16').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-resources-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-resources-btn').style.display = 'none';
        console.log("unchecked");
      }
    });

    $('#ca-17').on("change", function(event){
      if($(this).is(":checked")){
        document.getElementById('wca-devresources-btn').style.display = 'block';
        console.log("checked");
      }
      else {
        document.getElementById('wca-devresources-btn').style.display = 'none';
        console.log("unchecked");
      }
    });
  });
  /* CXA Switches */
  $('#cxa-switch').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('cxa-btn').style.display = 'block';
      console.log("checked");
    }
    else {
      document.getElementById('cxa-btn').style.display = 'none';
      console.log("unchecked");
    }
  });

  /* Marketing Insights Switches */
  $('#mi-switch').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('mi-btn').style.display = 'block';
      console.log("checked");
    }
    else {
      document.getElementById('mi-btn').style.display = 'none';
      console.log("unchecked");
    }
  });

  /* Realtime Personalization Switches */
  $('#realtime-switch').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('realtime-btn').style.display = 'block';
      console.log("checked");
    }
    else {
      document.getElementById('realtime-btn').style.display = 'none';
      console.log("unchecked");
    }
  });

  /* UBX Switches*/

  $('#ubx-switch').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('ubx-btn').style.display = 'block';
      console.log("checked");
    }
    else {
      document.getElementById('ubx-btn').style.display = 'none';
      console.log("unchecked");
    }
  });

  $('#ubx-2').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('ubx-workspaces').style.display = 'block';
    }
    else {
      document.getElementById('ubx-workspaces').style.display = 'none';
      console.log("unchecked");
    }
  });

  $('#ubx-3').on("change", function(event){
    if($(this).is(":checked")){
      document.getElementById('ubx-da').style.display = 'block';
    }
    else {
      document.getElementById('ubx-da').style.display = 'none';
      console.log("unchecked");
    }
  });

  $('.dropdown.keep-open').on({
    "shown.bs.dropdown": function() { this.closable = false; },
     "click":             function() { this.closable = true; },
     "hide.bs.dropdown":  function() { return this.closable; }
  });

  $(function() {
      $( "#sortable" ).sortable({

      });
  });

  $(function() {
      $( "#ubx-sortable" ).sortable({

      });
  });

});
