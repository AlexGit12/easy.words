export class AppSettings {

    private currentVocabularyId:string;
    private vocabularyIds:Array<string>;

    public getCurrentVocabularyId():string{
        return this.currentVocabularyId;
    }

    public getVocabularyIds():Array<string> {
        return this.vocabularyIds;
    }

    public setCurrentVocabularyId(id:string) {
        this.currentVocabularyId = id;
    }

    public setVocabularyIds(ids:Array<string>) {
        this.vocabularyIds = ids;
    }

}