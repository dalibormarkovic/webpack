let showSecret = false
let secretButton = document.querySelector('#secret-button')
secretButton.addEventListener('click',toggleSecretStat)
function toggleSecretStat(){
    showSecret=!showSecret
}