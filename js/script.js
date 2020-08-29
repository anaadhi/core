const auth = firebase.auth();
const login = document.getElementById('login');
const signup = document.getElementById('submit');


signup.addEventListener('click',e=> {
  
    const log = auth.createUserWithEmailAndPassword(document.getElementById('email').value, "xxxxxx"); //login
    log.catch(e => console.log(e.message)); //catch errors

  });