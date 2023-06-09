import axios from "axios";

const URL = `http://localhost:8000`;





export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling addUser Api ", error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error while calling getUsers Api", error);
  }
};

export const getUser = async (id) => {
  console.log('getuserapi',id)
  try {
    return await axios.get(`${URL}/${id}`)
  } catch (error) {
    console.log("Error while calling getUser Api", error);
  }
}


export const editUser = async (user,id) => {
  try {
    //----------------=.put also use
    return await axios.post(`${URL}/${id}`,user)
  } catch (error) {
    console.log("Error while calling editUser Api", error);
  }
}

export const deleteUser = async (id) => {
  console.log('deleteapiid',id)
  try {
    return await axios.delete(`${URL}/${id}`)
  } catch (error) {
    console.log("Error while calling deleteUser Api", error);
  }
}