import axios from 'axios';
const URL = 'http://localhost:7000';

export const authenticateSignUp = async (data) => {
  try{
    return await axios.post(`${URL}/signup`,data);
  }catch(error)
  {
    console.log("Error while calling signUp api", error.message);
  }
}

export const authenticateLogIn = async (data) => {
  try{
    return await axios.post(`${URL}/login`,data);
  }catch(error)
  {
    console.log("Error while calling Login api", error.message);
    return error.response;
  }
}
//authenticateSignUp