import { Link } from 'react-router-dom';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import { useDarkMode } from '../utils/useDarkMode';

const lightModeToggle = (
  <>
    <HiOutlineSun className="mr-2" />
    <p>Light Mode</p>
  </>
);

const darkModeToggle = (
  <>
    <HiOutlineMoon className="mr-2" />
    <p>Dark Mode</p>
  </>
);

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="border-b-4 dark:border-transparent min-w-full py-4 bg-veryLightGray dark:bg-darkBlue dark:text-white">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/">
            <h1 className="font-extrabold text-xl">Where in the world?</h1>
          </Link>
        </div>
        <div
          className="cursor-pointer flex items-center font-semibold"
          onClick={toggleDarkMode}
        >
          {!darkMode ? darkModeToggle : lightModeToggle}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
