$(function(){

    var $header = $('#header');
    var $footer = $('#footer');
    var $logo = $('.logo-image-container');
    var $logotext = $('.logo-text-container');
    var $window = $(window).on('resize', function(){
       var height = $(this).height() - ($header.height() + $footer.height());
       $logo.height(height);
       $logotext.height(height);
    }).trigger('resize'); //on page load

});
