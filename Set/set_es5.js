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
}

let set = new Set();
set.add(1);
console.log(set.values()); 
console.log(set.has(1)); 
console.log(set.size()); 

set.add(2);
console.log(set.values()); 
console.log(set.has(2)); 
console.log(set.size()); 

set.remove(1);
console.log(set.values()); 

set.remove(2);
console.log(set.values()); 