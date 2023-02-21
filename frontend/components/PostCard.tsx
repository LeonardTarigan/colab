import Image from 'next/image';
import React from 'react';
import { processImage } from '../services';

function PostCard() {
    return (
        <div className='flex aspect-[5/3] h-44 cursor-pointer flex-col justify-between rounded-xl border border-gray-400 border-transparent bg-gray-100 p-3 text-xs transition-all duration-150 hover:border-fuchsia-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-fuchsia-500 md:h-56 md:p-5'>
            <div>
                <h4 className='mb-1 truncate text-lg font-semibold md:mb-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, ea!
                </h4>
                <p className='card-text h-16'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis dolorem dicta error ipsam dolore esse blanditiis ipsa,
                    dignissimos alias, ad ex beatae molestias! Rem voluptatibus,
                    exercitationem rerum unde deleniti reprehenderit corrupti
                    vel atque ad tempore quis modi eius quisquam sint! Impedit
                    quae odit fugit rerum, esse similique repudiandae nobis
                    quam.
                </p>
            </div>

            <div className='flex items-end justify-between'>
                <div>
                    <p className='mb-3 font-medium text-gray-600 dark:text-gray-400'>
                        @username · 2h ago
                    </p>

                    <div className='flex gap-2 font-semibold'>
                        <div className='rounded-full bg-fuchsia-600 py-1 px-3 text-gray-200 dark:bg-gray-700'>
                            Frontend
                        </div>
                        <div className='rounded-full bg-fuchsia-600 py-1 px-3 text-gray-200 dark:bg-gray-700'>
                            Backend
                        </div>
                        <div className='rounded-full bg-fuchsia-600 py-1 px-3 text-gray-200 dark:bg-gray-700'>
                            UI/UX
                        </div>
                    </div>
                </div>

                <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                    <Image
                        src={processImage(
                            'https://i.pinimg.com/736x/7a/f4/78/7af47832ce1e058dad1c6aa56efb1211.jpg'
                        )}
                        alt='Profile Picture'
                        fill={true}
                        sizes='w-10'
                        className='object-cover'
                    />
                </div>
            </div>
        </div>
    );
}

export default PostCard;
