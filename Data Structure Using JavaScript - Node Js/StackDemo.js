class Stack {
    constructor(){
        this.array=[];          // array object created..
    }
    // stack with 5 element 
    push(element){
        if(this.array.length<=4){
        this.array.push(element);       // need to write the code to add element
        console.log("Add push successfully")
        } else {
            console.log("stack overflow")
        }
    }
    pop() {             // it remove from stack ie top most element. 
        if(this.array.length==0){
            return "Stack is empty or Underflow";
        }else {
            return this.array.pop();           // remove top most element from array. 
        }
    }
    peek() {            // retrieve top most element from stack but not remove 
        if(this.array.length==0){
            console.log("Stack is empty or Underflow")
        }else {
                    return this.array[this.array.length-1];  // it give top most element   
        }
    }
    isEmpty() {
        if(this.array.length==0){
            return true;
        }else {
            return false;
        }
    }
    // print stack top to bottom 
    printStack() {
        for(let i = this.array.length-1;i>=0;i--){
            process.stdout.write(this.array[i]+"-")
        }
    }
}

let ss = new Stack();
console.log("empty "+ss.isEmpty())
console.log("Pop "+ss.pop())
ss.push(100);
ss.push(200);
ss.push(300);
ss.push(400);
ss.push(500);
ss.push(600);
console.log("Pop "+ss.pop());       // to remove top most element ie 500 
console.log("Pop "+ss.pop());       // to remove top most element ie 400
console.log("peek "+ss.peek())      // only display top most element 
console.log("empty "+ss.isEmpty())
ss.printStack();