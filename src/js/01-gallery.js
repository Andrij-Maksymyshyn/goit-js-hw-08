// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryPictures = document.querySelector('.gallery');
const itemsMarkup = createItemsMarkup (galleryItems);

galleryPictures.insertAdjacentHTML('beforeend', itemsMarkup);

galleryPictures.addEventListener('click', onGalleryPicturesClick);


function createItemsMarkup (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
         <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
        </a>
    </div>
        `;
    })
    .join('');
        }


        import * as basicLightbox from 'basiclightbox'
        
        let instance = basicLightbox.create(
            `<img src="" />`, {

            onShow: instance => {
                window.addEventListener('keydown', pressKey);
            },
            onClose: instance => {
                window.removeEventListener('keydown', pressKey);
            },
        });

        function pressKey(event) {
                        if (event.code === 'Escape') {
                instance.close();
                          }
        }

       
function onGalleryPicturesClick (evt) {
    evt.preventDefault();
        if (!evt.target.classList.contains("gallery__image")) {
        return;
           }

          instance.element().querySelector('img').src = evt.target.dataset.source; 
        instance.show();

        instance.element().querySelector('img').addEventListener("click", () => {
            instance.close();
        }, {once: true});
                                       
    }
// Change code below this line


