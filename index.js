/* includes */
Array.prototype.newIncludes = function(item) {
    for(let i =0; i < this.length -1; i++){
        if(this[i] === item ) {
            return true
        }
    } return false
}
/* indexOf */

Array.prototype.newIndexOf = function(item){
    for(let i = 0; i< this.length; i++){
        if(this[i] === item){
            return i
        }
    }
    return -1
}

/* forEach */

Array.prototype.newForEach = function(cb){
    for(let i =0; i < this.length;  i++){
        this[i] = cb(this[i], i, this)
    }
    return this
}

/* map */

Array.prototype.newMap = function(cb) {
    let newArr = []
    for(let i = 0; i < this.length; i++){
        newArr.push(cb(this[i], i, this))
    }
    return newArr
}

/* filter */
Array.prototype.newFilter = function(cb) {
    let newArr = []
    for(let i = 0; i < this.length; i++){
        if(cb(this[i], i, this) === true){
            newArr.push(this[i])
        }
    }
    return newArr
}

/* reduce */
Array.prototype.newReduce = function(cb, accumilator) {
    if(!accumilator){
        accumilator = 0
    }
    for(let i = 0; i<this.length; i++){
        accumilator += cb(accumilator, curr, index, arr)
    }
    return accumilator
}