let row = {front: null, rear: null};

class Node {
    constructor(data,next)
  {this.data = data;
  this.next = next;}
} 

function Entry(element) {
  var person = new Node(element, null);
  if (row.rear === null) {
    row.front = person;
    row.rear = person; 
  } else { 
      
    row.rear.next = person; 
    row.rear = row.rear.next;
    console.log('test');
  } 
} 

 

let size= prompt("enter the size:");


for (let i=0;i<size;i++){
Entry(prompt("enter the value:"));
console.log(row.rear);
}

console.log("the front element in the queue is :"+row.front);

console.log("the end element of the queue is :"+row.rear);