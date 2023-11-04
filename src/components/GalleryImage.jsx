const GalleryImage = ({
  image,
  index,
  selectThumbnails,
  setSelectThumbnails,
}) => {
  return (
    <div className="relative cursor-move border-2 rounded-md">
      <img className="rounded-md" src={image.thumbnail} alt={"image" + index} />
      <input
        type="checkbox"
        name={image.id}
        id={image.id}
        onChange={() => {
          if (selectThumbnails.find((photo) => photo.id === image.id))
            setSelectThumbnails(
              selectThumbnails.filter((photo) => photo.id !== image.id)
            );
          else setSelectThumbnails([...selectThumbnails, image]);
        }}
        className={
          "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer" +
          " " +
          (selectThumbnails.find((photo) => photo.id === image.id)
            ? "opacity-100"
            : "opacity-0")
        }
      />
    </div>
  );
};

export default GalleryImage;
