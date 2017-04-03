import { Injectable } from '@angular/core';
import { AppSettings } from '../model/AppSettings';
import { Vocabulary } from '../model/Vocabulary';
import { Word } from '../model/Word';
import { ApplicationDataSource } from './application.data.source';
import { AppSettingsService } from './app.settings';

@Injectable()
export class VocabularyService {

    static APP_SETTINGS_ID:string = 'settings';

    private appSettings:AppSettings; 

    constructor(private appSettingsService:AppSettingsService, private applicationDataSource:ApplicationDataSource) {

        this.appSettings = this.appSettingsService.getValue(VocabularyService.APP_SETTINGS_ID) as AppSettings;

    }

    public initVocabulary(forseCreation:boolean = false):Vocabulary {

        let vocabulary:Vocabulary;
        if(this.appSettings.getCurrentVocabularyId()) {
            vocabulary = this.applicationDataSource.getVocabularyById(this.appSettings.getCurrentVocabularyId());
        } else {
            vocabulary = this.applicationDataSource.createVocabulary('my first vocabulary');
            this.applicationDataSource.saveVocabulary(vocabulary);
        }
        return vocabulary;
        
    }

}