import type { NextPage } from 'next';
import LatestPost from '../components/LatestPost';
import MainLayout from '../layout/MainLayout';

const Home: NextPage = () => {
    return (
        <MainLayout pageTitle='COLAB'>
            <main className='mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-10 py-10 px-32'>
                <LatestPost />
                <LatestPost />
                <LatestPost />
                <LatestPost />
            </main>
        </MainLayout>
    );
};

export default Home;
