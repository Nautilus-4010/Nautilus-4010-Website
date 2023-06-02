class MainSlider {
  IMAGES = [
    "Santi_vic.jpg",
    "Agus.jpg",
    "robot.jpg",
    "taller_prof.jpg",
    "equipo_gradas.jpg",
    "mty_2022.jpg",
    "robot_red.jpg",
    "fll2022.jpg",
    "taller_2022.jpg",
    "fuego.jpg",
    "equipo-biblioteca.jpg",
    "logo-taller.jpg",
    "Ocuiland.jpg",
    "regreso-taller.jpg",
    "driver-station.jpg",
    "Alejandro.jpg",
    "taller-mecanica.jpg",
    "electronica-taller.jpg",
    "girl-stem.jpg",
    "servicio-social.jpg",
    "trabajo-taller.jpg",
    "paleta.jpg"
  ];
  VIEWPORT_WIDTH_FOR_CAROUSEL = 627;
  DELAY_FOR_IMAGE_CHANGE = 5000;

  imgPath;

  constructor(galleryContainerId, imgPath){
    this.currentImageIndex = 0;
    this.imgPath = imgPath;
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
    const imgPath = this.imgPath + this.IMAGES[imageIndex];
    return imgPath
  }
}