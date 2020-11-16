import chalk from 'chalk'
import datefns from 'date-fns'


import myFoods from './favoriteFoods.mjs'


const { format } = datefns
console.log(format(new Date(Date.now()), 'MM-dd-yyyy'))

console.log(chalk.bgGrey.whiteBright`I installed an NPM package I wrote a few years ago! It\'s a command line too, so there is nothing to import or any exposed functions. So...I can\'t do anything with it here:)`)

myFoods.forEach(food => console.log(chalk.magenta`${food}`))
