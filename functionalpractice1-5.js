function sum(argument){
    var inputs = Array.prototype.slice.call(argument)
    var results = 0
    inputs.forEach(function(element){
        results += element
    })
    return results;
}

// tests
// ---
console.assert(sum(1, 2, 3) === 6)
console.assert(sum(1, 2, 3, 4) === 10)
console.assert(sum(1, 2, 3, 4, 5) === 15)

// ----------------------------
// using Array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name:"Matt", alma_mater:"Univ of Texas - Austin"},
    {name:"Brian", alma_mater:"Texas A&M"},
    {name:"Jesse", alma_mater:"Univ of Texas - Austin"},
    {name:"Justin", alma_mater:"Univ of Florida"}
]

people.sort(function(obj1, obj2){
    if (obj1.name > obj2.name) {
        return 1;
    }
    if (obj1.name < obj2.name) {
        return -1;
    }
    return 0;
})

// tests
// ---
console.assert(people[0].name === "Brian")
console.assert(people[1].name === "Jesse")
console.assert(people[2].name === "Matt")

// ----------------------------
// Using Array.map(), Array.filter(), and Array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]

var results = customers
    .filter(function(a, b){
        return a.first[0] === "J"
    })
    .map(function(a){
        return {fullname: a.first + ' ' + a.last}
    })
    .sort(function(a, b){
        if (a.fullname > b.fullname) {
            return 1
        }
        if (a.fullname < b.fullname) {
            return -1
        }
        return 0
    })

// tests
// ---
console.assert(results[0].fullname === "Jack White")
console.assert(results[2].fullname === "John Smith")