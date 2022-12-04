import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    errors: "",
  },
  reducers: {
    newUser: (state, action) => {
      axios
        .post("http://localhost:8080/api/v1/auth/register", {
          ...action.payload.users,
        })
        .then((result) => {
          console.log({ createUser: result });
        })
        .catch((error) => {
          state.errors = { error };
        });
    },
    updateUser: (state, action) => {
      console.log(action.payload.users.id);
      axios
        .put(`http://localhost:8080/api/v1/users/${action.payload.users.id}`, {
          ...action.payload.users,
        })
        .then((result) => {
          console.log({ updateUser: result });
        })
        .catch((error) => {
          // state.errors = error;
        });
    },
    deleteUser: (state, action) => {
      axios
        .put(`http://localhost:8080/api/v1/users/${action.payload.id}`, {
          status: "deleted",
        })
        .then((result) => {
          console.log({ deleteUser: result });
        })
        .catch((error) => {
          state.errors = error;
        });
    },
    fetchUsers: (state, action) => {
      state.users = [];
      state.users = action.payload.users;
    },
    fetchCurrentUser: (state, action) => {
      state.users = [];
      state.users = action.payload;
    },
    clearError: (state, dispatch) => {
      state.errors = "";
    },
  },
});

export const {
  newUser,
  updateUser,
  deleteUser,
  fetchUsers,
  fetchCurrentUser,
  clearErrors,
} = usersSlice.actions;

export default usersSlice.reducer;
