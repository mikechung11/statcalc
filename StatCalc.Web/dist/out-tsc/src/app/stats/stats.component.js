"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
        this.baseStats = {
            scd: 0,
            igdef: 0,
            aspd: 100,
            crtrate: 1,
            crtdmg: 115
        };
        this.buffStats = {
            scd: 14,
            igdef: 0,
            aspd: 0,
            crtrate: 14,
            crtdmg: 14
        };
        this.isChecked = true;
    }
    StatsComponent.prototype.onCheck = function () {
        console.log(this.isChecked);
        if (this.isChecked) {
            this.buffStats.scd = 14;
            this.buffStats.crtdmg = 14;
            this.buffStats.crtrate = 14;
        }
        else {
            this.buffStats.scd = 0;
            this.buffStats.crtdmg = 0;
            this.buffStats.crtrate = 0;
        }
    };
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'app-stats',
            templateUrl: './stats.component.html',
            styleUrls: ['./stats.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=stats.component.js.map