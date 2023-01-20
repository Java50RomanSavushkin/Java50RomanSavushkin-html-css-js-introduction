function createAddress(city, street) {
    return { city, street }
}
function createPerson(id, name, address) {
    return { id, name, address }
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot", "Pr.Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara", createAddress("Lod", "Sokolov"))
]
//=======================================
// 1 ) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot and having maximal value of 'id'
//     The expected result: Olya

//=======================================
// 2*) Build IN ONE LINE OF CODE the statistics of persons amount per city. 
//     The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}


console.log(persons.filter(p => p.address.city === "Rehovot").reduce((a, b) => (a.id > b.id ? a : b)).name);

console.log(persons.reduce((acc, curr) => { acc[curr.address.city] = (acc[curr.address.city] || 0) + 1; return acc; }, {}));





