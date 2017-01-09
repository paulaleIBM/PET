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
      /*$('#ubx-btn').addClass('is-visible');*/
      document.getElementById('ubx-btn').style.display = 'block';
      /*$('ubx-switch').show();*/
      console.log("checked");
    }
    else {
      /*$('#ubx-btn').removeClass('is-visible');*/
      document.getElementById('ubx-btn').style.display = 'none';
      /*$('ubx-switch').hide();*/
      console.log("unchecked");
    }
  });

  $("#ubx-show-sections").click(function(){
    $("#ubx-inner-wrapper").slideToggle("fast");
    
  });

});
