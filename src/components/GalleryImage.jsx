const GalleryImage = ({
  image,
  index,
  selectThumbnails,
  setSelectThumbnails,
}) => {
  return (
    <div
      className={
        "relative group first:row-span-2 first:col-span-2 cursor-move border-2 rounded-md before:content-[''] before:absolute before:h-full before:w-full before:rounded-md before:transition-colors before:cursor-move" +
        (selectThumbnails.find((photo) => photo.id === image.id)
          ? " opacity-100 before:bg-white/50"
          : " hover:before:bg-black/50")
      }
    >
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
