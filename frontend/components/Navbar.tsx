import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

function Navbar() {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            setScrollTop((winScroll / height) * 100);
        });
    }, []);

    return (
        <div className='sticky top-0'>
            <nav className='flex w-full items-center justify-between border-b border-slate-600 bg-gray-100 py-5 px-32 dark:bg-gray-900'>
                <Link href={'/'} className='comfortaa text-2xl'>
                    .co<span className='text-fuchsia-600'>lab</span>
                </Link>

                <div className='flex items-center gap-5'>
                    <DarkModeButton />

                    <Link href={'/auth/login'}>
                        <button className='rounded-lg border border-fuchsia-700 bg-fuchsia-600 py-2 px-5 font-semibold text-gray-200 transition-all duration-200 hover:bg-transparent hover:text-fuchsia-600'>
                            Login
                        </button>
                    </Link>
                </div>
            </nav>

            <div
                style={{ width: `${scrollTop}%` }}
                className='absolute h-[2px] bg-fuchsia-600'
            ></div>
        </div>
    );
}

export default Navbar;
