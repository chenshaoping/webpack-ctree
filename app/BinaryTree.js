class Node {
    constructor(data,leftChild,rightChild){
        this.data = data;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    displayNode(){
        // console.log("{"+this.iData+","+this.dData+"}");
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
    printTree(){
        console.log("binary tree ",this.root);
    }

    insert(data){
        let n = new Node(data,null,null);
        if(this.root==null){
            this.root = n;
        }else{
            let current = this.root;
            let parent ;
            while(current){
                parent = current;
                if(data<current.data){
                    current = current.leftChild;
                    if(current == null){
                        parent.leftChild = n;
                        break;
                    }
                }else{
                    current = current.rightChild;
                    if(current == null){
                        parent.rightChild = n;
                        break;
                    }
                }
            }
        }
    }
}

module.exports = function(){
    let tree = new BinaryTree();
    this.drawTree = function(data){
        tree.insert(data);
    }
    this.printTree = function(){
        tree.printTree();
    }
}