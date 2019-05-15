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
}

let set = new Set();
set.add(1);
set.add(2);
console.log(set);