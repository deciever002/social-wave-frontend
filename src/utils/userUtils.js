import jwtDecode from "jwt-decode";

export const getUserFromToken = () => {
    const decoded = localStorage.getItem('token') ? jwtDecode(JSON.parse(localStorage.getItem('token'))) : null;

    if(decoded){
        return {
            _id: decoded?.sub,
            _type: 'user',
            userName: decoded?.name,
            image: decoded?.picture
        }
    }

    return null;
}


export const shouldLogout = () => {
    const decoded = localStorage.getItem('token') ? jwtDecode(JSON.parse(localStorage.getItem('token'))) : null;

    if(decoded?.exp * 1000 < new Date().getTime()){
        return true;
    }

    return false;
}