import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { CustomableComponent } from '../interfaces';
import Image from 'next/image';
import { processImage } from '../services';

function ProfileButton() {
    return (
        <Menu as={'div'} className={'relative z-20 flex'}>
            {({ open }) => (
                <>
                    <Menu.Button
                        className={
                            'relative h-10 w-10 overflow-hidden rounded-full outline outline-0 outline-offset-4 outline-gray-600 hover:outline-1'
                        }
                    >
                        <Image
                            src={processImage(
                                'https://pbs.twimg.com/profile_images/1851433900/yextK_1__400x400.png'
                            )}
                            alt='Profile Picture'
                            fill={true}
                            sizes='w-10'
                            className='object-cover'
                        />
                    </Menu.Button>

                    <Transition
                        show={open}
                        enter='transition duration-100 ease-out'
                        enterFrom='transform scale-95 opacity-0'
                        enterTo='transform scale-100 opacity-100'
                        leave='transition duration-75 ease-out'
                        leaveFrom='transform scale-100 opacity-100'
                        leaveTo='transform scale-95 opacity-0'
                    >
                        <Menu.Items
                            className={
                                'absolute right-0 mt-14 flex w-32 flex-col overflow-hidden rounded-xl bg-gray-100 shadow-xl dark:bg-gray-700'
                            }
                        >
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${
                                            active &&
                                            'text-whigray-100te bg-fuchsia-600'
                                        } flex items-center gap-2 p-3 text-sm`}
                                        href='/profile'
                                    >
                                        <UserIcon className='h-5 w-5' />
                                        <span>Profile</span>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${
                                            active &&
                                            'bg-fuchsia-600 text-gray-100'
                                        } flex items-center gap-2 p-3 text-sm`}
                                        href='/'
                                    >
                                        <LogoutIcon className='h-5 w-5' />
                                        <span>Logout</span>
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}

export default ProfileButton;

const UserIcon = (props: CustomableComponent) => {
    return (
        <svg
            className={props.className}
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
        >
            <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
            ></path>
        </svg>
    );
};

const LogoutIcon = (props: CustomableComponent) => {
    return (
        <svg
            className={props.className}
            fill='none'
            stroke='currentColor'
            stroke-width='1.5'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
        >
            <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
            ></path>
        </svg>
    );
};
