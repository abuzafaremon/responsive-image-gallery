import { useState } from "react";
import Header from "./Header";
import images from "../data/imagesData";
import GalleryImage from "./GalleryImage";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState(images);
  const [selectThumbnails, setSelectThumbnails] = useState([]);
  console.log(selectThumbnails);
  return (
    <main className="bg-white rounded-md">
      <div className="container">
        <Header selectThumbnails={selectThumbnails} />
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
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Gallery;
