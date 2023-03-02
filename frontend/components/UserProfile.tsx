import Image from 'next/image';
import React from 'react';
import { processImage } from '../services';
import { UilLocationPoint } from '@iconscout/react-unicons';

function UserProfile() {
    return (
        <section className='grow overflow-hidden rounded-xl border border-gray-600 text-sm'>
            <div className='relative h-44 w-full bg-gray-700'>
                <Image
                    // https://images3.alphacoders.com/820/thumb-1920-82045.jpg
                    src={processImage(
                        'https://images3.alphacoders.com/820/thumb-1920-82045.jpg'
                    )}
                    alt='User Banner'
                    fill={true}
                    className='object-cover brightness-75'
                />
            </div>

            <div className='flex gap-5 py-2 px-10'>
                <div className='relative -mt-9 h-24 w-24 overflow-hidden rounded-full border-4 border-gray-900 bg-gray-700'>
                    <Image
                        src={processImage(
                            'https://pbs.twimg.com/profile_images/1851433900/yextK_1__400x400.png'
                        )}
                        alt='User Picture'
                        priority
                        fill={true}
                        className='object-cover'
                    />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Leonard Tarigan</h1>
                    <p className='text-gray-400'>@userflexbox</p>
                </div>
            </div>

            <div className='flex flex-col gap-5 py-5 px-10'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt consequatur doloribus dignissimos ullam voluptate,
                    suscipit nemo temporibus blanditiis quo sit?
                </p>

                <div className='flex items-center gap-1 text-gray-400'>
                    <UilLocationPoint />
                    <span className='font-medium'>Indonesia</span>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;
