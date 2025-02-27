import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

const AuthProvider=({children})=>{
    const [token,setToken]=useState('');
    const [userId,setUserId]=useState('');

    const [upcominngGames,setUpComingGames]=useState([])

    const isLoggedIn=async ()=>{
        try {
            const userToken= await AsyncStorage.getItem('token')
            setToken(userToken)
        } catch (error) {
            console.log('error',error)
        }
    }

    useEffect(()=>{
        const fetchUser= async ()=>{
            const token = await AsyncStorage.getItem("token");
            const decodedToken= jwtDecode(token);
            const userId=decodedToken.userId;
            setUserId(userId)
        }
        fetchUser();
    },[])
    return(
        <AuthContext.Provider>
                {children}
        </AuthContext.Provider>
    )
}