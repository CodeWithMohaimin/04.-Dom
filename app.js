/*-------project Requirements:
    * - Change the background color by generating a random hex or RGB color by clicking a button.

    * - Also display the color code to a disable input field
    * - Add a button to Copy the color code
    * - Add a toast message
    
*/

//Global 
let div = null;

window.onload = () => {
    main()
}
// main function =====
function main() {
    const root = document.getElementById('root');
    const copy_btn = document.getElementById('copy_btn');
    const change_btn = document.getElementById('change_btn');
    const output = document.getElementById('output');
    
    change_btn.addEventListener('click', function () {
        const bgColor = hex();
        root.style.backgroundColor = bgColor;

        output.value = bgColor;
    })



    //copy button ========
    copy_btn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value)
        if (div !== null) {
            div.remove()
            div = null;
        }
        generateToastMsg(output.value +' '+'copied')
    })
}

//Generate Hex color=======

function hex() {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random() * 255);

    // return `rgb(${red},${green},${blue})`
    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}




function generateToastMsg(msg) {
    div = document.createElement('div')
    div.innerText = msg
    div.className = 'toast_message toast_message_slide_in'

    div.addEventListener('click', function () {
        div.classList.remove('toast_message_slide_in')
        div.classList.add('toast_message_slide_out')

        div.addEventListener('animationend', function () {
            div.remove();
            div = null;
        })
    })


    document.body.appendChild(div)
}







//steps 6 - creat toast message 
//steps 7 - clear toast message