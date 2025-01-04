//linked list

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        else{
            let current=this.head
            let listvalue=""
            while(current){
                listvalue+=`${current.value} `
                current=current.next
            }
            console.log(listvalue)
        }
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }
        else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
        }
        this.size++
    }

    insert(value,index){
       if(index<0||index>this.size){
            return null
       }
       if(index===0){
        return this.prepend(value)
       }
       else{
        const node=new Node(value)
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        node.next=prev.next
        prev.next=node
       }
       this.size++
    }

    remove(index){
        if(index<0||index>this.size){
            return null
        }
        let removedNode
        if(index===0){
        this.head=this.head.next
        }
    else{
        let current=this.head
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        removedNode=current.next
        current.next=removedNode.next
    }
    this.size++
    }

    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            return value
        }
        else{
            let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
            const removedNode=prev.next
            prev.next=removedNode.next
            this.size--
            return value
            }
            return null
        }
    }

    search(value){
        if(this.isEmpty()){
            return null
        }
        else{
            let prev=this.head
            let i=0
            while(prev){
                if(prev.value===value){
                    return i
                }
                prev=prev.next
                i++
            }
        }
        return null
    }

    reverse(){
        let prev=null
        let curr=this.head
        let next
        while(curr){
            next=curr.next
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }

}

const list=new linkedList()

list.insert(10,0)
list.insert(20,0)
list.insert(30,1)
list.print()

list.reverse()
list.print()



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