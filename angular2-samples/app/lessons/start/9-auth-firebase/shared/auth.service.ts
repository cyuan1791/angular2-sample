import { User } from "./User.interface";

//var firebase: any;
declare var firebase: any;

export class AuthService {
    sigupUser(user: User) {
        //console.log(user);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
    signinUser(user: User) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // ...
            console.log(error);
        });
    }
    isAuthenticated() {
        var user = firebase.auth().currentUser;

        if (user) {
            // User is signed in.
            //console.log('login a');
            return true;
        } else {
            // No user is signed in.
            //console.log('not login');
            return false;
        }
    }
}