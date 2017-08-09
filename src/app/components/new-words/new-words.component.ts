import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service'
import { Word } from '../../models/word'

@Component({
  selector: 'app-new-words',
  templateUrl: './new-words.component.html',
  styleUrls: ['./new-words.component.sass']
})
export class NewWordsComponent implements OnInit {

  constructor(private _wordsService: WordsService) { }

  ngOnInit() {
  }

  public addWord(ru:string, en:string): void {
    if (!!en && !!ru) {
      this._wordsService.addWord(ru, en);
    }
  }

}
