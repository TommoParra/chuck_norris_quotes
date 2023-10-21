const phraseContainer = document.querySelector('.chuck_phrase');
const loadBtn = document.querySelector('#loadPhraseBtn');


// Print one phrase
async function printPhrase(domElement) {
    // Load data from API
    let quote = await loadData(endPoint);

    // Set text content of DOM element
    domElement.textContent = quote.value;
}

//prints initial phrase
printPhrase(phraseContainer);

//print phrase event listener
loadBtn.addEventListener('click', () => {
    printPhrase(phraseContainer);
});




