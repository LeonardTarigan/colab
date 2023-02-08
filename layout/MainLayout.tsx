import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';

interface MainLayout {
    children: ReactNode;
    pageTitle: string;
}

function MainLayout({ children, pageTitle }: MainLayout) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;
