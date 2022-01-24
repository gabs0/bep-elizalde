window.addEventListener("load", function () {
    new Glider(document.querySelector(".carousel__servicios"), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        itemWidth: 550,
        dots: ".carousel__indicadores",
        arrows: {
            prev: ".carousel__prev",
            next: ".carousel__next",
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 680,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll:1 ,
                    itemWidth: 350,
                    duration: 0.25
                }
            }, 
            {
                // screens greater than >= 1000px
                breakpoint: 970,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 3,
                    slidesToScroll:1 ,
                    itemWidth: 350,
                    duration: 0.25
                }
            }, 
            {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    itemWidth: 350,
                    duration: 0.25
                }
            }
        ]
    });
});
