import React from 'react';

function PostCard() {
    return (
        <div className='flex aspect-[5/3] h-56 cursor-pointer flex-col justify-between rounded-xl border border-transparent bg-gray-200 p-5 text-xs transition-all duration-150 hover:border-fuchsia-500 dark:bg-gray-800'>
            <div>
                <h4 className='mb-2 text-lg font-semibold'>Title</h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iure dicta illum pariatur suscipit ipsum sint quisquam
                    beatae eius neque expedita?
                </p>
            </div>

            <div className='flex items-center justify-between'>
                <div>
                    <p className='mb-3 font-medium text-gray-600 dark:text-gray-400'>
                        2h ago | @username
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

                <div className='aspect-square w-10 rounded-full bg-fuchsia-600 dark:bg-gray-700'></div>
            </div>
        </div>
    );
}

export default PostCard;
