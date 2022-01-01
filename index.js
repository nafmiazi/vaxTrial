// vaxTrial function
const vaxTrail = (information) => {
    
    const result = {A: [], B: [], C: [], D: []};

    information.forEach(info => {
        if(info.age >= 20 && info.age <= 30 && info.temperature < 100){
            result.A.push(info)
        }
        else if(info.age >= 31 && info.age <= 40 && info.temperature < 100){
            result.B.push(info)
        }
        else if(info.age >= 41 && info.age < 50 && info.temperature < 100){
            result.C.push(info)
        }
        else{
            result.D.push(info)
        }
    })

    return result;
}

// Call the vaxTrial function
const result = vaxTrail([
    {name: 'Biplap', age: 22, temperature: 98},
    {name: 'sunil', age: 21, temperature: 98},
    {name: 'Kabir', age: 36, temperature: 98},
    {name: 'Rahul', age: 37, temperature: 98},
    {name: 'Paul', age: 42, temperature: 98},
    {name: 'Kat', age: 41, temperature: 98},
    {name: 'Nayem', age: 50, temperature: 98},
    {name: 'sabnaj', age: 51, temperature: 98}
])

console.log(result);