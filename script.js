const sliderBox = document.querySelector('.slider-box');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const sliderItem = document.querySelectorAll('.slider-item')
const carouselImages = document.querySelectorAll('.slider-img');
const carouselWidth = 800;
const carouselSpeed = 3000;

let index = 0;

const handleCarousel = () => {
  index++
  changeImage();
}

let startCarousel = setInterval(handleCarousel, carouselSpeed);

const changeImage = () => {
  if(index > carouselImages.length - 1){
    index = 0;
  } else if(index < 0){
    index = carouselImages.length - 1
  }

  sliderItem.forEach(item => {
    if(item.classList.contains('active')){
      item.classList.remove('active');
      item.classList.remove('slider-animation')
    }
  })

  sliderItem[index].classList.add('active');
  sliderItem[index].classList.remove('slider-animation-left');
  sliderItem[index].classList.add('slider-animation-right');
}

const handleNextArr = () => {
  index++;
  resetInterval();
  sliderItem[index].classList.remove('slider-animation-left');
  sliderItem[index].classList.add('slider-animation-right');
}

const handlePrevArr = () => {
  index--;
  resetInterval();
  sliderItem[index].classList.remove('slider-animation-right');
  sliderItem[index].classList.add('slider-animation-left');
}

const resetInterval = () => {
  changeImage();
  clearInterval(startCarousel);
  startCarousel = setInterval(handleCarousel, carouselSpeed);
}

rightBtn.addEventListener('click', handleNextArr)
leftBtn.addEventListener('click', handlePrevArr)