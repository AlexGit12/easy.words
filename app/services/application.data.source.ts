import { Injectable } from '@angular/core';
import { Vocabulary } from '../model/Vocabulary';
import { Word } from '../model/Word';

import { AppSettingsService } from './app.settings';


@Injectable()
export class ApplicationDataSource {

    static VACABULARIES_ID = 'vocabularies';
    static WORDS_ID = 'words';

    constructor(private appSettingsService: AppSettingsService) {
    }

    private getVocabularyKey(vocabulary:Vocabulary): string {
        return `${ApplicationDataSource.VACABULARIES_ID}.${vocabulary.getId()}`;
    }

    private getWords() : Array<Word>{
        return this.appSettingsService.getValue(ApplicationDataSource.WORDS_ID) as Array<Word>;
    }

    public createVocabulary(name:string) : Vocabulary {
        const newVocabulary = new Vocabulary(name);
        this.saveVocabulary(new Vocabulary(name));
        return newVocabulary;
    }

    public saveVocabulary(voc:Vocabulary) {
        this.appSettingsService.saveValue(this.getVocabularyKey(voc), voc);
        return voc;
    }

    public getVocabularyById(id:string) : Vocabulary {
        return this.appSettingsService.getValue(id) as Vocabulary;
    }

}