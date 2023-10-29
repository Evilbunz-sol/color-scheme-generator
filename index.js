// Global Variables
const colorPicker = document.getElementById("color-picker")
const colorScheme = document.getElementById("color-scheme")
const getColorBtn = document.getElementById("get-color-btn")
const x = document.getElementById("color-palette-container")
let colorArr =[]


// Render Color Palette
function renderColor(){
    let html = ""
    
    colorArr.forEach(function(color) {
        html += `
            <div class="color-palette-block">
                <h1 class="color-palette" style="background-color: ${color.hex.value}"> <h1>
                <p class="color-palette-hex"> ${color.hex.value} </p>
            </div>
            `
    })
    document.getElementById("color-palette-container").innerHTML = html
}


// Get Request from API
getColorBtn.addEventListener("click", function(){
    const colorPickerNoHash = colorPicker.value.slice(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPickerNoHash}&mode=${colorScheme.value}`)
        .then(response => response.json())
        .then(data => {
            colorArr = data.colors
            renderColor()
    })
})