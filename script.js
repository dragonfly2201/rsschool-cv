
$(document).ready(function() {
 $('.burger').click(function(){
    $('.burger,.nav,.nav-list').toggleClass('active')
    $('body').toggleClass('lock')
});
});

$('.nav-list').click(function(event){
    $('.burger,.nav,.nav-list').removeClass('active')
    $('body').removeClass('lock')
});

