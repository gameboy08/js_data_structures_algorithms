function Set() {
    let items = {}
    this.has = function(value) {
        // return value in items //but it also check in prototype chain
        return items.hasOwnProperty(value);
    }
    this.add = function(value) {
        if (!this.has(value)) {
            items[value] = value
            return true;
        }
        return false;
    } 
    this.remove = function(value) {
        if (!this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }
    this.clear = function() {
        items = {}
    }
    this.size = function() {
        return Object.keys(items).length;
    }
    this.values = function() {
        let result = []
        result.push(...Object.keys(items))
        return result;
    }
    //get the union of this set and another set.
    this.union = function(otherSet) {
        let unionSet = new Set();
        let values = this.values();
        values.map(val => unionSet.add(val))

        let other_set_values = otherSet.values();
        other_set_values.map(val => unionSet.add(val))

        return unionSet;
    }

    this.intersection = function(otherSet) {
        let intersectionSet = new Set();
        let values = this.values();
        values.map(val => {
            if (otherSet.has(val)) {
                intersectionSet.add(val)
            }
        })

        return intersectionSet;
    }

    this.difference = function(otherSet) {
        let differenceSet = new Set();
        let values = this.values();
        values.map(val => {
            if (!otherSet.has(val)) {
                differenceSet.add(val);
            }
        })
        return differenceSet;
    }

    this.subset = function(otherSet) {
        let result = true;
        if (this.size() > otherSet.size()) {
            result = false
        } else {
            let values = this.values();
           
            values.map(val => {
                if(!otherSet.has(val)) {
                    result = false
                }
            })
        }
        return result;
    }
}

// let set = new Set();
// set.add(1);
// console.log(set.values()); 
// console.log(set.has(1)); 
// console.log(set.size()); 

// set.add(2);
// console.log(set.values()); 
// console.log(set.has(2)); 
// console.log(set.size()); 

// set.remove(1);
// console.log(set.values()); 

// set.remove(2);
// console.log(set.values()); 

// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// let setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);

// let unionAB = setA.union(setB);
// console.log(unionAB.values());

//test intersection
// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// let setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);

// let intersectionAB = setA.intersection(setB);
// console.log(intersectionAB.values());

//test difference
// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);

// let setB = new Set();
// setB.add(2);
// setB.add(3);
// setB.add(4);

// let differenceAB = setA.difference(setB);
// console.log(differenceAB.values());

//test subSet
let setA = new Set();
setA.add(1);
setA.add(2);

let setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

let setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.subset(setB));
console.log(setA.subset(setC));