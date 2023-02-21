import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';

interface MainLayout {
    children: ReactNode;
    pageTitle: string;
    navbar: boolean;
    footer: boolean;
}

function MainLayout({ children, pageTitle, navbar, footer }: MainLayout) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            {navbar && <Navbar />}

            <div className='mx-auto w-fit max-w-screen-xl'>{children}</div>

            {footer && <Footer />}
        </>
    );
}

export default MainLayout;
