// import axios from 'axios'
// export const registerUser=(user)=> async dispatch=>{
//    dispatch({
//        type:'USER_REGISTER_REQUEST'
//    })
//    try {
//        const response=await axios.post('/api/users/register', user)
//        console.log(response);
//        dispatch({
//            type:'USER_REGISTER_SUCCESS'
//        })
//    }
//     catch(error){
//          dispatch({
//               type:'USER_REGISTER_FAILED',
//               payload:error
//          })
//     }
// }
// export const loginUser=(user)=> async dispatch=>{
//     dispatch({
//         type:'USER_LOGIN_REQUEST'
//     })
//     try{
//         const response=await axios.post('/api/users/login', user)
//         console.log(response);
//         dispatch({
//             type:'USER_LOGIN_SUCCESS',
//             payload:response.data
            
//         })
//         localStorage.setItem('currentUser',JSON.stringify(response.data))
//         window.location.href='/'
//     }
//     catch(error){
//         dispatch({
//             type:'USER_LOGIN_FAILED',
//             payload:error
//         })
//     }
   
//  }

//  export const logoutUser=()=>dispatch=>{
//         localStorage.removeItem('currentUser')
//         window.location.href='/login'
//     }




import axios from 'axios';

export const registerUser = (user) => async (dispatch) => {
  dispatch({
    type: 'USER_REGISTER_REQUEST',
  });

  try {
    const response = await axios.post('/api/users/register', user);
    dispatch({
      type: 'USER_REGISTER_SUCCESS',
    });
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAILED',
      payload: error.message || 'Registration failed',
    });
  }
};

// export const loginUser = (user) => async (dispatch) => {
//   dispatch({
//     type: 'USER_LOGIN_REQUEST',
//   });

//   try {
//     const response = await axios.post('/api/users/login', user);
//     dispatch({
//       type: 'USER_LOGIN_SUCCESS',
//       payload: response.data,
//     });
//     // Optionally, you can store the user information in localStorage
//     localStorage.setItem('currentUser', JSON.stringify(response.data));
//     window.location.href='/'
//   } catch (error) {
//     dispatch({
//       type: 'USER_LOGIN_FAILED',
//       payload: error.message || 'Login failed',
//     });
//   }
// };

export const loginUser = (user) => async (dispatch) => {
    dispatch({
      type: 'USER_LOGIN_REQUEST',
    });
  
    try {
      const response = await axios.post('/api/users/login', user);
      dispatch({
        type: 'USER_LOGIN_SUCCESS',
        payload: response.data,
      });
  
      // Optionally, you can store the user information in localStorage
      localStorage.setItem('currentUser', JSON.stringify(response.data));
  
      // Redirect after successful login
      window.location.href = '/';
    } catch (error) {
      // Log the error to the console for debugging purposes
      console.error('Login error:', error);
  
      // Dispatch an action with the error message
      dispatch({
        type: 'USER_LOGIN_FAILED',
        payload: error.response?.data.message || 'Login failed',
      });
    }
  };

export const logoutUser = () => async (dispatch) => {
  try {
    await axios.post('/api/users/logout');
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    // Clear user information from the Redux store
    dispatch({
      type: 'USER_LOGOUT',
    });
    // Clear user information from localStorage
    localStorage.removeItem('currentUser');
    window.location.href='/login'
  }
};
