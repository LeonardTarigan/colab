import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const Home: NextPage = () => {
    return (
        <div className=''>
            <Head>
                <title>Colab</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />

            <main></main>
        </div>
    );
};

export default Home;
