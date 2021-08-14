class MainSlider {
  IMAGES = [
    "driver-station.jpg",
    "taller-mecanica.jpg",
    "electronica-taller.jpg",
    "girl-stem.jpg",
    "servicio-social.jpg",
    "trabajo-taller.jpg"
  ];
  VIEWPORT_WIDTH_FOR_CAROUSEL = 627;
  DELAY_FOR_IMAGE_CHANGE = 5000;

  constructor(galleryContainerId){
    this.currentImageIndex = 0;
    this.galleryContainer = document.querySelector(galleryContainerId);
    this.imageElement = document.createElement("img");
    this.changeImage();
  }

  changeImage(){
    this.currentImageIndex++;
    if (this.currentImageIndex == this.IMAGES.length)
      this.currentImageIndex = 0;
    const imgPath = this.getImagePath(this.currentImageIndex)
    this.imageElement.src = imgPath;
  }

  renderContent(){
    const rootElement = document.querySelector("html");
    const currentViewportWidth = rootElement.clientWidth;
    if(currentViewportWidth > this.VIEWPORT_WIDTH_FOR_CAROUSEL){
      this.showGallery();
    } else {
      this.showSlider();
    }
  }

  showSlider(){
    this.galleryContainer.innerHTML = "";
    this.galleryContainer.appendChild(this.imageElement);
  }

  showGallery(){
    this.galleryContainer.innerHTML = "";
    for(let i = 0; i < this.IMAGES.length; i++) {
      const imgPath = this.getImagePath(i);
      const imageElement = document.createElement("img");
      imageElement.src = imgPath;
      this.galleryContainer.appendChild(imageElement);
    }
  }

  getImagePath(imageIndex){
    const imgPath = "img/landing-page/" + this.IMAGES[imageIndex];
    return imgPath
  }
}