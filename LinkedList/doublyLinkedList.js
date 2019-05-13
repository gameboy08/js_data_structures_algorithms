function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    let length = 0;
    let head = null;
    let tail = null;

    this.insert = function(position, element) {
        //check boundary
        if(position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous;
            if (position === 0) { //insert at the beginning.
                if (!head) { // linked list is empty
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) { // insert at the end
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                let index = 0;
                // while (index < length) {
                //     if (index === position) {
                //         break;
                //     } else {
                //         current = current.next;
                //         index++;
                //     }
                // }
                // previous = current.prev;
                while(index++ < position) { //stop when current index equals to position
                    previous = current;
                    current = current.next
                }
                node.next = current;
                node.prev = previous;
                previous.next = node;
                current.prev = node;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function(position) {
        if (position >= 0 && position < length) {
            let current = head;
            let index = 0
            let previous;
            if (position === 0) {
                head = current.next;
                if(length === 1) {
                    tail = null
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {
                current = tail
                tail = current.prev
                tail.next = null;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    } 
}