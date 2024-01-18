let students = `marvin marvellous mubarrack ekene ayodele`
const arrayOfStds = students.split(' ')

arrayOfStds.pop()

arrayOfStds.shift()

arrayOfStds.unshift('Marvin')
let otherstds = ['jonah', 'damilola']

arrayOfStds.push(...otherstds)

arrayOfStds.splice(3,0,...otherstds)


console.log(arrayOfStds)




