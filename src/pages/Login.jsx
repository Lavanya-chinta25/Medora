import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background.jpeg';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle change and update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate the form data
  const validate = () => {
    let tempErrors = { email: '', password: '' };
    let isValid = true;

    // Validate email
    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validate()) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Parent Container */}
      <div className="relative flex w-full max-w-4xl bg-[#153d55] bg-opacity-80 rounded-lg p-8 space-x-8 h-[50vh] z-10">
        {/* Left Section (Overlay) */}
        <div className="w-1/2 relative flex items-center justify-center">
          <div
            className="absolute top-[-50px] bottom-[-50px] left-[5%] right-[5%] w-[90%] bg-[#9cd4f2] p-12 rounded-lg z-10"
            style={{
              top: '-50px', // Moves overlay up by 50px (outside the parent)
              bottom: '-50px', // Moves overlay down by 50px (outside the parent)
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              {/* LogIn Heading */}
              <h2 className="text-2xl font-bold text-[#153D55] mb-4">Log In</h2>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#153D55] ${formData.email && 'border-[#153D55]'}`}
                />
                {isSubmitted && errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#153D55] ${formData.password && 'border-[#153D55]'}`}
                />
                {isSubmitted && errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-[#185a79d4] text-white py-3 rounded-lg hover:bg-[#153D55] transition-all duration-300 shadow-lg shadow-[#153D55]/50"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section (Text & Sign Up Link) */}
        <div className="w-1/2 flex flex-col justify-center text-white space-y-6">
          <h2 className="text-3xl font-light">Welcome Back</h2>
          <p className="text-lg">
            Please enter your credentials to login to your account.
          </p>
          <div  className="mt-4 text-[20px] font-bold text-white-500">
            Don't have an account?{' '}
            <Link to="/Medora/signup" className="font-bold text-[#519FC4] hover:text-[#bbdef1]">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
