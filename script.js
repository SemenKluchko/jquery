;
function removeClass() {
    $('.nav-link').removeClass('active');
    $('.tab-pane').removeClass('show');
    $('.tab-pane').removeClass('active');
}

$('.nav-link').on('click', (event) => {
    removeClass();
    $(event.target).toggleClass('active');
    $( ".tab-pane" ).each(function( i ) {
        if ( $( this ).hasClass('active') &&  $( this ).hasClass('show')) {
            $( this ).removeClass('active');
            $( this ).removeClass('show');
        } else {
            $( this ).toggleClass('active');
            $( this ).toggleClass('show');
        }
      });

})
