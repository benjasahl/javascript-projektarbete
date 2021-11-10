//Gallery modal
const startImage = document.getElementById("start-image");
const galleryModal = document.getElementById("gallery-modal-wrapper");
const galleryImage = document.getElementsByClassName("image");
const thumbnailWrapper = document.getElementById("thumbnails-wrapper");
const thumbnail = document.getElementsByClassName("thumbnail");

const imageSrc = [
  {
    name: "./media/img/gallery-dolphins.jpg",
  },
  {
    name: "./media/img/gallery-monkeys.jpg",
  },
  {
    name: "./media/img/gallery-panda.jpg",
  },
  {
    name: "./media/img/gallery-seal.jpg",
  },
  {
    name: "./media/img/gallery-lion.jpg",
  },
  {
    name: "./media/img/gallery-alpacka.jpg",
  },
  {
    name: "./media/img/gallery-penguin.jpg",
  },
];

/* 
The arrow function "openGalleryModal" iterates through galleryImage array and targets each image, 
and when an image is "clicked", the galleryModal will be displayed by setting the display-style to flex.
Another for-loop is set to iterate through the imageSrc-array and checks if the galleryImage iteration is equal
to the imageSrc iteration. In that case the source of the startImage will be set to the iterated imageSrc name, 
and the thumbnailWrapper will contain the thumbnail images taken from the array imageSrc. After that each thumbnail-image
will have a classname "thumbnail" and an onclick-function called with "setStartImage". The activeThumbnail
function is also called (read below about the activeThumbnail-function).
*/
const openGalleryModal = () => {
  for (let i = 0; i < galleryImage.length; i++) {
    galleryImage[i].addEventListener("click", () => {
      galleryModal.style.display = "flex";
      for (let j = 0; j < imageSrc.length; j++) {
        if (i === j) {
          startImage.setAttribute("src", imageSrc[i].name);
        }
        thumbnailWrapper.innerHTML = imageSrc
          .map(
            (img) =>
              `<img src="${img.name}" class="thumbnail" onclick="setStartImage(this.src)">`
          )
          .join("");
      }
      activeThumbnail();
    });
  }
};

/*
The arrow function "setStartImage" contains a for-loop which iterates through the thumbnail-array, and sets the source
according to the "clicked" thumbnail. The activeThumbnail function is also called (read below about the activeThumbnail-function).
 */

const setStartImage = (src) => {
  for (let i = 0; i < thumbnail.length; i++) {
    startImage.setAttribute("src", src);
  }
  activeThumbnail();
};

/* 
The arrow function "closeGalleryModal" targets the close-gallery element, and when the element (cross/times) is "clicked" it will
set the display-style to none.
*/
const closeGalleryModal = () => {
  document.getElementById("close-gallery").addEventListener("click", () => {
    galleryModal.style.display = "none";
  });
};

/*The arrow function "nextImage" contains a for-loop which iterates through each thumbnail-image. If the iterated 
thumbnail's source is equal to the startImage's source and the iteration-value is not equal to thumbnail.length 
(total amount of thumbnails) minus 1, the source of startImage will be set to the next thumbnail-iteration (i += 1). 
Else if the iteration value is the last value in the array, then the source of startImage will be set to the first 
iteration. The activeThumbnail function is also called (read below about the activeThumbnail-function).*/
const nextImage = () => {
  for (let i = 0; i < thumbnail.length; i++) {
    if (thumbnail[i].src == startImage.src && i !== thumbnail.length - 1) {
      startImage.setAttribute("src", thumbnail[(i += 1)].src);
    } else if (
      thumbnail[i].src == startImage.src &&
      i == thumbnail.length - 1
    ) {
      startImage.setAttribute("src", thumbnail[0].src);
    }
  }
  activeThumbnail();
};

/*The arrow function "prevImage" contains a for-loop which iterates through each thumbnail-image. If the iterated 
thumbnail's source is equal to the startImage's source and the iteration-value is not equal to the first iteration 
in the thumbnail-array, the source of startImage will be set to the previous thumbnail-iteration (i -= 1). Else if 
the iteration value is equal to the first iteration in the thumbnail-array, the source of startImage will be set to 
the last iteration. The activeThumbnail function is also called (read below about the activeThumbnail-function). */
const prevImage = () => {
  for (let i = 0; i < thumbnail.length; i++) {
    if (thumbnail[i].src == startImage.src && i !== 0) {
      startImage.setAttribute("src", thumbnail[(i -= 1)].src);
    } else if (thumbnail[i].src == startImage.src && i == 0) {
      startImage.setAttribute(
        "src",
        thumbnail[(i += thumbnail.length - 1)].src
      );
    }
  }
  activeThumbnail();
};

/* The arrow function activeThumbnail contains a for-loop which iterates through the thumbnail-array. If the thumbnail's source
equals to the startImage source a border will be set to the active thumbnail-image. Else the border will be set to zero pixels 
of the non-active thumbnail-images.
 */
const activeThumbnail = () => {
  for (let i = 0; i < thumbnail.length; i++) {
    if (thumbnail[i].src === startImage.src) {
      thumbnail[i].style.border = "2px solid yellow";
    } else {
      thumbnail[i].style.border = "0px";
    }
  }
};

window.addEventListener("load", () => {
  document.getElementById("next-img").addEventListener("click", nextImage);
  document.getElementById("prev-img").addEventListener("click", prevImage);
  openCardModal();
  closeCardModal();
  openGalleryModal();
  closeGalleryModal();
});

//Card modal
const cardBtn = document.getElementsByClassName("card-button");
const cardModal = document.getElementById("card-modal-wrapper");
const cardContent = document.getElementById("card-modal-content");

const contactPerson = [
  {
    name: "Pingu Penguin",
    role: "Zookeeper",
    number: "0701234567",
    email: "pingu.penguin@vpa.com",
  },
  {
    name: "Douglas Dog",
    role: "Logistics manager",
    number: "0701234567",
    email: "douglas.dog@vpa.com",
  },
  {
    name: "Freddy Frog",
    role: "Educator",
    number: "0701234567",
    email: "freddy.frog@vpa.com",
  },
];

/*The arrow function "closeCardModal" closes down a modal by changing style to display:none when "clicked" */
const closeCardModal = () => {
  document.getElementById("close-card").addEventListener("click", () => {
    cardModal.style.display = "none";
  });
};

/* The arrow function openCardModal contains a for-loop which iterates through the cardBtn-array. And when each 
"read more-button" is "clicked" it displays the cardModal by changing style to display:flex. Then it iterates
through the contactPerson-array and if the contactPerson value is equal to the cardBtn value, the modal's innerHTML
will be inserted with the iterated contactPerson/cardBtn's "contact information-string". */
const openCardModal = () => {
  for (let i = 0; i < cardBtn.length; i++) {
    cardBtn[i].addEventListener("click", () => {
      cardModal.style.display = "flex";
      for (let j = 0; j < contactPerson.length; j++) {
        if (i === j) {
          cardContent.innerHTML = `<h3>Contact info</h3><p><strong>My name:</strong> ${contactPerson[i].name}<br><strong>My role:</strong> ${contactPerson[i].role}<br><strong>My number:</strong> ${contactPerson[i].number}
          <br><strong>My email:</strong> ${contactPerson[i].email}</p><h3>About me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>`;
        }
      }
    });
  }
};
