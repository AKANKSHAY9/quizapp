const quizData=[
    {
        question:'When was Google founded?',
        a:'2010',
        b:'1998',
        c:'1999',
        d:'2000',
        correct:'b'
    },{
        question:'Which is the most used programming language in 2022?',
        a:'Javascript',
        b:'Cpp',
        c:'Java',
        d:'Python',
        correct:'d'
    },{
        question:'Who is the Prime Minister of India?',
        a:'Narendra Modi',
        b:'Amit Shah',
        c:'Manmohan Singh',
        d:'Sonia Gandhi',
        correct:'a'
    },{
        question:'What does HTML stands for?',
        a:'Hyper Text Maintanence Language',
        b:'Hyper Transfer Markup Language',
        c:'Hyper Text Markup Language',
        d:'Hyper Text Mark Library',
        correct:'b'
    },{question:'When was javascript launched?',
    a:'2020',
    b:'2019',
    c:'2017',
    d:'None of the above',
    correct:'d'
        
    }
]

const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionE1= document.getElementById("question");

const a_text =document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");
const submitBtn= document.getElementById("submit");
let currentQuiz=0;
let score =0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
   
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
}

function getSelected(){
    let answer= undefined;
    answerEls.forEach((answerE1)=>{
        if(answerE1.checked){
            answer= answerE1.id;
        }
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerE1)=>{
        answerE1.checked=false;
        })
}



submitBtn.addEventListener("click",()=>{
    const answer= getSelected();
    if(answer){
        if(answer=== quizData[currentQuiz].correct){
            score++;
        }
    
        currentQuiz++;
            if(currentQuiz < quizData.length){
            loadQuiz();
    }
        else{
            quiz.innerHTML= `<h2>You answered correctly at ${score}/${quizData.length}questions.</h2>
            <button onclick="location.reload()">Reload</button>
            `;
    }
   
    }

});