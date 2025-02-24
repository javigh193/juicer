import axios from "axios";
import { toast } from "react-toastify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any) => {
    if(axios.isAxiosError(error)){
        const err = error.response;
        if (Array.isArray(err?.data.errors)) {
            for(const error of err.data.errors) {
              toast.warning(error.description, {position: "top-center"});  
            }
        } else if (typeof err?.data.errors === 'object') {
            for(const error in err?.data.errors) {
                toast.warning(err.data.errors[error][0], {position: "top-center"})
            }
        } else if (err?.data) {
            toast.warning(err.data, {position: "top-center"});
        } else if (err?.status === 401) {
            toast.warning("Please login", {position: "top-center"});
            window.history.pushState({}, "LoginPage", "/login");
        } else if (err?.status === 403) {
            toast.error("Wrong credentials. Unable to identify the user.", {position: "top-center"})
        } else if (err?.status === 400) {
            toast.error("Bad request.", {position: "top-center"})
        }
    }
}