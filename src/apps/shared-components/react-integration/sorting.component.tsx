import * as React from 'react';

import { SortingService } from './sorting-service';
import { Partition } from './partition';

export class SortingComponent extends React.Component {

  unsorted = [55, 1, 2, 4, 9, 77, 3, 65, -1, 999];
  sortingService = new SortingService();
  state: any;

  constructor(props: any) {
    super(props);

    this.state = {partitions:  []};
  }

  componentDidMount() {
    let partition = new Partition('0', this.unsorted);
    this.sortingService.mergeSort(partition);
    this.setState({partitions: this.sortingService.partitions});   
  }

  render() {
    let fragments = this.state.partitions.map((node, i1) => {
        return <div key={i1} className="fragment-row" >
                {
                  node.fragments.map((numbers, i2) =>
                  <span>
                    <span className="group" key={i2}>
                    {
                      numbers.map((number, index) => {
                        return <span key={index} className="number">{number}</span>
                      })
                    }
                    </span>
                  </span>
                  )
                }
                <span>{node.descr}</span>

                <span className={node.show}>
                  {(node.part1 || []).map((n, index) => {
                    return <span key={index} className="number">{n}</span>
                  })}
                </span>
              
                <span className="group">
                  {(node.part2 || []).map((n, index) => {
                    return <span key={index} className="number">{n}</span>
                  })}
                </span>
              </div>
    });
    return (
      <div>
        <h4>Merge Sort</h4>
        <div className="fragment-row">
          <strong>Sample Numbers: { this.unsorted.join(' ') }</strong>
        </div>
        {fragments}
      </div>
    );
  }
}