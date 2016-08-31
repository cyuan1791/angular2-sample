import { User } from "./User.interface";

//var firebase: any;
declare var firebase: any;

export class AuthService {
    sigupUser(user: User) {
        console.log(user);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    }
}