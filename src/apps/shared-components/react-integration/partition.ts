export class Partition {
  static nextId = 0;
  id: string;
  parentId: string;
  items: Array<number>;
  middle: number;

  constructor(parentId: string, items: Array<number>) {
    this.items = items;
    this.parentId = `parentId${parentId}`;
    this.id = (Partition.nextId++).toString();
    this.middle = this.findMiddle();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isSingleItemList() {
    return this.items.length < 2;
  }

  findMiddle() {
    return Math.floor(this.items.length / 2);
  }

  first() {
    return this.items[0];
  }

  getLeftHalf() {
    let items = this.items.slice(0, this.middle);
    return new Partition(this.id, items);
  }

  getRightHalf() {
    let items = this.items.slice(this.middle, this.items.length);
    return new Partition(this.id, items);
  }
}
