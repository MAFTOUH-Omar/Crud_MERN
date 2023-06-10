import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUser } from "../service/api";
const defaultValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultValue);

  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(user,id);
    console.log(user);
    navigate("/all");
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <h4 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Update User</h4>
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm space-y-3">
        <div>
          <label className="block text-base font-medium leading-6 text-gray-900 ">Name</label>
          <div className="mt-2">
            <input onChange={(e) => onValueChange(e)} name="name" value={user.name} required className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>
          <label className="block text-base font-medium leading-6 text-gray-900">Username</label>
            <div className="mt-2">
              <input onChange={(e) => onValueChange(e)} name="username" value={user.username} required className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
        </div>
        <div>
        <label className="block text-base font-medium leading-6 text-gray-900">Email</label>
        <div className="mt-2">
        <input onChange={(e) => onValueChange(e)} name="email" value={user.email} required className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        </div>
        <div>
        <label className="block text-base font-medium leading-6 text-gray-900">Phone</label>
        <div className="mt-2">
        <input onChange={(e) => onValueChange(e)} name="phone" value={user.phone} required className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        </div>
        <button className="flex w-full justify-center rounded-md bg-cyan-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600" 
        onClick={() => editUserDetails()}>
          Add User
        </button>
      </div>
    </div>
  );
};

export default EditUser;
