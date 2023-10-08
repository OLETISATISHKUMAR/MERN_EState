import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Satish</span>
            <span className='text-white'>Kumar</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/' className='no-underline'>
            <li className='hidden sm:inline text-white hover:underline-none  hover:text-blue-400 '>
              Home
            </li>
          </Link>
          <Link to='/about' className='no-underline'>
            <li className='hidden sm:inline text-white hover:underline-none hover:text-blue-400'>
              About
            </li>
          </Link>
          <Link to='/signup' className='no-underline'>
            <li className='hidden sm:inline text-white hover:underline-none hover:text-blue-400'>
              Sign Up
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
