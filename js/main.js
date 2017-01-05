jQuery(document).ready(function($){
  //open My Tools container
  $('.my-tools-btn').on('click', function(event){
    event.preventDefault();
    $('.my-tools-container').addClass('is-visible');
    $('.my-tools-btn').toggleClass('active');
  });
  //close My Tools container
  $('#close-my-tools-btn').on('click', function(event){
    event.preventDefault();
    $('.my-tools-container').removeClass('is-visible');
    $('.my-tools-btn').toggleClass('active');
  });
});
