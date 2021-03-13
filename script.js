;

function removingClass() {
    $('.nav-link').removeClass('active');
    $('.tab-pane').removeClass('active show');
}

$('.nav-link-one').on('click', function () {
    removingClass();
    $('.tab-pane-one').addClass('show active');
    $('.nav-link-one').toggleClass('active');
});

$('.nav-link-two').on('click', function () {
    removingClass();
    $('.tab-pane-two').addClass('show active');
    $('.nav-link-two').toggleClass('active');
});

$('.nav-link-three').on('click', function () {
    removingClass();
    $('.tab-pane-three').addClass('show active');
    $('.nav-link-three').toggleClass('active');   
});
