class LinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  preppend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  append(value){
    const node = new Node(value, null);
    if (this.tail) {
      this.tail.next = node;      
    }
    this.tail = node;

    if (!this.head) {
      this.head = node;
    }
  }

  find (value) {
    if(this.head){
      let currNode = this.head;
      while(currNode.next && currNode.data !== value) {
        currNode = currNode.next;
      }
      if (currNode.data === value) {
        return currNode;
      }
    }

    return null;
  }

  delete (value) {
    if(!this.head) return;
    

    while(this.head && this.head.data ===value) {
      this.head = this.head.next;
    }

    let currNode = this.head;

    while (currNode.next) {
      if(currNode.next.data === value) {
        currNode.next = currNode.next.next;    
      } else {
        currNode = currNode.next;

      }
    }

    if(this.tail.data === value) {
      this.tail === currNode;
    }
    

  }

  insertAfter(find, value) {
    const node = this.find(find);

    if (node) {
      const newNode = new Node(value, node.next);
      node.next = newNode;

    }
  }

  toArray() {
    const result = [];
    let currNode = this.head;

    while (currNode) {
      result.push(currNode.data);
      currNode = currNode.next;
    }

    return result;
  }
}


class Node {
  constructor (data, next) {
    this.data = data;
    this.next = next;
  }
  next() {
    return this.node;
  }
}



const linked = new LinkedList();

linked.append(5);
linked.append(2);
linked.append(4);
console.log(linked.toArray());
linked.preppend(7);
linked.delete(2);

console.log(linked.toArray());
linked.insertAfter(4, 666)
console.log(linked.toArray());

