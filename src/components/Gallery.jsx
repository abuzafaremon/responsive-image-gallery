import { useState } from "react";
import Header from "./Header";
import images from "../data/imagesData";
import GalleryImage from "./GalleryImage";
import UploadImage from "./UploadImage";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState(images); // declare state using mock data
  const [selectThumbnails, setSelectThumbnails] = useState([]);
  const [draggedImage, setDraggedImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  // onDragStart function
  const handleDragStart = (images) => {
    setDragging(true);
    setDraggedImage(images);
  };

  // onDragOver function
  const handleDragOver = (e) => {
    e.preventDefault();
    // getting image id of targeted index
    e?.target?.children[0]?.alt &&
      setDragOverIndex(e?.target?.children[0]?.alt);
  };

  // onDrop function
  const handleDrop = (targetIndex) => {
    setDragging(false);

    if (draggedImage) {
      // remove dragged image from default array
      const updatedImages = galleryImages.filter(
        (image) => image.id !== draggedImage.id
      );
      // insert dragged image to targeted index by splice method
      updatedImages.splice(targetIndex, 0, draggedImage);
      setGalleryImages(updatedImages);
      setDraggedImage(null);
    }
  };

  // function for delete selected image
  const handleDeleteSelected = () => {
    // remove selected image from gallery image array by array.some method
    const updatedImages = galleryImages.filter(
      (image) => !selectThumbnails.some((selected) => selected.id === image.id)
    );
    setGalleryImages(updatedImages);
    setSelectThumbnails([]);
  };

  // function for image upload
  const handleFileChange = (e) => {
    // get uploaded files
    const uploadedFiles = e.target.files;
    // convert uploaded files into an array
    const newImages = Array.from(uploadedFiles).map((file, index) => {
      const id = galleryImages.length + index + 1;
      // generate url for showing in UI
      const thumbnail = URL.createObjectURL(file);

      return { id, thumbnail };
    });

    setGalleryImages([...galleryImages, ...newImages]);
  };

  return (
    <main className="w-full md:w-3/4 lg:w-2/3 mx-auto bg-white rounded-md">
      {/* import gallery header and pass necessary props*/}
      <Header
        selectThumbnails={selectThumbnails}
        setSelectThumbnails={setSelectThumbnails}
        handleDeleteSelected={handleDeleteSelected}
      />
      <hr />
      {/* gallery image section start */}
      <section className="w-full p-6">
        {/* grid layout div start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* show all images in ui by mapping*/}
          {galleryImages.map((image, index) => (
            // pass necessary props in GalleryImages component
            <GalleryImage
              key={index}
              image={image}
              index={index}
              selectThumbnails={selectThumbnails}
              setSelectThumbnails={setSelectThumbnails}
              handleDragStart={handleDragStart}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
              dragging={dragging}
              dragOverIndex={dragOverIndex}
            />
          ))}
          {/* import upload image component and pass necessary props */}
          <UploadImage handleFileChange={handleFileChange} />
        </div>
        {/* grid layout div end */}
      </section>
      {/* gallery image section end */}
    </main>
  );
};

export default Gallery;
