const main = function() {
    const slider = new MainSlider(".galeria-fotos", "img/gallery/");
    slider.renderContent();
    setInterval(() => {
        slider.changeImage();
    }, slider.DELAY_FOR_IMAGE_CHANGE);
    window.onresize = function() {
        slider.renderContent();
    }
}

main();
