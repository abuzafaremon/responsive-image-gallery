import DragAndDropOverlay from "./DragAndDropOverlay";

const GalleryImage = ({
  // destructure passed props from gallery component
  image,
  index,
  selectThumbnails,
  setSelectThumbnails,
  handleDragStart,
  handleDragOver,
  handleDrop,
  dragging,
  dragOverIndex,
}) => {
  return (
    <div
      // selected and hover overlay logic implement here
      className={
        "relative group first:row-span-2 first:col-span-2 cursor-move border-2 rounded-md before:content-[''] before:absolute before:h-full before:w-full before:rounded-md before:transition-colors" +
        (selectThumbnails.find((photo) => photo.id === image.id)
          ? " opacity-100 before:bg-white/50"
          : " hover:before:bg-black/50")
      }
      draggable
      onDragStart={() => handleDragStart(image)}
      onDragOver={handleDragOver}
      onDrop={() => handleDrop(index)}
    >
      <img className="rounded-md" src={image.thumbnail} alt={image.id} />
      {/* select image checkbox start */}
      <input
        type="checkbox"
        name={image.id}
        id={image.id}
        onChange={() => {
          // set selected image in a state for delete functionality
          if (selectThumbnails.find((photo) => photo.id === image.id))
            setSelectThumbnails(
              selectThumbnails.filter((photo) => photo.id !== image.id)
            );
          else setSelectThumbnails([...selectThumbnails, image]);
        }}
        // normally don't show checkbox , only show when image hovered or selected
        className={
          "absolute top-4 left-4 h-5 w-5 accent-blue-500 group-hover:opacity-100 transition-opacity delay-100 duration-100 ease-linear cursor-pointer" +
          " " +
          (selectThumbnails.find((photo) => photo.id === image.id)
            ? "opacity-100"
            : "opacity-0")
        }
        checked={
          selectThumbnails.find((photo) => photo.id === image.id) ? true : false
        }
      />
      {/* select image checkbox end */}
      {/* import drag and drop overlay component and pass necessary props */}
      <DragAndDropOverlay
        dragging={dragging}
        dragOverIndex={dragOverIndex}
        image={image}
      />
    </div>
  );
};

export default GalleryImage;
