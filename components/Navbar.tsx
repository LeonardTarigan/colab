import React from 'react';

function Navbar() {
    return (
        <nav className='flex w-full items-center justify-between border-b border-slate-600 bg-slate-900 py-5 px-10'>
            <h1 className='comfortaa text-2xl tracking-wider'>
                .co<span className='text-fuchsia-500'>lab</span>
            </h1>

            <div>
                <button className='rounded-md border border-fuchsia-500 bg-fuchsia-600 py-2 px-3 font-semibold transition-all duration-200 hover:bg-transparent hover:text-fuchsia-500'>
                    Sign in
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
