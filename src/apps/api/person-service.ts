const ffi = require('ffi');
const ref = require('ref');

export class PersonService {
  private _getPeople;

  constructor(private libPath: string) {
    const ptr = ffi.DynamicLibrary(this.libPath).get('getPeople');
    this._getPeople = ffi.ForeignFunction(ptr, ref.types.CString, []);
  }

  getPeople() {   
    const res = this._getPeople();
    return JSON.parse(res);
  } 
} 
     