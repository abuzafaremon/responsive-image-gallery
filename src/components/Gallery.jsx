import { useState } from "react";
import Header from "./Header";
import images from "../data/imagesData";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState(images);
  const [selectThumbnails, setSelectThumbnails] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);

  const handleDragStart = (images) => {
    setDraggedImage(images);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (targetIndex) => {
    if (draggedImage) {
      const updatedImages = galleryImages.filter(
        (image) => image.id !== draggedImage.id
      );
      updatedImages.splice(targetIndex, 0, draggedImage);
      setGalleryImages(updatedImages);
      setDraggedImage(null);
    }
  };

  const handleDeleteSelected = () => {
    const updatedImages = galleryImages.filter(
      (image) => !selectThumbnails.some((selected) => selected.id === image.id)
    );
    setGalleryImages(updatedImages);
    setSelectThumbnails([]);
  };

  return (
    <main className="bg-white rounded-md">
      <div className="container">
        <Header
          selectThumbnails={selectThumbnails}
          setSelectThumbnails={setSelectThumbnails}
          handleDeleteSelected={handleDeleteSelected}
        />
        <hr />
        <section className="h-full w-full p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {galleryImages.map((image, index) => (
              <GalleryImage
                key={index}
                image={image}
                index={index}
                selectThumbnails={selectThumbnails}
                setSelectThumbnails={setSelectThumbnails}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Gallery;
