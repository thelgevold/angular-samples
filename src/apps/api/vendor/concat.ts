declare const require: any;
declare const process: any;
const fs = require('fs');
const args = process.argv;

const outputPath = args[2];
args.splice(0, 3);

let bundle = '';
args.forEach(file => {
  let content = fs.readFileSync(file, {encoding: 'utf-8'});
  bundle += '\n\n' + content;
});

fs.writeFileSync(outputPath, bundle);
