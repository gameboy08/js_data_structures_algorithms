
function HashTable() {
    let table = [];
    let loseloseHashCode = function(key) {
        let hash = null;
        for(let i = 0; i < key.length; i++ ) {
            hash += key.charCodeAt(i);
        }
        return hash%37;
    }
    this.put = function(key, value) {
        let position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    }
    this.get = function(key) {
        return table[loseloseHashCode(key)];
    }
    this.remove = function(key) {
        table[loseloseHashCode(key)] = undefined;
    }
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));
