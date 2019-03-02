class TypeWriter{
    constructor(txtElement, words, wait = 2000){
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDel = false;
    }

    type(){
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if(this.isDel){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        }else{
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = '<span class="txt">'+this.txt+'</span>';

        let typeSpeed = 300;

        if(this.isDel){
            typeSpeed /= 2;
        }

        if(!this.isDel && this.txt === fullTxt){
            typeSpeed = this.wait;
            this.isDel = true;
        }else if(this.isDel && this.txt === ''){
            this.isDel = false;
            this.wordIndex++;
            typeSpeed = 300;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init(animationsEnd){
    const txtElement = document.querySelector('.text-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    if(animationsEnd === true){
        return new TypeWriter(txtElement, words, wait);
    }
}