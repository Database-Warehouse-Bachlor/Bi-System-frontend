import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../Helpers/HandleResponse';

const item = localStorage.getItem('currentUser')
const currentUserSubject = new BehaviorSubject(JSON.parse(item || '{}'));


export const AuthenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(email: string, pass: string) {
    console.log("authenticating");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        mode: 'no-cors' as RequestMode,
        body: JSON.stringify({ email, pass })
    };

    return fetch(`http://localhost:5000/api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

export default AuthenticationService;