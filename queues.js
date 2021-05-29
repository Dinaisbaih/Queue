// enqueue >> adding to the queue
// dequeue >> removing from queue
// peek >> first node in the queue
  
class Node{
    constructor(groupSize, next = null){
      this.groupSize = groupSize;
      this.next = next;
    }
  }
  
  class Queue{
      constructor(limit = 10, front = null, back = null ){
          this.limit = limit;
          this.front = front;
          this.back = back;
          this.size = 0;
      }

     isEmpty = () => this.size === 0;
  
     isFull = () => this.size === this.limit;
  
     peek = () => {
      if (this.isEmpty()) console.log("Empty queue");
      else return this.front;
    };
  

  
    enqueue = (data) => {
      if (this.isFull()) console.log("There's no place.");
      else {
        const newNode = new Node(data); 
        if (this.isEmpty()) {        
          this.front = newNode;
          this.back = newNode;
         
        } else {
          this.back.nextNode = newNode;
          this.back = newNode;
        
        }
        this.size++
      }
    };
  
    dequeue = () => {
      if (this.isEmpty()) {
        console.log("Nothing to remove.");
      } else {
        const removedNode = this.front;
        if (this.size === 1) {
          this.front = null;
          this.back = null;
        } else {
          this.front = removedNode.nextNode;
        }
       
        this.size--;
        return removedNode.data;
      }
    };

     waitingTime = () => {
       return this.size / 2
     }
    
  }
  
  const peopleGroups  = [10,2,13]
  const queue = new Queue();
  console.log(`Total waiting time before adding to the queue : ${queue.waitingTime} `)
  peopleGroups.map(group => {
    while(group > 12){
      queue.enqueue(12)
      group -= 12 
    } 
    queue.enqueue(group)
  })
  queue.dequeue()


  console.log( `Total waiting time for the queue is : ${queue.waitingTime()} ` )
