const UploadImage = ({ handleFileChange }) => {
  return (
    <div className="relative border-2 border-dashed rounded-md p-4 hover:bg-gray-50 transition-colors ease-linear">
      <input
        type="file"
        multiple
        className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
        title="Upload image to the gallery..."
        onChange={handleFileChange}
      />
      <div className="h-full w-full flex flex-col justify-center items-center gap-4">
        {/* placeholder image */}
        <img
          className="w-5 h-5"
          src="/assets/images/uploadIcon.png"
          alt="placeholder"
        />
        <span className="min-w-max">Add Images</span>
      </div>
    </div>
  );
};

export default UploadImage;
