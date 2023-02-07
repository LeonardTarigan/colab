import type { NextPage } from 'next';
import Head from 'next/head';
import LatestPost from '../components/LatestPost';
import MainLayout from '../layout/MainLayout';

const Home: NextPage = () => {
    return (
        <div className=''>
            <Head>
                <title>COLAB</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <MainLayout>
                <main className='mx-auto flex max-w-screen-xl flex-col items-center justify-center py-10 px-32'>
                    <LatestPost />
                </main>
            </MainLayout>
        </div>
    );
};

export default Home;
