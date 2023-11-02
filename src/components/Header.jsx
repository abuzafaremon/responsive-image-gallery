const Header = () => {
  return (
    <nav className="py-4 px-3 md:px-6">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <button className="text-red-500 font-medium">Delete files</button>
      </div>
    </nav>
  );
};

export default Header;
