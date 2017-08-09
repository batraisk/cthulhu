import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service'
import { Word } from '../../models/word'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  public wordsList: Word[] = [];

  constructor(private _wordsService: WordsService) { }

  ngOnInit() {
    this.wordsList = this._wordsService.words;
  }

}
