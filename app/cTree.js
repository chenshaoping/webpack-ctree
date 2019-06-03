module.exports = function(_treeId){
    let tree;
    let config = {
        width:'200px',
        height:'300px',
        treeData:[],
        treeDataAjax:function(url){},
        itemClick:function(e){},
        itemDblClick:function(e){}
    }
    function createDom(){
        tree = document.createElement("div");
        // tree.setAttribute("id",_treeId);
        tree.setAttribute("style",`
            height:${config.height};
            width:${config.width};
            border:1px red solid;
        `);
        drawTree(tree);
        document.querySelector(_treeId).appendChild(tree);
    }

    let ztreeNode = {
        id:"",
        pId:"",
        name:"",
        children:[]
    }

    function drawTree(tree){
        let p = document.createElement("ul");
        p.className = "cTree";
        drawTreeNode(config.treeData,p)
        tree.appendChild(p);
    }
    function drawTreeNode(json,node){
        for(let item of json){
            let c = document.createElement("li");
            c.setAttribute("style","cursor: pointer")
            for(let por in item ){
                c.setAttribute(por,item[por])
            }
            let check = document.createElement("input");
            check.setAttribute("type","checkbox");
            let checkStyle = "vertical-align:top;";
            if(item.children && item.children.length>0){
                let add = document.createElement("span");
                add.setAttribute("style","cursor: pointer")
                add.textContent = "+"
                add.addEventListener("click",function(){
                    expandNode(item,c,this);
                })
                c.appendChild(add);
            }else{
                checkStyle += "margin-left:15px";
            }
            
            check.setAttribute("style",checkStyle);
            c.appendChild(check);

            let nameDiv = document.createElement("div");
            nameDiv.setAttribute("style","display:inline-block;vertical-align:top;");
            nameDiv.textContent = item.name;
            let count = 0;
            nameDiv.addEventListener("click",function($event){
                count++
                expandNode(item,c,this);
                setTimeout(()=>{
                    if(count==1){
                        console.log("click event",$event)
                        config.itemClick(item);
                    }
                    count=0;
                },300)
            })
            nameDiv.addEventListener("dblclick",function($event){
                console.log("dblclick event",$event)
                config.itemDblClick(item);
            })
            c.appendChild(nameDiv);

            node.appendChild(c);
        }
    }
    function expandNode(item,node,add){
        console.log("expand the node",item,add);
        let expand = node.getAttribute("expanded");
        if(!expand){
            node.setAttribute("expanded","true");
            let p = document.createElement("ul");
            drawTreeNode(item.children,p);
            node.appendChild(p);
            node.firstChild.textContent = "-";
        }else{
            console.log("expand or close node",expand);
           
            if(expand==true || expand == "true"){
                node.firstChild.textContent = "+";
                node.lastChild.className = "closed";
                node.setAttribute("expanded","false");
            }else{
                node.firstChild.textContent = "-";
                node.lastChild.className = "opened";
                node.setAttribute("expanded","true");
            }
        }
    }
    this.getInstance = function(){
        return tree;
    }
    this.init = function(_config){
        config.height = _config.height;
        config.width = _config.width;
        config.treeData = _config.treeData;
        config.itemClick = _config.itemClick;
        config.itemDblClick = _config.itemDblClick;
        createDom();
    }
}