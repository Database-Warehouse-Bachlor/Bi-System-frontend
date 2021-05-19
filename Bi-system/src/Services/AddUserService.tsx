import axios from "axios";
import { BehaviorSubject } from "rxjs";
import { handleResponse } from "../Helpers/HandleResponse";
import React, { PureComponent, useState, useEffect } from "react";
import AuthenticationService from "./AuthenticationService";

export const AddUser = {
  register,
  getTennantName,
};

/* Returns the loggend in tennant name from the Api*/
async function getTennantName() {
 await axios 
      .get("auth/tennantName", {
        headers: {
          Authorization:
            "bearer " + AuthenticationService.getCurrentUser("currentUser"),
        },
      })
      .then((res) => {
        return res.data;
      })
}

/* Sends an email and password to the Api to add a new user 
under the logged in Tennant */
function register(email: string, pwd: string) {
  const requestOptions = {
    method: "POST",
    headers: new Headers({
      Authorization:
        "bearer " + AuthenticationService.getCurrentUser("currentUser"),
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    }),
    body: new URLSearchParams({email, pwd }),
  };

  return fetch(`auth/register`, requestOptions).then(handleResponse);
}

export default AddUser;
