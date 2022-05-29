
window.onload = () => {
    main()
}
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
    copy_btn.addEventListener('click', function () {
        navigator.clipboard.writeText(output.value)
    })
}

//Generate Hex color

function hex() {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random() * 255);

    // return `rgb(${red},${green},${blue})`
    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}