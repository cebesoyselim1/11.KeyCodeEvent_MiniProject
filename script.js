let Info = document.querySelector(".showKeyInfos");
let key = document.querySelector(".key");
let keycode = document.querySelector(".keycode");
let eventcode = document.querySelector(".eventCode");
let container = document.querySelector(".container");

window.addEventListener("keypress", (e) => {
    container.innerHTML = `
        <div class="key box">
            ${e.key == " " ? "Space" : e.key}
        </div>

        <div class="keycode box">
            ${e.keyCode}         
        </div>

        <div class="eventCode box">
            ${e.code}           
        </div>
    `;
})
