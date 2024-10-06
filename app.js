// На сторінці є дві кнопки. 
// При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
// при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).

const promptButton = document.getElementById("promptBtn");
let userLink = "";

promptButton.addEventListener('click', () =>{
    userLink = prompt("Hi! Enter a link, please!");
    fixLink();
})

const linkButton = document.getElementById("addressToBtn");

linkButton.addEventListener('click', function(){
    if(userLink){
        window.open(userLink, '_blank');    //location.href
    }else{
        alert("Enter a link, please!")
    }
});

function fixLink(){
    if(!userLink.startsWith('https://') && !userLink.startsWith('http://')){
        userLink = "https://" + userLink;
    }
}