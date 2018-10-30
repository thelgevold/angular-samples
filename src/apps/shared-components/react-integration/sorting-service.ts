import {Partition} from './partition';

export class SortingService {
  partitions: any[] = [];

  mergeSort(currentPartition) {
    if (currentPartition.isSingleItemList()) {
      return currentPartition;
    }

    let left = currentPartition.getLeftHalf();
    let right = currentPartition.getRightHalf();

    this.buildModel(left, {left: [...currentPartition.items]});
    this.buildModel(right, {left: [...currentPartition.items]});

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
    let result = [];
    let parts = {left: [...left.items], right: [...right.items]};

    while (!left.isEmpty() && !right.isEmpty()) {
      if (left.first() < right.first()) {
        result.push(left.items.shift());
      } else {
        result.push(right.items.shift());
      }
    }

    result = result.concat(left.items).concat(right.items);

    let newPartition = new Partition(`${left.id}-${right.id}`, result);

    this.buildModel(newPartition, parts);

    return newPartition;
  }

  buildModel(res, part) {
    let nodeIndex = this.partitions.findIndex(p => p.parentId === res.parentId);

    if (nodeIndex >= 0) {
      this.partitions[nodeIndex].fragments.push(res.items.slice());
      this.partitions[nodeIndex].part1 = [];

      this.partitions[nodeIndex].part2 = part.left;
      this.partitions[nodeIndex].descr = '*split from ';
      this.partitions[nodeIndex].show = 'hide';
    } else {
      let node: any = {parentId: res.parentId, fragments: []};

      node.part1 = part.left;
      node.descr = '*merged from ';
      node.part2 = part.right;
      node.show = 'group';

      node.fragments.push(res.items.slice());
      this.partitions.push(node);
    }
  }
}
