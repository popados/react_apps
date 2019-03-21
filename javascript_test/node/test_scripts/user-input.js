const readline = require ('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

rl.question('What is your name?', (name) => {
  console.log(name.split(' '))
  here()
  rl.close();
});


function here() {
rl.question('still here?', (here) => {
  console.log(here);
  close();
})
}
