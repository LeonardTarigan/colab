import React, { ReactElement, ReactNode } from 'react';
import Navbar from '../components/Navbar';

interface MainLayout {
    children: ReactNode;
}

function MainLayout({ children }: MainLayout) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default MainLayout;
