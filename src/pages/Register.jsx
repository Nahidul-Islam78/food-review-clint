import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router';

const Register = () => {
  const { LoginGoogle, CreateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  //google signUp
  const handelGoogleSignUP = () => {
    LoginGoogle().then(result => {
      console.log(result);
      navigate('/')
    }).catch(error => {
      console.log(error);
    })
  }
  //register
  const handelRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    const result = pattern.test(password);
    if (result) {
      //console.log('hello');
    } else {
      console.log(false);
      return
    }
    if (password === confirmPassword) {

      CreateUser(email, password).then(user => {
        console.log(user);
        navigate('/');
      }).catch(error => {
        console.log(error)
      })
    } else {
     // console.log('no right password')
    }
    //console.log(name, email, password);


  }

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <div className="card-body">
          <form onSubmit={handelRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Photo URL,</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL,"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <label className="label">Confirm Password</label>
              <input
                type="password"
                className="input"
                placeholder="Confirm Password"
                name="confirmPassword"
              />

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          {/* Google */}
          <button
            className="btn bg-white text-black border-[#e5e5e5]"
            onClick={handelGoogleSignUP}
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with google
          </button>
          <p>
            <span>Are you have an account! please </span> 
            <Link to="/login" className='underline'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;