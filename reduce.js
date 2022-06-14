const numbers = [1, 56, 2, 4, 1, 99, 3, 5]

// Your code here!
const numbersProduct = numbers.reduce((prod, n) => { return prod * n; });
const numbersSum = numbers.reduce((sum, n) => { return sum + n; });
console.log(numbersProduct);

// Write something that takes the above array and returns the product of all the numbers
// via multiplication

// Use reduce to get the sum of all the numbers

// Hungry for more:

const cities = [
  {
        name: 'Chicago',
        population: 2746388
  },
  {
        name: 'New York City',
        population: 8804190 
  },
  {
        name: 'Boston',
        population: 689326
  },
  {
        name: 'Atlanta',
        population: 497642
  },
  {
        name: 'Los Angeles',
        population: 3898747
  }
]

// Use reduce to get the sum of the population of all 5 cities
const popSum = cities.reduce((sum, city) => { return sum + city.population; }, 0);
console.log(popSum);

// Use reduce to get the city with the highest population (output should be an object)
const highestPop = cities.reduce((highest, city) => {
      return (city.population > highest.population ? city : highest);
});
console.log(highestPop);

// Even hungrier:

const developers = [
  {
        name: 'Mike',
        languages: [
            'JavaScript',
            'Python'
        ]
  },
  {
        name: 'Maria',
        languages:  [
                'JavaScript',
                'Ruby'
            ]
  },
  {
        name: 'Becky',
        languages:    [
            'JavaScript',
            'Python',
            'Rust',
            'C'
        ]
  },
  {
        name: 'John',
        languages: [
            'JavaScript',
            'Python',
            'Ruby'
        ]
  }
]

const languageCount = developers.reduce((countObj, developer) => {
      developer.languages.forEach(language => {
            countObj[language] === undefined ? countObj[language] = 1 : countObj[language]++;
      })
      
      return countObj;
}, {});
console.log(languageCount);

// Use reduce to return an object with each languages as a property
// And the number of developers who know that language as that property's value

// Expected outcome:
// {
//     JavaScript: 4,
//     Python: 3,
//     Ruby: 2,
//     Rust: 1,
//     C: 1
// }

// This one is HARD

// Hint 1: the desired output is an object, you might want to use that as your initial value



// Hint 2: Each developer's languages is stored in an array. You might need to iterate over it.



// Instead of hardcoding the languages in your initial object, can you think of a way to do this programmatically?
