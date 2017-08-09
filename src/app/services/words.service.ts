import { Injectable } from '@angular/core';
import { Word } from '../models/word'

@Injectable()
export class WordsService {
  public words: Word[] = [
    {id: 1, ru: 'тест', en: 'test'}
  ]

  constructor() { }

    public addWord(ru:string, en:string): void {
      let newId = this.words[this.words.length-1].id;
      let newWord: Word = {id: newId, ru: ru, en: en};
      this.words.push( newWord )
  }

}
