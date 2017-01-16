jQuery(document).ready(function($){

  //open My Tools container
  $('.my-tools-btn').on('click', function(event){
    event.preventDefault();
    $('.my-tools-container').addClass('is-visible');
    $('#watson-marketing-tools').addClass('is-visible');
    $('.my-tools-btn').toggleClass('active');
  });
  //close My Tools container
  $('#close-my-tools-btn').on('click', function(event){
    event.preventDefault();
    $('.my-tools-container').removeClass('is-visible');
    $('#watson-marketing-tools').removeClass('is-visible');
    $('.my-tools-btn').toggleClass('active');
  });

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

  /* UBX hide/show sections */
  $("#ubx-show-sections").click(function(){
    $("#ubx-section-wrapper").slideToggle("fast");
    $("#ubx-show-sections-label").text( $("#ubx-show-sections-label").text() == '+ Show sections' ? "- Hide sections" : "+ Show sections");
  });

  $("#ubx-show-addon").click(function(){
    $("#ubx-addon-wrapper").slideToggle("fast");
    $("#ubx-show-addon-label").text( $("#ubx-show-addon-label").text() == '- Hide add-ons' ? "+ Show add-ons" : "- Hide add-ons");
  });

  /* WCA hide/show sections */
  $("#wca-show-sections").click(function(){
    $("#wca-section-wrapper").slideToggle("fast");
    $("#wca-show-sections-label").text( $("#wca-show-sections-label").text() == '+ Show sections' ? "- Hide sections" : "+ Show sections");
  });

  $("#wca-show-addon").click(function(){
    $("#wca-addon-wrapper").slideToggle("fast");
    $("#wca-show-addon-label").text( $("#wca-show-addon-label").text() == '- Hide add-ons' ? "+ Show add-ons" : "- Hide add-ons");
  });

  /* CXA hide/show sections */
  $("#cxa-show-sections").click(function(){
    $("#cxa-section-wrapper").slideToggle("fast");
    $("#cxa-show-sections-label").text( $("#cxa-show-sections-label").text() == '+ Show sections' ? "- Hide sections" : "+ Show sections");
  });

  $("#cxa-show-addon").click(function(){
    $("#cxa-addon-wrapper").slideToggle("fast");
    $("#cxa-show-addon-label").text( $("#cxa-show-addon-label").text() == '- Hide add-ons' ? "+ Show add-ons" : "- Hide add-ons");
  });

  /* Realtime hide/show sections */
  $("#realtime-show-sections").click(function(){
    $("#realtime-section-wrapper").slideToggle("fast");
    $("#realtime-show-sections-label").text( $("#realtime-show-sections-label").text() == '+ Show sections' ? "- Hide sections" : "+ Show sections");
  });

  $("#realtime-show-addon").click(function(){
    $("#realtime-addon-wrapper").slideToggle("fast");
    $("#realtime-show-addon-label").text( $("#realtime-show-addon-label").text() == '- Hide add-ons' ? "+ Show add-ons" : "- Hide add-ons");
  });

  /* MI hide/show sections */
  $("#mi-show-sections").click(function(){
    $("#mi-section-wrapper").slideToggle("fast");
    $("#mi-show-sections-label").text( $("#mi-show-sections-label").text() == '+ Show sections' ? "- Hide sections" : "+ Show sections");
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
