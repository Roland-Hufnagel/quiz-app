function loadCards(){
    const cards = localStorage.getItem("cards");
    if (cards === null){
        return [];
    }
    return JSON.parse(cards);
}
// loadCards wird beim Start der Seite aufgerufen. Falls im localstorage kein
// Array existiert wird ein leeres Array geliefert. Wird ein Array gefunden
// 




function saveCards(cards){
    localStorage.setItem("cards", JSON.stringify(cards));
}
// ich übergebe ein Array mit Objekten, JSON.stringify macht einen langen
// String daraus und übergibt diesen mit dem Key an localStorage.

export {loadCards, saveCards};