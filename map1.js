let forecast = [
    {
        day: 'Monday',
        high: 55,
        low: 53,
    },
    {
        day: 'Tuesday',
        high: 65,
        low: 60,
    },
    {
        day: 'Wednesday',
        high: 63,
        low: 58,
    },
    {
        day: 'Thursday',
        high: 61,
        low: 57,
    },
    {
        day: 'Friday',
        high: 60,
        low: 53,
    },
    {
        day: 'Saturday',
        high: 61,
        low: 58,
    },
    {
        day: 'Sunday',
        high: 57,
        low: 54,
    },
]

// Build an array of strings using the forecast objects above with the following pattern:
// "Monday will have a high of 55F and a low of 53F."

const dayOfWeek = forecast.map((day) => {
    return day.day
})
const theHigh = forecast.map((high) => {
    return high.high
})
const theLow = forecast.map((low) => {
    return low.low
})



for (let i = 0; i < forecast.length; i++) {
    console.log(`${dayOfWeek[i]} will have a high of ${theHigh[0]}F and a low of ${theLow[i]}F.`)
}

//Your code here
