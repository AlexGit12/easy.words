export class Word {

    id: string;
    word: string = '';
    translation: string = '';
    transcription: string = '';

    constructor (word: string, translation:string, transcription:string = '') {
        if(!word && !translation) {
            throw new TypeError("Can't create word and translation values are reqired!");
        }

        this.id = 'word.' + (new Date()).getTime().toString();
        this.word = word;
        this.translation = translation;
        this.transcription = transcription;

        console.log('init Word !');
    }

    public getWord() :string {
        return this.word;
    }

}
