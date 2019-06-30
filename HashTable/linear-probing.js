var ValuePair = function(key, value) {
    this.key = key;
    this.value = value;
    this.toString = function() {
        return "[" + + this.key + ' - ' + this.value + "]";
    }
}

function linearProbing() {
    let table;
    var loseloseHashCode = function(key) {
        let hash = null
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }
    this.put = function(key, value) {
        const position = loseloseHashCode(key);
        if(table[position] == undefined) {
            table[position] = new ValuePair(key, value);
        } else {
            let index = ++position;
            while(table[index] !== undefined) {
                index++;
            }
            table[index] = new ValuePair(key, value);
        }
    }
    this.get = function(key) {
        const position = loseloseHashCode(key);
        if(table[position] !== undefined) {
            if(table[position].key === key) {
                return table[position].value;
            } else {
                let index = ++position;
                while( table[index] === undefined || table[position].key !== key) {
                    index++;
                }
                if(table[index].key === key) {
                    return table[index].value;
                }
            }
        }
        return undefined
    }
    this.remove = function(key) {
        const position = loseloseHashCode(key);
        if(table[position] !== undefined) {
            if(table[position].key === key) {
                table[position] = undefined;
                return true;
            } else {
                let index = ++position;
                while( table[index] === undefined || table[position].key !== key) {
                    index++;
                }
                if(table[index].key === key) {
                    table[index] = undefined
                    return true;
                }
            }
        }
        return false
    }
}