const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

let newArray = [1, 5, 7]
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for visiting! \n');
    process.exit();
  } else if (key === "b"){
    process.stdout.write('\x07');
    process.exit();
  } else if (key >= 0 && key <= 9){
    setTimeout(() => process.stdout.write(`timer after ${key} seconds \x07 \n` ), (key*1000));
  }
});