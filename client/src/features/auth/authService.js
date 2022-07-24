import axios from 'axios';

const API_URL = 'api/v1/users';

// Register new user
const register = async (userData) => {
  try {
    const response = await axios.post(API_URL + '/register', userData);

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Login User
const login = async (userData) => {
  try {
    const response = await axios.post(API_URL + '/login', userData);

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
