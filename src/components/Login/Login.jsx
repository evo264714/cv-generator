// import { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { signInWithPopup } from 'firebase/auth';
// import { FaGoogle } from "react-icons/fa";
// import { FaSignInAlt } from "react-icons/fa";
// import { AuthContext } from '../Providers/AuthProvider';
// import Swal from 'sweetalert2';

// const Login = () => {

//     const { signIn, googleProvider, auth } = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const location = useLocation()
//     const from = location.state?.from?.pathname || '/'
    

//     const handleGoogleSignIn = () =>{
//         signInWithPopup(auth, googleProvider)
//         .then(result=>{
//             const user = result.user;
//             console.log(user);
//             navigate(from, {replace: true})
//         })
//         .catch(error =>{
//             console.log(error);
//         })
//     }

//     const handleLogin = event =>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);

//         signIn(email, password)
//         .then(result =>{
//             const loggedUser = result.user;
//             console.log(loggedUser);
//             setError('');
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Login is Successful',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//             navigate(from, {replace: true})
//         })
//         .catch(error =>{
//             setError(error.message);
//         })
//     }

//     return (
//         <form onSubmit={handleLogin}>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
                   
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" placeholder="email" name="email"  className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" placeholder="password" name="password"  className="input input-bordered" />
//                                 <label className="label">
//                                     <span>New to CV Generator? Please <Link to='/register' className="underline decoration-solid">Register</Link></span>
//                                 </label>
//                                 <label>
//                                     <span className='text-red-500'>{error}</span>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn btn-accent mb-10"><FaSignInAlt className='text-black me-2'/>Login</button>
//                                 <button onClick={handleGoogleSignIn} className="btn btn-accent mb-10"><FaGoogle className='text-black me-2'/>  Sign in with Google</button>
                               
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default Login;


import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login is Successful',
                showConfirmButton: false,
                timer: 1500
              })
        })
        navigate(from, {replace: true})
    };

    

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div className="min-h-screen text-white flex justify-center items-center my-20">
            <div className="bg-base-content p-8 rounded-lg w-[400px]">
                <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
                            className={`w-full p-2 border text-black rounded outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block font-semibold mb-2">Password</label>
                        <div className="flex items-center">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                                className={`w-full p-2 pr-10 text-black border rounded outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            <button
                                type="button"
                                className="text-gray-400 ml-2 absolute right-0 mr-2"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-yellow-200 transition duration-300">Login</button>
                </form>
                <p className="py-2">New to CV Generator? Please <Link to='/register'><span className="underline">Register</span></Link> Here</p>
            </div>
        </div>
    );
};

export default Login;