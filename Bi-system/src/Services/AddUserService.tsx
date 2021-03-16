import { BehaviorSubject } from "rxjs";
import { handleResponse } from "../Helpers/HandleResponse";
import AuthenticationService from "./AuthenticationService";

export const AddUser = {
  register,
};

function register(orgnr: string, email: string, pwd: string) {
  const requestOptions = {
    method: "POST",
    headers: new Headers({
      Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0MTIzNCIsImVtYWlsIjoicGV0dGVyQG1haWwuY29tIiwianRpIjoiNDc0NWRmN2YtZWVkYS00OTQzLThlMmQtNzZhNjZlNjgyYmM2IiwiZXhwIjoxNjE1OTEwMDgxLCJpc3MiOiJUZXN0LmNvbSIsImF1ZCI6IlRlc3QuY29tIn0.0q0nP7Exzv98wWU2oQNLRAWHWSrypJW6GCuvMPY3w30",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }),
    body: new URLSearchParams({ orgnr, email, pwd }),
  };

  return fetch(`/register`, requestOptions).then(handleResponse);
}
export default AddUser;
