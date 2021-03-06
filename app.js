const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];


  const backdropClose = document.querySelector('.lightbox__overlay');
  const lightboxRef = document.querySelector('.lightbox');
  const imageRef = document.querySelector('.lightbox__image');
  const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
  

  const galleryEl = document.querySelector('.gallery')
  const openmodal = document.querySelector('.lightbox');
  const modalContent = document.querySelector('.lightbox__content')
  const dataSources = [];
  
  galleryEl.addEventListener("click", onClickImage)
  window.addEventListener('click', onButtotClick);


  //?????????????? ???????????????? ?????????? ???? ???????????????? ?? ???????????????????? ???????????? 'is-open'


   galleryItems.map(
    (item, index) =>(

      galleryEl.innerHTML += `<li class="gallery__item">
    <a class="gallery__link"
    href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    data-id="${index}"
    alt="${item.description}"/>
       </a>
   </li>`)
   );

 //???????????????? ?????????????? ???? ?????????? ???? img


  function onClickImage(evt) {
    evt.preventDefault(evt);
  
    if(!evt.target.nodeName=== "IMG"){
      return
    }
    openmodal.classList.add('is-open');

    imageRef.src=evt.target.dataset.source;
    imageRef.alt=evt.target.alt;

    } 
       
   //???????????????? ?????????????????? ?????????? button

     function onButtotClick (e){
       if(e.target.nodeName==="BUTTON"){
       imageRef.src="";
       imageRef.alt="";
       openmodal.classList.remove('is-open');
       //window.removeEventListener('click', onButtotClick);
      }
    
     } ; 


    //???????????????? ???? ???????????? ESC
    window.addEventListener('keydown', e => {
               //currentIndex = dataSourse.indexOf(modalContent.src);
    if(e.key === "Escape") {
      lightboxRef.classList.remove('is-open');
      imageRef.src="";
      imageRef.alt="";
      return
     }
    });






















    






 //const imageMurkup = createImagesList(galleryItems);
   //galleryEl.insertAdjacentHTML("beforeend", imageMurkup )
   //galleryEl.addEventListener('click',createImagesList)

  

   //???????????????? ???? gallery ????????
   //function createImagesList(galleryItems) {
  
   //return galleryItems
   //.map(({preview, original, description }) => {
   // return `
   //<li class="gallery__item">
   //<a
   // class="gallery__link"
   // href="${original}"
   // >
   // <img
    //class="gallery__image"
   // src="${preview}"
   // data-source="${original}"
    //alt="${description}"
    // />
    //</a>
    //</li>
    //`;
    //})
    //.join('');
  //}



    
//function onKeydown(e) {
  //if (e.code === "Escape") {
  //  lightboxRef.classList.remove("is-open");
   // galleryEl.removeAttribute("keypress", key);
    //setAttributeOnImage();
  //}
//}

//function setAttributeOnImage(src = "", alt = "", id = "") {
  // position = refs.image.dataset.id;

  //imageRef.dataset.id = id;
  //imageRef.src = src;
  //imageRef.alt = alt;
 

  // refs.overlay.classList.toggle("is-open");
//}





















//?????????????????? ???????? 

//function rightClick(currentIndex) {
  //let nextIndex = currentIndex ? currentIndex : 0;

  //if (nextIndex < galleryItems.length - 1) {
   // nextIndex += 1;
    // } else {
    //  nextIndex = 0;
    //}
  //imageRef.src = galleryItems[nextIndex].original;
  //imageRef.alt = galleryItems[newIndex].alt;
//};