const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imgGallery = document.querySelector('.gallery');
// console.log(imgGallery);

// version 1
// const imageList = images.map((item) => { 
//   return `<li> <img src='${item.url}' alt='${item.alt}' class='gallery__item'/></li>` 
// })


// imgGallery.insertAdjacentHTML("afterbegin", imageList);
// console.log(imageList);


// version function 2
const makeImgGallery = (img) => { 
  return img.map((item) => { 
  return `<li> <img src='${item.url}' alt='${item.alt}' class='gallery__item'/></li>` 
})
}

const imageList = makeImgGallery(images);
imgGallery.insertAdjacentHTML("afterbegin", imageList);
console.log(imageList);