var button = document.querySelector('#button')
var closeButton = document.querySelector('#close-button')
var dropdown = document.querySelector('#dropdown')

function click () {
    console.log('hi');
}

// 2
function openDropdown() {
    dropdown.className = 'dropdown';
}

function closeDropdown() {
        dropdown.className = 'dropdown closed'
}

// 3

button.addEventListener('click', openDropdown)
closeButton.addEventListener('click', closeDropdown)



// function toggle() {
//     var classState = document.querySelector('#dropdown').className
//     var isClosed = classState === 'dropdown closed'

//     if (isClosed) {
//         open() } 
//     else if {
//         close() }
// }