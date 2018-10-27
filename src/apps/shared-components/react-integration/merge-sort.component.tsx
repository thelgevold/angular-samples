import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {SortingComponent} from './sorting.component';

export class MergeSortComponent {
  static initialize(){
    ReactDOM.render(<SortingComponent />, document.getElementById('merge-sort'));
  }
}