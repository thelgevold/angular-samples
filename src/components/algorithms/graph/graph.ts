import {Component, ComponentFactoryResolver, ViewChild, OnInit} from '@angular/core';
import {EdgeService} from './edge-service';
import {Edge} from './edge';

@Component({
    selector: 'graph',
    template: `
    <div>
    <h1>Create a Graph</h1>

    <div class="alert alert-info" role="alert">
        Click any pair of nodes to connect them with an edge
    </div>

    <vertex [value]="'A'"></vertex>

    <table class="graph-table">
        <tr>
            <td><vertex [value]="'B'"></vertex><td><vertex [value]="'C'" ></vertex></td>
        <tr>
            <td><vertex [value]="'E'" ></vertex></td><td><vertex [value]="'F'" ></vertex></td>
        </tr>
        <tr>
            <td><vertex [value]="'G'" ></vertex></td><td><vertex [value]="'H'" ></vertex></td><td><vertex [value]="'I'" ></vertex></td>
        </tr>
    </table>
    </div>
    <h4><a href="http://www.syntaxsuccess.com/viewarticle/loading-components-dynamically-in-angular-2.0">Read more here</a></h4>
    `,
    providers:[EdgeService]
})

export class Graph implements OnInit {

    constructor(private componentResolver: ComponentFactoryResolver, private edgeService:EdgeService){}

    ngOnInit(){
        this.edgeService.getCoordinates().subscribe(coordinates => {
            let factory = this.componentResolver.resolveComponentFactory(Edge);
            let res = coordinates.first.viewContainer.createComponent(factory);
            res.instance.setCoordinates(coordinates.first, coordinates.second);
        });
    }
}