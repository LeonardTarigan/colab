import React from 'react';

function Login() {
    return (
        <main className='bg-yellow-400 flex justify-center items-center w-full h-screen'>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='bg-white border rounded-xl w-[30rem] h-72 flex flex-col items-center p-2'
            ></form>
        </main>
    );
}

export default Login;
