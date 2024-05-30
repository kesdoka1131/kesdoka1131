
// // const h1=document.createElement('h1');
// // body.appendChild(h1);
// // h1.textContent ='hello world';
const body =document.querySelector('body');
const button=document.querySelector('.button');
const word=document.createElement('h3');
const defination=document.createElement('p');



const randomword=()=>{
    fetch('https://random-word-api.herokuapp.com/word?number=1  ')
    .then(response=>{
        return response.json();
    })
    .then(response =>{
        word.textContent=response;
        body.appendChild(word);
        randomdefination(word);

    })
    .catch(err=>{
        console.log(err);
    });
};

const randomdefination =()=>{
    console.log(word.textContent);
    fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContent}?key=9ec28017-75d5-4f9e-b116-322f6bac4210`)
        .then(response=>{
            return response.json();
        })
        .then(response=>{
            console.log(response[0].shortdef[0]);
            defination.textContent=response[0].shortdef[0];
            body.appendChild(defination);
        })
        .catch(err=>{
            console.log(err);
        })
}

button.addEventListener('click',randomword);
//https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=9ec28017-75d5-4f9e-b116-322f6bac4210

