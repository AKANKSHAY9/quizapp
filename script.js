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
const questionE1= document.getElementById('question');
console.log(questionE1);
const a_text =document.getElementById('a_text');
const b_text =document.getElementById('b_text');
const c_text =document.getElementById('c_text');
const d_text =document.getElementById('d_text');
let currentQuiz=0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    console.log(" helllo",currentQuizData);
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    currentQuiz++;
}

const submit=document.getElementById('submit');
submit.addEventListener('click',()=>{
    

})