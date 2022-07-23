
// Checkboxen:

function myFunction() {
    let checkBox = document.getElementById("Check");
    let text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }

  function box1() {
    const checkBox = document.getElementById("Check1");
    const text = document.getElementById("text1");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }
 
  function box2() {
    const checkBox = document.getElementById("Check2");
    const text = document.getElementById("text2");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }
  function box3() {
    const checkBox = document.getElementById("Check3");
    const text = document.getElementById("text3");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }
 
  function box4() {
    const checkBox = document.getElementById("Check4");
    const text = document.getElementById("text4");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }

  //Login Button:

const modal = document.getElementById("id01");

  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
//Begrüßung:
/*

Today = new Date();

h = Today.getHours();

if(h<11) document.write("<header>Guten Morgen!</header>");

else if(h<19) document.write("<header>Guten Tag!</header>");

else if(h<24) document.write("<header>Guten Abend!</header>");

else document.write("<header>Guten Tag!</header>");

n=window.prompt("Wie darf ich dich nennen? Trag deinen Namen hier ein:","Name");
document.write("<center><h3><strong>Herzlich Willkommen "+n+"! <br />Schön, dass du meine Seite besuchst! </strong></h3></center>");
*/

//GET_Methode Node JS:

async function requestTextWithGET(url) {  
  const response = await fetch(url);      //Anfrage+ Warten auf Antwort
  const text = await response.text();
  return text;                           //Ausgabe des Textes
}

const answer = document.getElementById('answer');   
const button = document.getElementById('button');
button.addEventListener('click', getAndAttachText);  //Button durch Eventlistener
const searchItem = document.getElementById('searchItem');

async function getAndAttachText(event) {
  const text = document.createElement('p');
  console.log("Zutaten");
  text.textContent = await requestTextWithGET(
    'http://localhost:3000/search?item=' + searchItem.value
  );
  answer.appendChild(text);
}