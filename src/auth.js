import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

export function signup() 
{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => 
        {
            alert("Signup successful! Redirecting...");
            window.location.href = "tasks.html";
        })
        .catch(error => alert(error.message));
}

export function login() 
{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => 
        {
            window.location.href = "tasks.html";
        })
        .catch(error => alert(error.message));
}

export function logout() 
{
    signOut(auth).then(() => 
    {
        window.location.href = "index.html";
    }).catch(error => alert(error.message));
}

window.signup = signup;
window.login = login;
window.logout = logout;
