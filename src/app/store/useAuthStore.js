// zustand is used for global state manegment =>means can access variable or props from any where in the project

import {create} from 'zustand';
import { axiosInstanceAuthService } from '../lib/axios';
import {toast} from 'react-toastify';


//variable and methods which we will use globally 
export const useAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLoggingIn: false,
  isCheckingAuth: false,

  checkAuth: async (data) => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstanceAuthService.get("/auth/check-Auth");
      console.log("checkauth response", res.data);

      set({ authUser: res?.data?.user });
    } catch (error) {
      console.log("❌ Error checking auth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

    signup:async (data) =>{
        set({isSigninUp:true});
        try {
            const res = await axiosInstanceAuthService.post("/auth/register" , data);
            const data= await res.json()
             console.log(data);
            
         if(res.status===200)
          {
            set({authUser:res?.data?.data});
           
          toast.success(res?.data?.message || "signup successful")
          return true
          }

        } catch (error) {
            console.log("error signing up" , error);
            toast.error("error signign up");
        }

        finally{
            set({isSigninUp:false})
        }
    },

    login: async (data) => {
       console.log(data)
        set({isLoggingIn:true});
        try {
            const res = await axiosInstanceAuthService.post("/auth/login" , data);
            console.log(res);
            
         if(res.status===200)
         {
            set({authUser:res?.data?.data});
            console.log(res);
            toast.success(res?.data?.message || "login successful")
             return true
         }
        


        } catch (error) {
            console.log("error loging In",error.message);
            toast.error("error loging In")
        }

        finally{
             set({isLoggingIn:false})
        }

    }, 

 
  logout: async (data) => {
    try {
      await axiosInstanceAuthService.post("/auth/logout");
      set({ authUser: null });

      toast.success("Logout successful");
    } catch (error) {
      console.log("Error logging out", error);
      toast.error("Error logging out");
    }
  },



}))