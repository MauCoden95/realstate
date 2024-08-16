import React, { useState } from 'react'

export const FormRegister = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const inputValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className='w-full px-8 sm:px-14 flex flex-col sm:flex-row gap-7 md:py-24'>
            <form className='w-full sm:w-2/4 mb-20 md:mb-0 h-auto' onSubmit={handleSubmit} autoComplete='off'>
                <label
                    htmlFor="UserEmail"
                    className="block w-full h-16 text-sm md:text-base overflow-hidden rounded-md my-5 border border-gray-400 focus:border-teal-600 duration-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <span className="font-medium mb-12 text-gray-700"> Correo electrónico </span>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={inputValue}
                        placeholder="correo@email.com"
                        className="custom-range mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                </label>

                <label
                    htmlFor="UserEmail"
                    className="block w-full h-16 my-12 text-sm md:text-base overflow-hidden rounded-md border border-gray-400 focus:border-teal-600 duration-300 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <span className="font-medium mb-12 text-gray-700"> Contraseña </span>

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={inputValue}
                        placeholder="Contraseña"
                        className="custom-range mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                </label>

                <button className='w-full rounded-md py-5 text-2xl bg-teal-600 hover:bg-teal-900 duration-300 text-white' type="submit">Registrarse</button>
            </form>

            <img className='w-full sm:w-2/4' src='https://ggvktlgwmfhumvfhiliw.supabase.co/storage/v1/object/sign/Storage/undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdG9yYWdlL3VuZHJhd191bmRyYXdfdW5kcmF3X3VuZHJhd19zaWduX3VwX2xuMXNfLTEtX3M0YmNfLTEtX2VlNDFfLTEtX2tmNGQuc3ZnIiwiaWF0IjoxNzIzNzU3NzM1LCJleHAiOjEwMzYzNjcxMzM1fQ.Dg_53S-TXAKqsnMIsV_S42BfqANyjhCuj_hripU5yLQ&t=2024-08-15T21%3A35%3A34.361Z' />
        </div>
    )
}
