module.exports.beBasic = () => "That's so fetch!"

module.exports.count = () => {
    for(let i = 0; i <= 10; i++){
        console.log(i)
    }
}

module.exports.addMath = (parmOne, parmTwo) => {
    return parmOne + parmTwo
}

// module.export is a js object that contains all code we want to export and import into another file (Like our index.js)