
  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyDUkq4adw7moScIC265NoL2VNePm40nJo0",
      authDomain: "careercounsellor-5019d.firebaseapp.com",
      databaseURL: "https://careercounsellor-5019d-default-rtdb.firebaseio.com",
      projectId: "careercounsellor-5019d",
      storageBucket: "careercounsellor-5019d.appspot.com",
      messagingSenderId: "97304476385",
      appId: "1:97304476385:web:098984236e4fecf7b915a0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    import { getDatabase,ref,get,set,child,update,remove} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  const db=getDatabase();
  var f_id=0;
var quetion=document.getElementById('Question');
let opt1=document.getElementById('opt1');
let opt2=document.getElementById('opt2');
let opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');

document.getElementById('submit').addEventListener('click',()=>{
    const em=document.getElementById('email').value;
    const fb=document.getElementById('feedback').value;
    console.log(em,fb);
    set(ref(db,"feedback/fb-"+f_id),{
        email:em,
        feedback:fb
    }).then(()=>{
        alert("Response Submitted");
        f_id=f_id+1;
    })
    .catch((error)=>{
        alert("Unsuccessfull "+error);
    });
})
const ic = document.querySelectorAll('.ic');
let qid=102;
function refresh(){
    ic.forEach(i => {
                i.classList = "ic fa-regular fa-circle-dot mx-3";
            })
            but.forEach(bu => {
                // bu.setAttribute('style', 'background-color: white;');
                bu.style = "background-color: white;";
            })
}
document.getElementById('next').addEventListener('click',()=>{
console.log(qid);
    refresh();
    if(qid==0){
        result();
        return;
    }
    else if(qid==105){
        document.getElementById('next').innerText="Submit";
        document.getElementById('next').classList="m-2 btn btn-success px-4";
    }
    
    const dbref=ref(db);
    get(child(dbref,"Question/q_"+qid)).then(ss=>{
        if(ss.exists()){
            // opt1.innerHTML=`<i
            // class="ic fa-regular fa-circle-dot mx-3"></i>`+ss.val().email; 
            quetion.innerText=ss.val().question;
            opt1.innerHTML=`<i
            class="ic fa-regular fa-circle-dot mx-3"></i>`+ss.val().opt1;
            opt2.innerHTML=`<i
            class="ic fa-regular fa-circle-dot mx-3"></i>`+ss.val().opt2;
            opt3.innerHTML=`<i
            class="ic fa-regular fa-circle-dot mx-3"></i>`+ss.val().opt3;
            opt4.innerHTML=`<i
            class="ic fa-regular fa-circle-dot mx-3"></i>`+ss.val().opt4;
            if(qid==105){
                qid=0;
            }else{
                qid=qid+1;
            }
        }else{
            alert('value not found');
        }
    }).catch(error=>{
        console.log(error)
    })


})
// function insertq(){
//     set(ref(db,"Question/q_"+105),{
//         q_id: 105,
//         question:"This is 5th and Last Question fifth",
//         opt1:"this ",
//         opt2:"is",
//         opt3:"working",
//         opt4:"yay!",
//         answer:"Revenue",
//         category:"gk",
//         sub_cat:"history"
//     }).then(()=>{
//         alert("Response Submitted");
//         qid=qid+1;
//     })
//     .catch((error)=>{
//         alert("Unsuccessfull "+error);
//     });
// }
// insertq();