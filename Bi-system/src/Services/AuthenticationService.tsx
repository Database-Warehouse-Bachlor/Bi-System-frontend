import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../Helpers/HandleResponse';

const item = localStorage.getItem('currentUser')
const currentUserSubject = new BehaviorSubject((item || '{}'));


export const AuthenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    currentToken: item,
    get currentUserValue () { return currentUserSubject.value },
    isReady: function() {
        return !!window && !!window.localStorage;
      },
      setCurrentUser: function(user: string) {
        if (!this.isReady()) throw new Error("Cannot find localStorage");
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      },
      getCurrentUser: function(key: string) {
        
        var item = localStorage.getItem(key);
        return item
       
      },
      removeCurrentUser: function() {
        if (!this.isReady()) throw new Error("Cannot find localStorage");
        localStorage.removeItem('currentUser');
        return true;
      }
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
        .then(token => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', (token));
            console.log("token is ", token)
            currentUserSubject.next(token);
            return token;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next("");
}

export default AuthenticationService;