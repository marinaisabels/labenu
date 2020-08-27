import axios from 'axios';
import { push } from 'connected-react-router';


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/futureX/marina";

export const login = (email, password) => async (dispatch) =>{

    const loginData = {
        email,
        password
    }

    try {
        const response = await axios.post(`${baseUrl}/login`, loginData )
        const token = response.data.token;
        
            window.localStorage.setItem("token", token);

            dispatch(push("/tripscreate"))
        } catch (error){
            console.error("erro", error)
    }    
}

export const applicationForm = (name, age, applicationText, profession, country) => async (dispatch) => {

    const applicationData ={
        name,
        age,
        applicationText,
        profession,
        country
    }

    try {
        const response = await axios.post(`${baseUrl}/apply`, applicationData )

        const token = response.data.token;

        window.localStorage.setItem("token", token);

        dispatch(push("/tripslist"))
    } catch (error) {
        console.error ("erro", error)
    }

}

export const createTrip  = (name, planet, date, description, durationInDays) => async (dispatch) => {

    const createTripData ={
        name,
        planet,
        date,
        description,
        durationInDays
    }

    try {
        const response = await axios.post(`${baseUrl}/trips`, createTripData, )

        const token = response.data.token;

        window.localStorage.setItem("token", token);

        dispatch(push("/tripslist"))
    } catch (error) {
        console.error ("erro", error)
    }

}

export const tripsdetails = (id, planet, durationInDays, date, name, description, candidates) => async (dispatch) => {

    const tripsdetailsData ={
        id,
        planet,
        durationInDays,
        date,
        name,
        description,
        candidates: [
            id,
        ]
    }

    try {
        const response = await axios.get(`${baseUrl}/trip/NoIFVcOiSgTKTIPVZwXS`, tripsdetailsData )

        const token = response.data.token;

        window.localStorage.setItem("token", token);

        dispatch(push("/"))
    } catch (error) {
        console.error ("erro", error)
    }

}