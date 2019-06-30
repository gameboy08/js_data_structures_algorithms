const LinkedList = require("../LinkedList/linkedList_es5");
var ValuePair = function(key, value) {
    this.key = key;
    this.value = value;
    this.toString = function() {
        return "[" + + this.key + ' - ' + this.value + "]";
    }
}
function SeparateChaining() {
    let table = [];
    var loseloseHashCode = function(key) {
        let hash = null;
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash%37;
    }
    this.put = function(key, value) {
        let position = loseloseHashCode(key);
        if(table[position] == undefined) {
            table[position] = new LinkedList()
        }
        table[position].append(new ValuePair(key, value))
    }
    this.get = function(key) {
        const position = loseloseHashCode(key);
        if(table[position] !== undefined) {
            const current = table[position].getHead();
            while(current.next) {
                if(current.element.key === key) {
                    return current.element.value;
                }
                current = current.next;
            }
            //if the linked list has only one node or the current is the last node of the linked list
            if(current.element.key === key) { 
                return current.element.value;
            }
        }
        
        return undefined;
    }

    this.remove = function(key) {
        const position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            const current = table[position].getHead();
            while(current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element);
                    if(current.isEmpty()) {
                        table[position] = undefined
                    }
                    return true;
                }
                
                current = current.next;
            }
            if(current.element.key === key) {
                table[position].remove(current.element);
                if(current.isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    }
}


