import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-services";


export const loginThunk = createAsyncThunk(
 "users/login", async (credentials) => {
   const user = await authService.login(credentials);
   return user;
 });

export const profileThunk = createAsyncThunk(
  "auth/profile", async () => {
    return await authService.profile();
  // const response = authService.profile();
  // return response.data;
 });

export const logoutThunk = createAsyncThunk(
  "auth/logout", async () => {
  return await authService.logout();
 });

export const updateUserThunk = createAsyncThunk(
  "users/updateUser", async (user) => {
    await authService.updateUser(user);
    return user;
 });

 export const registerUserThunk = createAsyncThunk(
  "users/register", async (credentials) => {
    const user = await authService.register(credentials);
    return user;
  
  });
 
