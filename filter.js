  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21)
console.log(oldEnough)

const paulOnly = people.filter(p => p.name === 'Paul')[0]
console.log(paulOnly)

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// complex filter no external function

// const candidates = students.filter(student =>{
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5 )
//   return strongSkills.length > 0;
// })
// console.log(candidates)

// complex filter with external functions

const hasFiveYrsExp = skill => skill.yrsExperience >= 5 

const hasStrongSkills = student => student.skills.filter(hasFiveYrsExp).length > 0;

const candidates = students.filter(hasStrongSkills)

console.log(candidates)

//Name only return using Map
console.log(candidates.map(candidate => candidate.name))