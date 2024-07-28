let btnDiv = document.getElementById("btn")
let randomColorDiv = document.getElementById('randomColor')
let hexaCodeDiv = document.getElementById('hexaCode')
let copyBtn = document.getElementById('copyBtn')
let currentColorCode = ''

const randomColor = () => {
    let colorCode = '#'
    let hexaCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    for(let i = 0; i < 6; i++) {
        colorCode += hexaCode[Math.floor(Math.random() * 16)]
    }

    hexaCodeDiv.innerHTML = `<h2>${colorCode}</h2>`
    currentColorCode = colorCode

    return colorCode
}

const copyColorCode = () => {
    navigator.clipboard.writeText(currentColorCode)
        .then(() => {
            copyBtn.innerText = 'Copied!'

            setTimeout(() => {
                copyBtn.innerText = 'Copy'
            }, 2000)
        })

        .catch(err => {
            console.error('Could not copy text!', err)
        })
}


btnDiv.onclick = () => {
    randomColorDiv.style.transition = 'background-color 0.5s ease-in-out'
    randomColorDiv.style.backgroundColor = randomColor()
}

copyBtn.onclick = copyColorCode;    