import React from 'react';
import UserProfile from '../components/UserProfile';
import MainLayout from '../layout/MainLayout';
import { UilUser } from '@iconscout/react-unicons';
import { UilArrow } from '@iconscout/react-unicons';
import { UilSignOutAlt } from '@iconscout/react-unicons';

function Profile() {
    return (
        <MainLayout pageTitle='COLAB | Profile' navbar={true} footer={false}>
            <main className='flex gap-2 px-32 py-10'>
                <section className='w-2/6 overflow-hidden rounded-xl border border-gray-600'>
                    <ul className='p-2 font-medium text-gray-400'>
                        <li className='flex cursor-pointer items-center gap-2 rounded-lg border border-transparent p-2 transition-all duration-150 hover:bg-fuchsia-600 hover:text-gray-100'>
                            <UilUser />
                            <span>Profile</span>
                        </li>
                        <li className='flex cursor-pointer items-center gap-2 rounded-lg border border-transparent p-2 transition-all duration-150 hover:bg-fuchsia-600 hover:text-gray-100'>
                            <UilArrow />
                            <span>Projects</span>
                        </li>
                        <li className='flex cursor-pointer items-center gap-2 rounded-lg border border-transparent p-2 transition-all duration-150 hover:border-red-600  hover:text-red-500'>
                            <UilSignOutAlt />
                            <span>Logout</span>
                        </li>
                    </ul>
                </section>

                <UserProfile />
            </main>
        </MainLayout>
    );
}

export default Profile;
