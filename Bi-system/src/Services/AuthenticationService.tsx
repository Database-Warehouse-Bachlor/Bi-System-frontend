import { useHistory } from 'react-router-dom';
import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../Helpers/HandleResponse';

//The token of the logged in user
const token = localStorage.getItem('currentUser')
const currentUserSubject = new BehaviorSubject((token || '{}'));

export const AuthenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    currentToken: token,
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
        var token = localStorage.getItem(key);
        return token
      },
      removeCurrentUser: function() {
        if (!this.isReady()) throw new Error("Cannot find localStorage");
        localStorage.removeItem('currentUser');
        return true;
      }     
};

/* Makes an Api call and send the email and password  */
function login(email: string, pwd: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: new URLSearchParams({ email, pwd })
    };

    return fetch(`auth/login`, requestOptions)
        .then(handleResponse)
        .then(token => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', (token));
            currentUserSubject.next(token);
            return token;
        });
}

function logout() {
    // remove user from local storage to logs out user
    function History() {
      let history = useHistory();
      return history;
  }
  /* Redirects the user to login-page(/) when logging out */
    History()
    localStorage.removeItem('currentUser');
    currentUserSubject.next("");
    History().push("/");
}

export default AuthenticationService;