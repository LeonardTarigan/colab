import React from 'react';
import PostCard from './PostCard';

function LatestPost() {
    return (
        <section className='w-full'>
            <h2 className='mb-5 text-2xl font-semibold'>Latest Post</h2>

            <div className='card-carousel flex gap-5 overflow-x-scroll'>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </section>
    );
}

export default LatestPost;
