
let spinnerString = "|/-\\|";
spinnerString += '\n';

let delay = 0;
for (const char of spinnerString) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  },delay += 400);
}


