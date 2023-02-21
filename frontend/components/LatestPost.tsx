import Link from 'next/link';
import React, { useRef } from 'react';
import PostCard from './PostCard';

function LatestPost() {
    const contentWrapper = useRef(null);

    const sideScroll = (
        element: HTMLDivElement,
        speed: number,
        distance: number,
        step: number
    ) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft! += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
        }, speed);
    };

    return (
        <section className='flex w-full flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <h2 className='items-center text-2xl font-semibold'>
                        Latest Post
                    </h2>
                    <Link
                        href={'/'}
                        className='cursor-pointer p-2 text-xs font-medium text-gray-500 transition-all duration-150 hover:underline'
                    >
                        See More
                    </Link>
                </div>

                <div className='flex select-none gap-2'>
                    <button
                        onClick={() => {
                            sideScroll(contentWrapper.current!, 15, 500, -30);
                        }}
                        className='prev h-fit rounded-xl border border-gray-500 px-4 py-2 transition-all duration-150 hover:scale-110 hover:border-fuchsia-500 hover:text-fuchsia-600 dark:border-gray-600 dark:hover:border-fuchsia-500 dark:hover:text-fuchsia-500'
                    >
                        {'<'}
                    </button>
                    <button
                        onClick={() => {
                            sideScroll(contentWrapper.current!, 15, 500, 30);
                        }}
                        className='next h-fit rounded-xl border border-gray-500 px-4 py-2 transition-all duration-150 hover:scale-110 hover:border-fuchsia-500 hover:text-fuchsia-600 dark:border-gray-600 dark:hover:border-fuchsia-500 dark:hover:text-fuchsia-500'
                    >
                        {'>'}
                    </button>
                </div>
            </div>

            <div
                ref={contentWrapper}
                className='card-carousel flex gap-5 overflow-x-scroll'
            >
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </section>
    );
}

export default LatestPost;
