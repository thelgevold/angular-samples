import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';


@Component({
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

            <h4><a href="http://www.syntaxsuccess.com/viewarticle/input-controls-in-angular-2.0">Read more here</a></h4>`,
    directives:[FORM_DIRECTIVES]
})

export class InputControls {

    gender:string;
    javascript = false;
    angular = false;
    csharp = false;
    name = 'Two way bound';
}