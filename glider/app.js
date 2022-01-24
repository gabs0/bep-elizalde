window.addEventListener("load", function () {
    new Glider(document.querySelector(".carousel__servicios"), {
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: true,
        dots: ".carousel__indicadores",
        arrows: {
            prev: ".carousel__prev",
            next: ".carousel__next",
        },
        
    });
});
