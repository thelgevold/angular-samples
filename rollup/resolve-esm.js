let root = `${__dirname}`.replace('rollup', '');
const baseRxJs = `${root}node_modules/rxjs/_esm5/`;

export class ResolveESM {
  
  resolveId(importee, importer) {
    if (importee.startsWith('rxjs')) {
      let esm = importee.replace('rxjs/', '');
      return `${baseRxJs}${esm}.js`;
    }
  }
}