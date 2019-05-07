function LinkedList() {

    function Node(element) {
        this.element = element;
        this.next = null;
    }
    let head = null;
    let length = 0;

    this.append = function (element) {
        let new_node = new Node(element),
            current;
        if (head === null) {
            head = new_node;        
        } else {
            current = head;
            while(current.next) {
                current = current.next
            }
            current.next = new_node;
        }
        length++;
    }
    
    this.insert = function(position, element){

        if (position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let index = 0;
            let previous = null;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    /**
     * 1. if remove the first position, head points to next element
     * 2. otherwise, iterate and find the last three elements, pre, current, current.next; make pre.next point to current.next;
     */
    this.removeAt = function(position){
        let current = head,
            previous,
            index = 0;
        
        if (position > -1 && position < length) {
            
            if (position === 0) {
                head = current.next;
            } else {
                //for (index = 0; index < position; index++)
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }

            length--;
            return current.element;
        } else {
            return null;
        }

        
    };
    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.indexOf = function(element){
        let current = head;
        let index = 0;
        while(current) {
            if(current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function() {
        return length === 0;
    };
    this.size = function() {
        return length;
    };
    this.getHead = function(){
        return head;
    };
    this.toString = function(){
        let current = head;
        let string = '';
        while(current) {
            string += current.element +(current.next ? 'n' : '');
            current = current.next
        }
        return string;
    };
    this.print = function(){};
}


let list = new LinkedList();
list.append(15);
list.append(10);
list.append(1);
console.log(list.size());
list.insert(3,16)
console.log(list.toString());
// console.log(list.indexOf(10));
// console.log(list.remove(16));
// console.log(list.getHead());