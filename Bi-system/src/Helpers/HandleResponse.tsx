
import AuthenticationService from "../Services/AuthenticationService";

/* This class handles the response and console logs 400, 401 and 403 response codes. */
export function handleResponse(response: any) {
    return response.text().then((text: string) => {
        const data = text;
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                console.log("Unauthorized");
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                AuthenticationService.logout(); 
            }
            if ([400].indexOf(response.status) !== -1) {
                console.log("Bruker finnes allerede")
                alert("Bruker finnes allerede")
            }

            const error = (data) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}