// Actions 
import axios from 'axios';
import { host } from '../../../constants/config';

export const getUser = (lang, setLoading) => async (dispatch) => {
    setLoading(true);

    return axios
        .get(`${host}/getUser/${lang}`)
        .then(res => {
            console.log("Res appAPI/getUser", res.data); 
            dispatch({
                type: "app/setConnectedUser",
                payload: res.data,
            });
            setLoading(false);
        })
        .catch(error => {
            console.log("Error appAPI/getUser", error);
            setLoading(false);
        });
};