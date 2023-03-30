const fs = require('fs');




fs.mkdirSync('./build', { recursive: true });


main();


async function main() {
  fs.copyFileSync('./assets/logo.jpg', './build/logo.jpg');
}
