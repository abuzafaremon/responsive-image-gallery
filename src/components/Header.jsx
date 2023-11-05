const Header = ({
  // destructure passed props from gallery component
  selectThumbnails,
  setSelectThumbnails,
  handleDeleteSelected,
}) => {
  return (
    <nav className="py-4 px-3 md:px-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">
          {selectThumbnails.length === 0 ? (
            "Gallery"
          ) : (
            <>
              <input
                type="checkbox"
                checked
                onChange={() => setSelectThumbnails([])}
                className="h-5 w-5 accent-blue-500 cursor-pointer"
              />
              <span className="ml-2">
                {selectThumbnails.length} Files Selected
              </span>
            </>
          )}
        </h1>
        {/* delete button for delete selected image */}
        {selectThumbnails.length > 0 && (
          <button
            onClick={handleDeleteSelected}
            className="text-red-500 font-medium"
          >
            Delete files
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
