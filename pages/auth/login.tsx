import React from 'react';
import MainLayout from '../../layout/MainLayout';

function Login() {
    const handleLogin = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <MainLayout>
            <main className='mt-20 flex w-full items-center justify-center'>
                <form
                    onSubmit={handleLogin}
                    className='h-[20rem] w-[25rem] rounded-xl bg-gray-800 p-5'
                >
                    <div className='relative flex'>
                        <label
                            htmlFor='email'
                            className='inline-flex items-center rounded-l-md border-t border-l border-b border-gray-700 bg-gray-600 px-3 text-sm text-gray-200 shadow-sm'
                        >
                            <svg
                                className='h-6 w-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                            </svg>
                        </label>
                        <input
                            required
                            type='email'
                            id='email'
                            name='email'
                            className='focus:ring-3 w-full flex-1 appearance-none rounded-r-lg border border-gray-700 bg-gray-600 py-2 px-4 text-sm  text-gray-200 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-fuchsia-500'
                            placeholder='Email'
                        />
                    </div>

                    <button
                        type='submit'
                        className='mt-10 w-full border border-fuchsia-600 py-2 font-semibold'
                    >
                        Login
                    </button>
                </form>
            </main>
        </MainLayout>
    );
}

export default Login;
