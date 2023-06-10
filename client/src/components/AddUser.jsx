import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { addUser } from "../service/api";
const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};
const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const addUserDetails = async () => {
    await addUser(user);
    console.log(user);
    navigate('/all')
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <h4 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add User</h4>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input onChange={(e) => onValueChange(e)} name="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
            <div className="mt-2">
              <input onChange={(e) => onValueChange(e)} name="username" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
        </div>
        <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div className="mt-2">
        <input onChange={(e) => onValueChange(e)} name="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        </div>
        <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
        <div className="mt-2">
        <input onChange={(e) => onValueChange(e)} name="phone" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        </div>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
        onClick={() => addUserDetails()}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
