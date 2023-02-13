import React from 'react';

function PostCard() {
    return (
        <div className='flex aspect-[5/3] h-44 cursor-pointer flex-col justify-between rounded-xl border border-transparent bg-gray-200 p-3 text-xs transition-all duration-150 hover:border-fuchsia-500 dark:bg-gray-800 md:h-56 md:p-5'>
            <div>
                <h4 className='mb-1 text-lg font-semibold md:mb-2'>Title</h4>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Iure dicta illum pariatur suscipit ipsum sint quisquam
                    beatae eius neque expedita?
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

                <div className='aspect-square w-10 rounded-full bg-fuchsia-600 dark:bg-gray-700'></div>
            </div>
        </div>
    );
}

export default PostCard;
