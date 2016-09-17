var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { UpgradeAdapter } from '@angular/upgrade';
import { TextEditor } from './components/text-editor/text-editor';
import { Algorithms } from './components/algorithms/algorithms';
import { SurveyDemo } from './components/survey/survey-demo';
import { Survey } from './components/survey/survey';
import { InsertionSort } from './components/insertion-sort/insertion-sort';
var UpgradeModule = (function () {
    function UpgradeModule() {
    }
    UpgradeModule = __decorate([
        NgModule({
            declarations: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor],
            imports: [BrowserModule, ReactiveFormsModule]
        }), 
        __metadata('design:paramtypes', [])
    ], UpgradeModule);
    return UpgradeModule;
}());
var adapter = new UpgradeAdapter(UpgradeModule);
angular.module('angular-legacy').directive('algorithms', adapter.downgradeNg2Component(Algorithms));
angular.module('angular-legacy').directive('survey', adapter.downgradeNg2Component(SurveyDemo));
angular.module('angular-legacy').directive('editor', adapter.downgradeNg2Component(TextEditor));
adapter.bootstrap(document.body, ['angular-legacy']);
