const nameInput = document.querySelector('#inputName');
const emailInput = document.querySelector('#inputEmail');
const submitBtn = document.querySelector('#submitBtn');
 let userId = 0;
 let usersArr = [];

submitBtn.addEventListener('click',(e)=>{
    let nameValue = nameInput.value.trim();
    let emailValue = emailInput.value.trim() ;
    if (nameValue&&emailValue) {
       let userObj ={
        id:userId++,
        name:nameValue,
        email:emailValue,
        score: null
    }
   usersArr.push(userObj) 
   localStorage.setItem('userObj',JSON.stringify(usersArr))

    }
 window.location.assign('./index.html')
})




