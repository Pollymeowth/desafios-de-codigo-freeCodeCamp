let thumbnails = document.querySelectorAll('.gallery-item');
let closeBtn = document.getElementById("close-btn");
let lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById("lightbox-image");

function openImage(img) {
  console.log("click")
  let thumbSrc = img.src;
  let realSizeSrc = thumbSrc.replace('-thumbnail', "");

  lightboxImage.src = realSizeSrc;
  lightbox.style.display = "flex";


}

//evento nas thumbnails 
thumbnails.forEach((img) => img.addEventListener("click", () => openImage(img)));

//fechar pelo botao
closeBtn.addEventListener("click", () => { lightbox.style.display = "none"; })

//fechar clicando fora da imagem

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none"
  }
});
