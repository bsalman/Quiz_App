const startBtn = document.querySelector('#startBtn')
const nextBtn = document.querySelector('#next')
const finishBtn = document.querySelector('#finish')
const questionCont = document.querySelector('#question')
const answerCont = document.querySelector('#answer_container')
const infoDiv =document.querySelector('#info')
const score = document.querySelector('#score')
const ProgressBar = document.querySelector('#progress>div')
const startPageContainer = document.querySelector('.startPageContainer')
const truIcon = document.querySelector('.trueIcon')
const falseIcon = document.querySelector('.falseIcon')
const registerBtn = document.querySelector('#registerBtn');
let scoreNum = 0;
let ProgressNum = 0;

const questions =[
    {
        id:1,
        question:'how kan i find a job ?',
        answers:[
            {text:'ask',correct:true},
            {text:'4',correct:false},
            {text:'5',correct:false},
            {text:'6',correct:false},
        ]
    },
    {
        id:2,
        question:'what 2+2 ?',
        answers:[
            {text:'ask',correct:false},
            {text:'4',correct:true},
            {text:'5',correct:false},
            {text:'6',correct:false},
        ]
    },
    {
        id:3,
        question:'what 2+5 ?',
        answers:[
            {text:'15',correct:false},
            {text:'7',correct:true},
            {text:'5',correct:false},
            
        ]
    },
    {
        id:4,
        question:'what 10+5 ?',
        answers:[
            {text:'10',correct:false},
            {text:'15',correct:true},
            {text:'5',correct:false},
            {text:'5',correct:false},
            
        ]
    },
    {
        id:5,
        question:'what 100+5 ?',
        answers:[
            {text:'15',correct:false},
            {text:'105',correct:true},
            {text:'5',correct:false},
            {text:'22',correct:false},
            
        ]
    },
    {
        id:6,
        question:'what is your name ?',
        answers:[
            {text:'15',correct:false},
            {text:'Bashar',correct:true},
            {text:'5',correct:false},
            {text:'22',correct:false},
            {text:'I dont know',correct:false},
            
        ]
    }
]
  let newRandomQu = null ;
  let currentQuestion = null;
  let ProgressAdd = 100/questions.length;
// let newQuestion = questions.filter((question)=>{questions.indexOf(question) == Math.floor(Math.random() * questions.length) })
// console.log(newQuestion);
//===========================register button functions====================//

//======================== start Button Function =========================//
startBtn.addEventListener('click',(e)=>{
e.preventDefault();
startPageContainer.classList.add('hidden');
startBtn.classList.add('hidden')
questionCont.classList.remove('hidden')
answerCont.classList.remove('hidden')
infoDiv.classList.add('hidden')

//sort the array of questions randomly//
newRandomQu = questions.sort(function(a, b){return 0.5 - Math.random()})
//set counter for index of question //
currentQuestion = 0;

setNextQuestion();

})
//=================== nextButton function ====================//
nextBtn.addEventListener("click",(e)=>{
    //adding 1 to the index of the question
    nextBtn.classList.add('hidden')
    falseIcon.classList.add('hidden')
    truIcon.classList.add('hidden')
//change the style of progress bar with changing the indx of question
    // console.log(ProgressBar.style.cssText);
    currentQuestion = currentQuestion +1;
    if(ProgressNum <= 100){
        ProgressNum = Math.floor(ProgressNum + ProgressAdd)
        ProgressBar.style.cssText =`width:${ProgressNum}%`
    }
    reSetState()
    setNextQuestion()
})
 //============reset all change preparing to move to next question==============//
const reSetState = () =>{
 while (answerCont.firstChild) {
    answerCont.removeChild(answerCont.firstChild)
        }
 document.body.classList.remove('right');
 document.body.classList.remove('false');
 
}
//===============================================//
const setNextQuestion = ()=>{
    //calling withe chosen index
    setTheQuestion(newRandomQu[ currentQuestion ]);
}
//=================================================//
function setTheQuestion (question){
    questionCont.innerHTML = question.question;
    question.answers.forEach(answer => {
        const answerBtn = document.createElement("button")
        answerBtn.innerHTML = answer.text;
        answerBtn.classList.add("answer");
        if(answer.correct){
            answerBtn.dataset.correct = true
        }
        answerBtn.addEventListener('click',selectAnswer)
        answerCont.append(answerBtn)
        });

    };
//================================================//
const selectAnswer = (e)=>{
    let answers = Array.from(document.querySelectorAll('.answer'));
 
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct  
    if (correct) {
        scoreNum++
        score.innerHTML = scoreNum
        truIcon.classList.remove('hidden');
        answers.forEach(answer => {
            answer.removeEventListener('click',selectAnswer)
            })
    //   let userObj= localStorage.getItem('userObj')
    //   if (userObj != null) {
    //       let userWithScore = JSON.parse(userObj)
    //     //   localStorage.setItem('userObj',JSON.stringify(userObj))
       
    //   }
       
    }else{
        
        falseIcon.classList.remove('hidden');
        answers.forEach(answer => {
            answer.removeEventListener('click',selectAnswer)
            })
    }
    
    Array.from(answerCont.children).forEach(btn =>{
        changeBtnClasses(btn,btn.dataset.correct)
    })
    if(newRandomQu.length > currentQuestion+1){
        nextBtn.classList.remove('hidden')
    }else{

        ProgressNum = 100
        ProgressBar.style.cssText =`width:${ProgressNum}%`
        finishBtn.classList.remove('hidden')
        questionCont.classList.add('hidden')
        answerCont.classList.add('hidden')
       
    }
}
//================= change the Classes to know if the answer is  correct or not =============================//
const changeBtnClasses =(element,right) =>{
    if (right ) {
        element.classList.add('right')
        

    }else{
        element.classList.add('false')

    }
}
//=========================================//
 const clearClasses = (element) =>{
    element.classList.remove('right')
    element.classList.remove('false')
 }








