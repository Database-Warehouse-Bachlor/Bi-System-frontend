
import AuthenticationService from "../Services/AuthenticationService";

export function handleResponse(response: any) {
    return response.text().then((text: string) => {
        const data = text;
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                console.log("401 or 403");
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                AuthenticationService.logout();
                
            }
            if ([400].indexOf(response.status) !== -1) {
                console.log("User already exists")
            }

            const error = (data) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}