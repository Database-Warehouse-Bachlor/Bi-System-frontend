import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../Helpers/HandleResponse';

const item = localStorage.getItem('currentUser')
const currentUserSubject = new BehaviorSubject((item || '{}'));


export const AuthenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email: string, pwd: string) {
    console.log("authenticating");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: new URLSearchParams({ email, pwd })
    };

    return fetch(`/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', (user));
            console.log("token or user is ", user)
            currentUserSubject.next(user);
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next("");
}

export default AuthenticationService;