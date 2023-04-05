const chalk=require('chalk')


console.log(chalk.blue('Hello World!!'));

console.log(chalk.blue.bgRed.bold("Hello world...."))

console.log(chalk.red("I am red line "+chalk.blue.underline.bold(" with blue substring")
+" that becomes red again"))