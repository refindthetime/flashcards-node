function ClozeCard(text, cloze) {
    this.text = text.split(cloze);
    this.cloze = cloze;

};

// Constructor that creates a prototype of ClozeCard to return the question missing cloze
function ClozeCardPrototype() {

    this.clozeRemoved = function () {
    	//this is supposed to embed things so the cloze card works, i hope
        return `${this.text[0]} ... ${this.text[1]}`;  
    };											
};

ClozeCard.prototype = new ClozeCardPrototype();

module.exports = ClozeCard; 