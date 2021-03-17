import axios from "axios";
import { BehaviorSubject } from "rxjs";
import { handleResponse } from "../Helpers/HandleResponse";
import AuthenticationService from "./AuthenticationService";

export const AddUser = {
  register,
  getOrgNr,
};

async function getOrgNr() {
  const response= await axios
    .get("/getOrgNr", {
      headers: {
        Authorization:
          "bearer " + AuthenticationService.getCurrentUser("currentUser"),
      },
    })
    console.log(response.data)
    return response.data;
}

function register(orgnr: string, email: string, pwd: string) {
  const requestOptions = {
    method: "POST",
    headers: new Headers({
      Authorization:
        "bearer " + AuthenticationService.getCurrentUser("currentUser"),
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }),
    body: new URLSearchParams({ orgnr, email, pwd }),
  };

  return fetch(`/register`, requestOptions).then(handleResponse);
}
export default AddUser;
