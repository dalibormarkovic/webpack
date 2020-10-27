let showSecret = false;
secretButton.addEventListener('click',toggleSecretStat);
function toggleSecretStat(){
    showSecret=!showSecret;
    ubdateSecretParagraph();
    ubdateSecretButton();
};
function ubdateSecretParagraph(){
    showSecret? secretParagraph.style.display='block':
    secretParagraph.style.display='none'
}
function ubdateSecretButton(){
    showSecret? secretButton.textContent='Hide the Secret':
    secretButton.textContent='Show the Secret'
}