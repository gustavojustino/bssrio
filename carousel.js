new Glider(document.querySelector('.carousel-slides'), {
    dots: '#dots',
    rewind: true,
    draggable: true,
    arrows: {
        prev: '.carousel-prev',
        next: '.carousel-next'
    },
    responsive: [
        // screens >= 775px
        {
            breakpoint: 775,
            settings:
            {
                slidesToShow: 1,
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
            }
        },
        // screens >= 1024px
        {
            breakpoint: 1024,
            settings:
            {
                slidesToShow: 1,
                slidesToScroll: 'auto',
                itemWidth: 150,
                duration: 0.25
            }
        }]
});