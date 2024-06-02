$(document).ready(function() {
    // Open contact form modal
    $('#contactUsButton').click(function() {
        $('#contactFormModal').modal('show');
    });

    // What we do section - Carousel functionality
    $('#whatWeDoSection').carousel({
        interval: 1000
    });

    // Our Project section - Image change functionality
    $('#projectContent .project-item').click(function() {
        var imageSrc = $(this).data('image');
        $('#projectImage img').attr('src', imageSrc);
    });

    // Hover effect for cards
    $('.card').hover(function() {
        $(this).addClass('shadow-lg').css('cursor', 'pointer');
    }, function() {
        $(this).removeClass('shadow-lg');
    });

    // Read more button
    $('.read-more').click(function() {
        window.open('https://www.fylehq.com', '_blank');
    });

    $('.project-description').on('click', function() {
        $('.project-description').removeClass('active');
        $(this).addClass('active');
        $('#mainImage').attr('src', $(this).data('image'));
    });
});
