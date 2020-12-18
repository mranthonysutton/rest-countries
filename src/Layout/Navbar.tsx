import { IoMoonOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className="border-b-4 min-w-full py-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <h1 className="font-bold text-xl">Where in the world?</h1>
        </div>
        <div className="cursor-pointer flex items-center">
          <IoMoonOutline className="mr-1" />
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
