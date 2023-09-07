function linkedList() {
  const list = {};
  let head = null;
  let tail = null;

  list.append = (value) => {
    const newNode = node();
    newNode.value = value;

    if (tail === null) {
      head = newNode;
      tail = newNode;
    }

    if (tail !== null) {
      tail.nextNode = newNode;
      tail = newNode;
    }
  };

  list.prepend = (value) => {
    const newNode = node();
    newNode.value = value;

    if (tail === null) {
      head = newNode;
      tail = newNode;
    }
    if (tail !== null) {
      newNode.nextNode = head;
      head = newNode;
    }
  };

  list.size = () => {
    let currentNode = head;
    let count = 0;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  };

  list.head = () => head;

  list.tail = () => tail;

  list.at = (index) => {
    let i = 0;
    let currentNode = head;

    while (i < index) {
      i++;
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  };

  list.pop = () => {
    let currentNode = head;
    let lastNode = null;

    while (currentNode !== tail) {
      lastNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    tail = lastNode;
    tail.nextNode = null;
    return;
  };

  list.contains = (value, currentNode) => {
    if (currentNode === undefined) currentNode = head;
    if (currentNode.value === value) return true;
    if (currentNode === tail) return false;
    return list.contains(value, currentNode.nextNode);
  };

  list.find = (value) => {
    let currentNode = head;

    if (!list.contains(value)) {
      return null;
    }

    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }
  };

  list.toString = () => {
    let currentNode = head;
    let string = "";

    while (currentNode !== null) {
      string += "( " + currentNode.value + " ) -> ";
      currentNode = currentNode.nextNode;
    }
    string += "null";
    return string;
  };

  list.insertAt = (value, index) => {
    //change the pointer of new one to the old before ones pointer before changing the before ones to the new node
    const beforeNode = list.at(index - 1);
    const newNode = node();
    newNode.nextNode = beforeNode.nextNode;
    beforeNode.nextNode = newNode;
    newNode.value = value;
  };

  list.removeAt = (index) => {
    const afterNode = list.at(index + 1);

    if (index < 0 || index === null) return;
    if (index === 0) {
      head = afterNode;
      return;
    }

    const beforeNode = list.at(index - 1);
    beforeNode.nextNode = afterNode;
  };

  return list;
}

function node() {
  const node = {};

  node.value = null;
  node.nextNode = null;

  return node;
}

const tester = linkedList();

tester.append(12);
tester.append(15);
tester.append(19);
tester.prepend(20);

tester.insertAt(22, 3);
tester.removeAt(4);
console.log(tester.toString());
