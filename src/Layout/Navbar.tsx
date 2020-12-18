import { HiOutlineMoon } from 'react-icons/hi';

const Navbar = () => {
  return (
    <div className="border-b-4 min-w-full py-4 bg-white">
      <div className="container mx-auto flex justify-between">
        <div>
          <h1 className="font-extrabold text-xl">Where in the world?</h1>
        </div>
        <div className="cursor-pointer flex items-center font-semibold">
          <HiOutlineMoon className="mr-2" />
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
