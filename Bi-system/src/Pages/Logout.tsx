import AuthenticationService from "../Services/AuthenticationService";

/* Call to AuthentcationService for logign out the user
This page is never shown */
const Logout = () => {
    AuthenticationService.logout();
    window.location.reload(false);
}
export default Logout;



    



