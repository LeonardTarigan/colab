import type { NextPage } from 'next';
import LatestPost from '../components/LatestPost';
import MainLayout from '../layout/MainLayout';

export function getServerSideProps() {
    return {
        props: {
            data: {},
        },
    };
}

const Home: NextPage = ({ data }: any) => {
    return (
        <MainLayout pageTitle='COLAB' navbar={true} footer={true}>
            <main className='mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-10 py-10 px-5 md:px-16 lg:px-32'>
                <LatestPost />
                <LatestPost />
                <LatestPost />
                <LatestPost />
            </main>
        </MainLayout>
    );
};

export default Home;
