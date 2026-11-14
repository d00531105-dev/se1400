let x = false
function menu() {
    if (x === false) {
        x = true;
    
    }   else {
        x = false
    }
    if (x === true) {
        var el = document.querySelector("nav ul")
        console.log(el)
        el.classList.replace('drop', 'dropped')
    

    }   else {
        var el = document.querySelector("nav ul")
        console.log(el)
        el.classList.replace('dropped', 'drop')
    }

    

}