import Header from "./Header";
import images from "../data/imagesData";
import { useState } from "react";

const Gallery = () => {
  const [thumbnails, setThumbnails] = useState(images);
  return (
    <main className="bg-white rounded-md">
      <div className="container">
        <Header />
        <hr />
        <section className="h-full w-full p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {thumbnails.map((image, index) => (
              <img key={index} src={image.thumbnail} alt="" />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Gallery;
