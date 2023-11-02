const GalleryImage = ({ image, index }) => {
  return (
    <div className="relative cursor-move border-2 rounded-md" draggable={true}>
      <img className="rounded-md" src={image.thumbnail} alt={"image" + index} />
      <input
        type="checkbox"
        name={image.id}
        id={image.id}
        className={
          "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer"
        }
      />
    </div>
  );
};

export default GalleryImage;
