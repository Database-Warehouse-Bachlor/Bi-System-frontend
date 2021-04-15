import { RouteComponentProps, useHistory } from "react-router-dom";
import AuthenticationService from "../Services/AuthenticationService";


const Logout = () => {
    AuthenticationService.logout();
    return (
        <div>
            <p>HELLO CfdfefNTACT</p>
        </div>
    )
}
export default Logout;



    



