
let cTree = require('./cTree.js');
let BTree = require('./BinaryTree.js');

let tree = new cTree("#ctree");
tree.init({
    height:'400px',
    width:'300px',
    treeData:[
        {id:'p001',pId:"p000",name:"xxx集团",children:[
            {id:'c001',pId:"p001",name:"财务部",children:[
                {id:'c101',pId:"c001",name:"对外财务组"}
            ]},
            {id:'r001',pId:"p001",name:"人事部"}
        ]}
    ],
    itemClick:function(e){
        console.log("click the item",e);
    },
    itemDblClick:function(e){
        console.log("itemDblClick the item:",e);
    }
});

let btree = new BTree();
btree.drawTree(3);
btree.drawTree(2);
btree.drawTree(6);
btree.drawTree(7);
btree.drawTree(1);
btree.drawTree(4);
btree.printTree();