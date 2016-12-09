import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { TextEditor } from './components/text-editor/text-editor';
import { Algorithms } from './components/algorithms/algorithms';
import { SurveyDemo } from './components/survey/survey-demo';
import { Survey } from './components/survey/survey';
import { InsertionSort } from './components/insertion-sort/insertion-sort';
export var AngularModule = (function () {
    function AngularModule() {
    }
    AngularModule.prototype.ngDoBootstrap = function () { };
    AngularModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor],
                    entryComponents: [Algorithms, InsertionSort, SurveyDemo, Survey, TextEditor],
                    imports: [BrowserModule, UpgradeModule, ReactiveFormsModule]
                },] },
    ];
    AngularModule.ctorParameters = function () { return []; };
    return AngularModule;
}());
