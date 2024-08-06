import React, { useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import md from '../assests/med.webp';

const Login = () => {
  const [isEmployee, setIsEmployee] = useState(true);
  const[data,setData] = useState({
    id:"",
    password:""
  })

  const onChangeHandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));

  }

  useEffect(()=>{
    console.log(data)

  },[data])

  const handleToggle = () => {
    setIsEmployee(!isEmployee);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Welcome to Mediversal Gurukul</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg flex w-3/4 max-w-4xl" style={{ minHeight: '470px' }}>
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md flex flex-col justify-center" style={{ height: '400px' }}>
          <h2 className="text-xl font-semibold mb-4 text-center">Login As</h2>
          <div className="flex justify-center items-center mb-4">
            <span className={`mr-4 ${isEmployee ? 'text-black' : 'text-gray-500'}`}>Employee</span>
            <Toggle
              defaultChecked={!isEmployee}
              icons={false}
              onChange={handleToggle}
            />
            <span className={`ml-4 ${!isEmployee ? 'text-black' : 'text-gray-500'}`}>Admin</span>
          </div>
          <hr className="mb-4"/>
          <div className="p-4 flex flex-col justify-between h-full">
            <input
            name='id'
            onChange={onChangeHandler}
            value={data.id}
              type="text"
              placeholder=
              {
                !isEmployee ? "Admin Id":"Employee Id"
              }
              className="w-full p-2 mb-4 border rounded"
            />
            <input
            name='password'
            onChange={onChangeHandler}
          value={data.password}
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-4 border rounded"
            />
            <button className="bg-blue-500 text-white p-2 rounded w-full">
              Login
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/2 p-6  items-center " style={{ height: '300px' }}>
          <img src={md} alt="Reception" className="rounded-lg shadow-lg mx-auto mt-14 " />
        </div>
      </div>
    </div>
  );
};

export default Login;
