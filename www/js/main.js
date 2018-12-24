$(function(){

    var $header = $('#header');
    var $footer = $('#footer');
    var $logo = $('#logo');
    var $window = $(window).on('resize', function(){
       var height = $(this).height() - ($header.height() + $footer.height());
       $logo.height(height);
    }).trigger('resize'); //on page load

});
