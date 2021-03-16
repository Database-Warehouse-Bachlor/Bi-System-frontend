import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../Helpers/HandleResponse';

export const AddUser = {
    register
};

function register(orgnr: string, email: string, pwd: string) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: new URLSearchParams({ orgnr, email, pwd })
    };

    return fetch(`/register`, requestOptions)
        .then(handleResponse)
    
}
export default AddUser;