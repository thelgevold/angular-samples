var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export let InputControls = class InputControls {
    constructor() {
        this.javascript = false;
        this.angular = false;
        this.csharp = false;
        this.name = 'Two way bound';
    }
};
InputControls = __decorate([
    Component({
        selector: 'input-controls',
        template: `
            <h1>Input Controls</h1>
            <div class="input-controls">
                <h4>"Two way bindings"</h4>

                <input id="name" [(ngModel)]="name" />

                <div>Current Value: {{name}}</div>
            </div>

            <div class="input-controls">
                <h4>Select a gender</h4>
                <div>
                    <label>
                        <input #male name="gender" type="radio" value="Male" (click)="gender = male.value" />
                        Male
                    </label>
                </div>
                <div>
                    <label>
                        <input #female name="gender" type="radio"  value="Female" (click)="gender = female.value" />
                        Female
                    </label>
                </div>
                <div>
                    Selected gender is <strong>{{gender}}</strong>
                </div>
            </div>

            <div class="input-controls">
                <h4>Select your programming skills</h4>
                <div>
                    <label>
                        <input #angularcb type="checkbox" (change)="angular = angularcb.checked" />
                        Angular
                    </label>
                </div>
                <div>
                    <label>
                        <input #javascriptcb type="checkbox" (change)="javascript = javascriptcb.checked" />
                        JavaScript
                    </label>
                </div>
                <div>
                    <label>
                        <input #csharpcb type="checkbox" (change)="csharp = csharpcb.checked" />
                        C#
                    </label>
                </div>
            </div>

            <div>
                Selected Skills:
                <ul>
                    <li *ngIf="angular">Angular</li>
                    <li *ngIf="javascript">JavaScript</li>
                    <li *ngIf="csharp">C#</li>
                </ul>
            </div>

            <h4><a href="http://www.syntaxsuccess.com/viewarticle/input-controls-in-angular-2.0">Read more here</a></h4>`
    }), 
    __metadata('design:paramtypes', [])
], InputControls);
