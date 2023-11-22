//get  the important reference 
const btn = document.querySelector('button');
const h1 = document.querySelector('.meme-title');
const img = document.querySelector('img')
const author = document.querySelector('h2');
console.log(author)



//call the fuction for set the api on html 
function updateDetails(url,title,auth){
    //set this on the dom
    img.setAttribute('src',url); 
    h1.innerHTML = title; 
    author.innerHTML ="Author: "+ auth;
}


//fetech the api 
btn.addEventListener('click',function(){
    //fetch the api , parse the json and get data 
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data.author)
        updateDetails(data.url,data.title,data.author)
    })
})




