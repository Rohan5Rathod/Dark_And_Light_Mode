const switchBtn = document.getElementById("switch");
const handle = document.getElementById("handle");
// let switchStatus = 0; //0 is dark, 1 is light
let switchStatus = false;

switchBtn.addEventListener('click', toggleMode)

function toggleMode(){
    if(!switchStatus){
        document.documentElement.style.setProperty('--background-color', 'white')
        document.documentElement.style.setProperty('--text-color', 'black')
        handle.classList.add('move-right')
        switchStatus = true
    }else{
        document.documentElement.style.setProperty('--background-color', '#232323')
        document.documentElement.style.setProperty('--text-color', 'white')
        handle.classList.remove('move-right')
        switchStatus = false
    }
}