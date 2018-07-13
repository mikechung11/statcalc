import { Component, OnInit } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Stats } from '../stats';
import { ok } from 'assert';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  baseStats: Stats = {
    scd: 0,
    igdef: 0,
    aspd: 100,
    crtrate: 1,
    crtdmg: 115
  };

  buffStats: Stats = {
    scd: 14,
    igdef: 0,
    aspd: 0,
    crtrate: 14,
    crtdmg: 14
  };

  isChecked: boolean = true;

  onCheck() {
    console.log(this.isChecked);
    if (this.isChecked) {
      this.buffStats.scd = 14;
      this.buffStats.crtdmg = 14;
      this.buffStats.crtrate = 14;
    } else {
      this.buffStats.scd = 0;
      this.buffStats.crtdmg = 0;
      this.buffStats.crtrate = 0;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
