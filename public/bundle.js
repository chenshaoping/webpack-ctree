/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/BinaryTree.js":
/*!***************************!*\
  !*** ./app/BinaryTree.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Node {\r\n    constructor(data,leftChild,rightChild){\r\n        this.data = data;\r\n        this.leftChild = leftChild;\r\n        this.rightChild = rightChild;\r\n    }\r\n\r\n    displayNode(){\r\n        // console.log(\"{\"+this.iData+\",\"+this.dData+\"}\");\r\n    }\r\n}\r\n\r\nclass BinaryTree{\r\n    constructor(){\r\n        this.root = null;\r\n    }\r\n    printTree(){\r\n        console.log(\"binary tree \",this.root);\r\n    }\r\n\r\n    insert(data){\r\n        let n = new Node(data,null,null);\r\n        if(this.root==null){\r\n            this.root = n;\r\n        }else{\r\n            let current = this.root;\r\n            let parent ;\r\n            while(current){\r\n                parent = current;\r\n                if(data<current.data){\r\n                    current = current.leftChild;\r\n                    if(current == null){\r\n                        parent.leftChild = n;\r\n                        break;\r\n                    }\r\n                }else{\r\n                    current = current.rightChild;\r\n                    if(current == null){\r\n                        parent.rightChild = n;\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = function(){\r\n    let tree = new BinaryTree();\r\n    this.drawTree = function(data){\r\n        tree.insert(data);\r\n    }\r\n    this.printTree = function(){\r\n        tree.printTree();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/BinaryTree.js?");

/***/ }),

/***/ "./app/cTree.js":
/*!**********************!*\
  !*** ./app/cTree.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(_treeId){\r\n    let tree;\r\n    let config = {\r\n        width:'200px',\r\n        height:'300px',\r\n        treeData:[],\r\n        treeDataAjax:function(url){},\r\n        itemClick:function(e){},\r\n        itemDblClick:function(e){}\r\n    }\r\n    function createDom(){\r\n        tree = document.createElement(\"div\");\r\n        // tree.setAttribute(\"id\",_treeId);\r\n        tree.setAttribute(\"style\",`\r\n            height:${config.height};\r\n            width:${config.width};\r\n            border:1px red solid;\r\n        `);\r\n        drawTree(tree);\r\n        document.querySelector(_treeId).appendChild(tree);\r\n    }\r\n\r\n    let ztreeNode = {\r\n        id:\"\",\r\n        pId:\"\",\r\n        name:\"\",\r\n        children:[]\r\n    }\r\n\r\n    function drawTree(tree){\r\n        let p = document.createElement(\"ul\");\r\n        p.className = \"cTree\";\r\n        drawTreeNode(config.treeData,p)\r\n        tree.appendChild(p);\r\n    }\r\n    function drawTreeNode(json,node){\r\n        for(let item of json){\r\n            let c = document.createElement(\"li\");\r\n            c.setAttribute(\"style\",\"cursor: pointer\")\r\n            for(let por in item ){\r\n                c.setAttribute(por,item[por])\r\n            }\r\n            let check = document.createElement(\"input\");\r\n            check.setAttribute(\"type\",\"checkbox\");\r\n            let checkStyle = \"vertical-align:top;\";\r\n            if(item.children && item.children.length>0){\r\n                let add = document.createElement(\"span\");\r\n                add.setAttribute(\"style\",\"cursor: pointer\")\r\n                add.textContent = \"+\"\r\n                add.addEventListener(\"click\",function(){\r\n                    expandNode(item,c,this);\r\n                })\r\n                c.appendChild(add);\r\n            }else{\r\n                checkStyle += \"margin-left:15px\";\r\n            }\r\n            \r\n            check.setAttribute(\"style\",checkStyle);\r\n            c.appendChild(check);\r\n\r\n            let nameDiv = document.createElement(\"div\");\r\n            nameDiv.setAttribute(\"style\",\"display:inline-block;vertical-align:top;\");\r\n            nameDiv.textContent = item.name;\r\n            let count = 0;\r\n            nameDiv.addEventListener(\"click\",function($event){\r\n                count++\r\n                expandNode(item,c,this);\r\n                setTimeout(()=>{\r\n                    if(count==1){\r\n                        console.log(\"click event\",$event)\r\n                        config.itemClick(item);\r\n                    }\r\n                    count=0;\r\n                },300)\r\n            })\r\n            nameDiv.addEventListener(\"dblclick\",function($event){\r\n                console.log(\"dblclick event\",$event)\r\n                config.itemDblClick(item);\r\n            })\r\n            c.appendChild(nameDiv);\r\n\r\n            node.appendChild(c);\r\n        }\r\n    }\r\n    function expandNode(item,node,add){\r\n        console.log(\"expand the node\",item,add);\r\n        let expand = node.getAttribute(\"expanded\");\r\n        if(!expand){\r\n            node.setAttribute(\"expanded\",\"true\");\r\n            let p = document.createElement(\"ul\");\r\n            drawTreeNode(item.children,p);\r\n            node.appendChild(p);\r\n            node.firstChild.textContent = \"-\";\r\n        }else{\r\n            console.log(\"expand or close node\",expand);\r\n           \r\n            if(expand==true || expand == \"true\"){\r\n                node.firstChild.textContent = \"+\";\r\n                node.lastChild.className = \"closed\";\r\n                node.setAttribute(\"expanded\",\"false\");\r\n            }else{\r\n                node.firstChild.textContent = \"-\";\r\n                node.lastChild.className = \"opened\";\r\n                node.setAttribute(\"expanded\",\"true\");\r\n            }\r\n        }\r\n    }\r\n    this.getInstance = function(){\r\n        return tree;\r\n    }\r\n    this.init = function(_config){\r\n        config.height = _config.height;\r\n        config.width = _config.width;\r\n        config.treeData = _config.treeData;\r\n        config.itemClick = _config.itemClick;\r\n        config.itemDblClick = _config.itemDblClick;\r\n        createDom();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./app/cTree.js?");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nlet cTree = __webpack_require__(/*! ./cTree.js */ \"./app/cTree.js\");\r\nlet BTree = __webpack_require__(/*! ./BinaryTree.js */ \"./app/BinaryTree.js\");\r\n\r\nlet tree = new cTree(\"#ctree\");\r\ntree.init({\r\n    height:'400px',\r\n    width:'300px',\r\n    treeData:[\r\n        {id:'p001',pId:\"p000\",name:\"xxx集团\",children:[\r\n            {id:'c001',pId:\"p001\",name:\"财务部\",children:[\r\n                {id:'c101',pId:\"c001\",name:\"对外财务组\"}\r\n            ]},\r\n            {id:'r001',pId:\"p001\",name:\"人事部\"}\r\n        ]}\r\n    ],\r\n    itemClick:function(e){\r\n        console.log(\"click the item\",e);\r\n    },\r\n    itemDblClick:function(e){\r\n        console.log(\"itemDblClick the item:\",e);\r\n    }\r\n});\r\n\r\nlet btree = new BTree();\r\nbtree.drawTree(3);\r\nbtree.drawTree(2);\r\nbtree.drawTree(6);\r\nbtree.drawTree(7);\r\nbtree.drawTree(1);\r\nbtree.drawTree(4);\r\nbtree.printTree();\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ })

/******/ });