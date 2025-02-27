import AsyncStorage from "@react-native-async-storage/async-storage"

// sayfalardaki kayıt işlemleri registration için asynstorageye saklayarak devam ediyor
export const saveRegistrationPrgoress = async (screenName,data)=>{
    try {
        const key= `registration_progress?${screenName}`
        await AsyncStorage.setItem(key,JSON.stringify(data))

        console.log(`Progress saved for screen: ${screenName}`);

    } catch (error) {
        console.log('Error saving the progres',error)
    }
}

export  const getRegistrationProgress= async (screenName)=>{
    try {
        const key= `registration_progress?${screenName}`
        const data= await AsyncStorage.getItem(key);
        return data!== null ? JSON.parse(data) : null;
    } catch (error) {
        console.log('Error retreving the progress',error)
    }
}