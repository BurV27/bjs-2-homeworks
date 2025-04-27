function compareArrays(arr1, arr2) {
    return arr1.every((elem, idx) => elem === arr2[idx] && arr1.length === arr2.length) 
}



function getUsersNamesInAgeRange(users, gender) {
    return users.
    filter(position => position.gender === gender)
    .map(ages => ages.age)
    .reduce((acc, item, index, array) => acc + item / array.length, 0)
}
