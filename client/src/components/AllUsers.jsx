import { getUsers,deleteUser } from "../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    // console.log(response.data);
    setUsers(response.data);
  };

  const deleteUserDetails = async(id) => {
    console.log('delete.....',id)
    await deleteUser(id);
    getAllUsers();
  }

  return (
        <div className="mx-auto my-6 flex justify-center">
        <table className="w-full mx-4 text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <th className="px-6 py-3">_Id</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Username</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3" colSpan={"2"}>Operation</th>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-3"><span className="bg-red-300 text-white px-2 py-1 rounded-full">{user._id}</span></td>
                <td className="px-6 py-3">{user.name}</td>
                <td className="px-6 py-3">{user.username}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">{user.phone}</td>
                <td className="px-6 py-3">
                  <a
                    variant="contained"
                    className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                    style={{ marginRight: 10 }}
                    component={Link}
                    href={`/edit/${user._id}`}
                  >
                    Edit
                  </a>
                  </td>
                  <td>
                  <button  className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500" 
                    onClick={()=>deleteUserDetails(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        </table>
      </div>
  );
};

export default AllUsers;
