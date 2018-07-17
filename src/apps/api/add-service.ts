const ffi = require('ffi');
const ref = require('ref');

export class AddService {
  private _add;

  constructor(libPath: string) {
    const int = ref.types.int;
    const addPtr = ffi.DynamicLibrary(libPath).get('add');
    this._add = ffi.ForeignFunction(addPtr, int, [int, int]);
  }

  add(num1: number, num2: number) {
    return this._add(num1, num2);
  }
}
