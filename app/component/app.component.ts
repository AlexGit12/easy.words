import {Component} from "@angular/core";
import {Vocabulary} from "../model/Vocabulary";
import {Word} from "../model/Word";

import { VocabularyService } from '../services/vocabulary.service';

@Component({
    selector: "my-app",
    templateUrl: "component/app.component.html",
    providers: [VocabularyService]
})

export class AppComponent {
    
    public counter: number = 16;

    private currentWordIdx : number = 0;
    private appName:String = 'easy vocabulary';
    private currentVocabulary:Vocabulary; 

    constructor(private vocabularyService: VocabularyService) {

        this.currentVocabulary = vocabularyService.initVocabulary();

        console.log('init app!');
    }

    public get vocabulary(): Vocabulary {
        return this.currentVocabulary;
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public get currentWord(): string {
        let word:string = '';
        let words : Array<Word> = this.vocabulary.getWords();
        if(words.length) {
            word = words[this.currentWordIdx].getWord(); 
        } 
        return word;
    }

    public addWard() {
        console.log('add');
    }

    public onNext() {
        alert("Next");
    }

    public onPrev() {
        alert("Prev");
    }

}
