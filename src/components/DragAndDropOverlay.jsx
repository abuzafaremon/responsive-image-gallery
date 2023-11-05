const DragAndDropOverlay = ({ dragging, dragOverIndex, image }) => {
  return (
    dragging &&
    Number(dragOverIndex) === Number(image.id) && (
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-2 border-dashed border-green-200 rounded-md z-50">
        Drop Here
      </div>
    )
  );
};

export default DragAndDropOverlay;
