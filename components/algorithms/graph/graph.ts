import {Component,DynamicComponentLoader, ViewChild, ViewContainerRef} from 'angular2/core';
import {Edge} from './edge';
import {Vertex} from './vertex';

@Component({
    selector: 'graph',
    directives:[Edge,Vertex],
    templateUrl: './components/algorithms/graph/graph.html'
})

export class Graph {

    first:any;
    second:any;

    @ViewChild('a', {read: ViewContainerRef}) a: ViewContainerRef;
    @ViewChild('b', {read: ViewContainerRef}) b: ViewContainerRef;
    @ViewChild('c', {read: ViewContainerRef}) c: ViewContainerRef;
    @ViewChild('d', {read: ViewContainerRef}) d: ViewContainerRef;
    @ViewChild('e', {read: ViewContainerRef}) e: ViewContainerRef;
    @ViewChild('f', {read: ViewContainerRef}) f: ViewContainerRef;
    @ViewChild('g', {read: ViewContainerRef}) g: ViewContainerRef;
    @ViewChild('h', {read: ViewContainerRef}) h: ViewContainerRef;
    @ViewChild('i', {read: ViewContainerRef}) i: ViewContainerRef;


    constructor(private dynamicComponentLoader:DynamicComponentLoader){
        this.first = null;
        this.second = null;
    }

    elementClicked(e){

        if(!e.vertex){
            return;
        }

        if(this.first === null){
            this.first = e.coordinates;
        }
        else if(this.second === null){
            this.second = e.coordinates;

            this.dynamicComponentLoader.loadNextToLocation(Edge,this[this.first.dynamicLocation])
                .then((res) => {
                    res.instance.setCoordinates(this.first.x, this.first.y, this.second.x, this.second.y);
                    this.first = null;
                    this.second = null;
                }).catch(e => console.log(e));
        }
    }

}