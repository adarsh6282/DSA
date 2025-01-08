//linked list

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     print(){
//         if(this.size==0){
//             return null
//         }else{
//         let curr=this.head
//         let List=""
//         while(curr){
//             List+=`${curr.value} `
//             curr=curr.next
//         }
//         console.log(List)
//     }

//     }

//     prepend(value){
//         const node=new Node(value)
//         if(this.size==0){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }

//     append(value){
//         const node=new Node(value)
//         if(this.size==0){
//             this.head=node
//         }
//         else{
//             let curr=this.head
//             while(curr.next!=null){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//         this.size++
//     }

//     insert(index,value){
//         if(index<0||index>this.size){
//             return null
//         }
//         if(index===0){
//             this.prepend(value)
//         }
//         else{
//             const node=new Node(value)
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }

//     remove(index){
//         if(index<0||index>this.size){
//             return null
//         }
//         let removedNode
//         if(index==0){
//             this.head=this.head.next
//         }
//         else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev.prev.next
//             }
//             removedNode=prev.next
//             prev.next=removedNode.next
//         }
//         this.size--
//     }

//     search(value){
//         if(this.size==0){
//             return null
//         }
//         else{
//             let curr=this.head
//             let i=0
//             while(curr){
//                 if(curr.value==value){
//                     return i
//                 }
//                 curr=curr.next
//                     i++
//             }
//         }
//         return null
//     }

//     removeValue(value){
//         if(this.size==0){
//             return null
//         }
//         else{
//             let prev=this.head
//             while(prev.next&&prev.next.value!==value){
//                 prev=prev.next
//             }
//             if(prev.next){
//                 const removedNode=prev.next
//                 prev.next=removedNode.next
//             }
//         }
//         return null
//     }

//     reverse()
//     {
//         let prev=null
//         let curr=this.head
//         let next
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
// }

// const list=new linkedlist()

// list.append(20)
// list.prepend(10)
// list.append(30)
// list.reverse()
// list.print()




//fibonacci 

// function fibonacci(arr){
//     let fib=[0,1]
//     for(let i=2;i<arr;i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }

// console.log(fibonacci(5))


//factorial


// function fact(n){
//     let sum=1
//     for(let i=1;i<=n;i++)
//     {
//         sum*=i
//     }
//     return sum
// }

// console.log(fact(5))


// function sum(a,b){
//     let sum=0
//     sum=a+b
//     return sum
// }
// console.log(sum(10,20))


// function fibonacci(n){
//     let fib=[0,1]
//     for(let i=2;i<n;i++)
//     {
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(5))


//linear search

// function search(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(target===arr[i]){
//             return i
//         }
//     }
//     return -1
// }
// let arr=[2,4,3,7,9,5,6,0]
// console.log(search(arr,1))


function fibonacci(n){
    let fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}

console.log(fibonacci(6))