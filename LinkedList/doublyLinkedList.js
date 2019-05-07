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
        if(position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head;
            let previous;
            let index = 0;
            if (position === 0) {
                if (!head) { //if linked list is empty
                    head = node;
                    tail = node;
                } else {
                        node.next = current;
                        current.prev = node;
                        head = node;
                    
                }
            } else if (position === length) { //last element
                current = tail;
                node.prev = current;
                current.next = node;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = node;
                current.prev = node;
                node.prev = previous;
                node.next = current;
            }
            length++;
            return true;
        } else {
            return false;
        }
    }
}