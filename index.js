function showYoungestStudent(personsArr, objProperty) {

    let maxAge = 0;

    for (let i = 0; i < personsArr.length; i++) {

        if (personsArr[i][objProperty] > maxAge) {

            maxAge = personsArr[i][objProperty];

        }

    }

    return maxAge

}
const students = [
    { name: 'Yasser', age: 18 },
    { name: 'Ahmed', age: 27 },
    { name: 'Noor', age: 23 },
    { name: 'Sara', age: 25 },
    { name: 'Hajer', age: 20 },
];

console.log(showYoungestStudent(students, "age"))