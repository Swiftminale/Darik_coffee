import "./GalleryPage.css";
import ModalImage from "react-modal-image";

const photos = [
  // Add URLs of your images here
  "../../pic/pic 9.png",
  "../../pic/pic 8.jpg",
  "../../pic/pic 7.jpg",
  "../../pic/pic 6.jpg",
  "../../pic/pic 5.jpg",
  "../../pic/pic 4.jpg",
  "../../pic/pic 3.jpg",
  "../../pic/pic 2.jpg",
  "../../pic/pic 1.jpg",
];

const Gallerypage = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [photoIndex, setPhotoIndex] = useState(0);

  //   const openLightbox = (index) => {
  //     setPhotoIndex(index);
  //     setIsOpen(true);
  //   };

  return (
    <div className="gallery">
      {photos.map((photo, index) => (
        <div key={index} className="photo">
          <ModalImage small={photo} large={photo} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallerypage;
