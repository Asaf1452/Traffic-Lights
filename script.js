function init(){
}
const startbtn = document.getElementById("id_start");
const stopbtn = document.getElementById('id_stop');
const traffictitle = document.getElementById('id_title');
const redlight = document.getElementById('red_light');
const yellowlight = document.getElementById('yellow_light');
const greenlight = document.getElementById('green_light');
let lightswitch = 0;
let SWITCH;
const ryg = ["red","yellow","green",'yellow'];
startbtn.addEventListener("click",()=>{
    SWITCH = setInterval(()=>{
        if(lightswitch > 3){
        lightswitch = 0;
    }
    traffictitle.style.color = ryg[lightswitch];
    if(ryg[lightswitch] === "red"){
        redlight.style.background = ryg[lightswitch];
        redlight.style.boxShadow = "0px 0px 25px 0px rgba(255,0,0,0.6)";
        yellowlight.style.background = "rgb(20, 20, 0)";
        yellowlight.style.boxShadow = "none";
        greenlight.style.background = "rgb(0, 20, 0)";
        greenlight.style.boxShadow = "none";
    }
    else if(ryg[lightswitch] === "yellow"){
        yellowlight.style.background = ryg[lightswitch];
        yellowlight.style.boxShadow = "0px 0px 25px 0px rgba(255,255,0,0.6)";
        redlight.style.background = "rgb(20, 0, 0)";
        redlight.style.boxShadow = "none";
        greenlight.style.background = "rgb(0, 20, 0)";
        greenlight.style.boxShadow = "none";
    }
    else if(ryg[lightswitch] === "green"){
        greenlight.style.background = ryg[lightswitch];
        greenlight.style.boxShadow = "0px 0px 25px 0px rgba(0,255,0,0.6)";
        redlight.style.background = "rgb(20, 0, 0)";
        redlight.style.boxShadow = "none";
        yellowlight.style.background = "rgb(20, 20, 0)";
        yellowlight.style.boxShadow = "none";
    }
    lightswitch++;},1000)
    
})
stopbtn.addEventListener('click',()=>{
    clearInterval(SWITCH);
})

init();