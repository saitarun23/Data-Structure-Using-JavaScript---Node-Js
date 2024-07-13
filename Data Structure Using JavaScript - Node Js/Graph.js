// class Graph {

//        constructor(){
//         this.adjacencyList={}           // empty object literal objects.            
//        } 

//        addVertex(vertex){
//             if(!this.adjacencyList[vertex]){
//                 this.adjacencyList[vertex]=[];
//                 //console.log("Added information ")
//             }else {
//                 console.log("Already information present")
//             }
//        }
//        addEdge(vertex1,vertex2) {
//                 this.adjacencyList[vertex1].push(vertex2);
//                 this.adjacencyList[vertex2].push(vertex1);
//        }
// }

// let graph  = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");
// graph.addVertex("G");

// graph.addEdge("A","B");
// graph.addEdge("B","C");
// graph.addEdge("C","E");
// graph.addEdge("E","G");
// graph.addEdge("G","B");
// graph.addEdge("G","F");
// graph.addEdge("F","D");
// graph.addEdge("D","A");

// console.log(graph.adjacencyList)


// Another Example using Graph 

class Graph {

    constructor(){
     this.adjacencyList={}           // empty object literal objects.            
    } 
    
    addCity(cityName){
     //console.log(this.adjacencyList[cityName])
     if(!this.adjacencyList[cityName]){
         this.adjacencyList[cityName]=[]     // create the city 
         //console.log("City added..")
     }else {
         console.log('City already exists ');
     }
    }

    addConnection(city1,city2,distance){
         if(!this.adjacencyList[city1] || !this.adjacencyList[city2]){
             console.log("one or both cities not present in graph to connect to each others")
             return;
         }else {
             //console.log("ready to connect")
             this.adjacencyList[city1].push({"city":city2,"distance":distance});
             this.adjacencyList[city2].push({"city":city1,"distance":distance});
         }
    }

    printGraph() {
     console.log("City Connection Details")

         for(let city in this.adjacencyList){
             //console.log(city);
 let connection = this.adjacencyList[city].map(obj=>" Connected to "+obj.city+" with distance is "+obj.distance+" km");
             console.log(city+"->"+connection)
             console.log()
         }
    }
}
let graph = new Graph();
graph.addCity("Bangalore");
graph.addCity("Hyderabad");
graph.addCity("Delhi");
graph.addCity("Pune");
graph.addCity("Mumbai");

graph.addConnection("Bangalore","Hyderabad",700);
graph.addConnection("Bangalore","Mysore",160);
graph.addConnection("Bangalore","Pune",950);
graph.addConnection("Pune","Mumbai",250);
graph.addConnection("Mumbai","Delhi",1600);
graph.addConnection("Hyderabad","Delhi",1800);
graph.addConnection("Hyderabad","Pune",950);

//console.log(graph.adjacencyList)
graph.printGraph();