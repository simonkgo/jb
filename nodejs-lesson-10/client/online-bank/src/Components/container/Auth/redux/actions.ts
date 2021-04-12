import Axios from "axios"

export const authActionType = {
    REGISTER: "REGISTER",
    LOGIN: "LOGIN"
}

export const createAccount = (data) => {
    return async (dispatch: any) => {
        try {
            const result = await Axios.post("http://localhost:5000/api/v1/auth/login", data);
            // dispatch({ type: "", payload: [] })
        } catch (err) {
            console.log("Err", err)
        }
    }
}