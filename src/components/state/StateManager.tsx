import { create } from "zustand";

export interface User {
  user: any;
  loggedIn: boolean;
  classes: any[];
  setUser: (userData: any) => void;
  setLog: (status: boolean) => void;
  setClass: (status: any) => void;
}

const userDetails = create<User>((set) => ({
  user: null, // The user object with all details will be inserted here
  classes: [],
  loggedIn: false,
  setUser: (userData: any) =>
    set({
      user: userData,
    }),

  setLog: (status: boolean) =>
    set({
      loggedIn: status,
    }),

  setClass: (status: any[]) => 
  set({
    classes: status
  })
}));

export default userDetails;
