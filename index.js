// Code your solution here

function findMatching(drivers, name){
    const results = drivers.filter(function (nameFromDriversArray) {
        if (nameFromDriversArray.toLowerCase() === name.toLowerCase()){
            return nameFromDriversArray
        }
    })
    return results
}

function fuzzyMatch(drivers, name){
    const results = drivers.filter(function (nameFromDriversArray) {
        if (nameFromDriversArray[0].toLowerCase() === name[0].toLowerCase()){
            return nameFromDriversArray
        }
    })
    return results
}

function matchName(drivers, name){
    const results = drivers.filter(function (nameFromDriversArray) {
        if (nameFromDriversArray.name === name){
            return nameFromDriversArray
        }

    })
    return results

}

