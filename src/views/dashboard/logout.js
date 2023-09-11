import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks
const navigator = useNavigate();
const removeTokenFromLocalStorage=()=> {
    localStorage.removeItem('accessToken');
    navigator('/auth/login');
    return(<></>);
}
export default removeTokenFromLocalStorage;