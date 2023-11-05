import { useState } from "react";
import Header from "./Header";
import images from "../data/imagesData";
import GalleryImage from "./GalleryImage";
import UploadImage from "./UploadImage";

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

  const handleFileChange = (e) => {
    const uploadedFiles = e.target.files;

    const newImages = Array.from(uploadedFiles).map((file, index) => {
      const id = galleryImages.length + index + 1;
      const thumbnail = URL.createObjectURL(file);

      return { id, thumbnail };
    });

    setGalleryImages([...galleryImages, ...newImages]);
  };

  return (
    <main className="w-full md:w-3/4 lg:w-2/3 mx-auto bg-white rounded-md">
      <div>
        <Header
          selectThumbnails={selectThumbnails}
          setSelectThumbnails={setSelectThumbnails}
          handleDeleteSelected={handleDeleteSelected}
        />
        <hr />
        <section className="w-full p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
            <UploadImage handleFileChange={handleFileChange} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Gallery;
