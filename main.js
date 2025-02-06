let button = document.querySelector('.replace')
let searchedinput = document.querySelector('#required')
let theText = document.querySelector('.textarea')
let theOText = theText.innerHTML
let results = document.querySelector('.numOfResults')
searchedinput.addEventListener('input',()=>{
    let reg = new RegExp(searchedinput.value,'gi')
    if(searchedinput.value !== ''){
        if(theText.innerText.match(reg) !== null){
            theText.innerHTML = theOText.replaceAll(reg,(match)=>`<span class="background">${match}</span>`)
            results.innerHTML = `There are ${theText.innerHTML.match(reg).length} results`
        }
        else{
            results.innerHTML = 'There is no results' 
            theText.innerHTML = theOText
        }
    }
    else{
        theText.innerHTML = theOText
        results.innerHTML = ''
    }
})

button.onclick = function(){
    if(searchedinput.value !== ''){
        let searchedWord = document.querySelector('#required').value
        let alternatedeword = document.querySelector('#replaced').value
        let theText = document.querySelector('.textarea')
        let reg = new RegExp(searchedWord,"gi")
        theText.innerHTML = theText.innerHTML.replace(reg,alternatedeword)
        theOText= theText.innerText
    }
}

let theNewP = document.querySelector('.theNP')
let Pbutton = document.querySelector('.change')

Pbutton.onclick = function(){
    theText.innerHTML = theNewP.value
    theOText = theNewP.value
}