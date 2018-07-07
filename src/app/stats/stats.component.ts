import { Component, OnInit } from '@angular/core';
import { Stats } from '../stats';

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
    scd: 0,
    igdef: 0,
    aspd: 0,
    crtrate: 0,
    crtdmg: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
