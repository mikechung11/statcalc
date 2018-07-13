import { Component, OnInit } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Card } from '../card';
import { Cards } from '../mock-cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = Cards;

  rank = 6;
  stat3 = 5.1;
  stat4 = 5.4;
  stat5 = 5.7;
  stat6 = 6;

  constructor() { }

  ngOnInit() {
  }

}
