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

  /*$('#ubx-switch').prop('checked', true);*/
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

  $("#ubx-show-sections").click(function(){
    $("#ubx-section-wrapper").slideToggle("fast");
  });

  $("#ubx-show-addon").click(function(){
    $("#ubx-addon-wrapper").slideToggle("fast");
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
});
