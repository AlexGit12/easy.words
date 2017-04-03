import {Word} from "./Word";

export class Vocabulary {

    private name:string = 'Vocabulary';
    private id:string = '';
 
    private words: List<Word> = [];

    constructor (name: string) {
        if(name) {
            this.name = name;
        }
        this.id = (new Date()).getTime().toString();

        console.log('init vocabulary!');
    }

    public getId() {
        return this.id;
    }

    public getWords() {
        return this.words;
    }

    public addWord(word:string, translation:string) {
        let l_word:Word = new Word(word, translation);
        this.words.push(l_word);
    }

    public size():number {
        return this.getWords().length;
    }

}
