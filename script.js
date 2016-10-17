class Node{
	constructor(nodeParent, nodeChildren, nodeData){
		this.parent = nodeParent;
		this.children = nodeChildren || [];
		this.data = nodeData;
	}
	
	addNode(data){
		
		var node = new Node(this, null, data);
    	this.children.push(node);	
    	return node;
	}

	addNodes(data){

		for(let newNode of data){
			this.addNode(newNode);
		}	

		return this.children;
	}

	isRoot(){
		if(!this.parent){
			return true;
		}

		return false;
	}

	isLeaf(){
		if(!this.children || this.children.length == 0){
			return true;
		}

		return false;
	}

	depth(currentDepth = 0){

		if(this.isRoot()){
			return currentDepth;
		}

		return this.parent.depth(currentDepth + 1);
	}

	height(currentHeight = 0){

		if(this.isLeaf()){
			return currentHeight;
		}

		var childHeights = [];

		for(let child of this.children){
			childHeights.push(child.height(currentHeight + 1));
		}

		return Math.max(...childHeights);
	}
}

class Tree{
	constructor(rootData){
		this.root = new Node(null, null, rootData);
	}

	height(){
		return this.root.height();
	}
	
	getRoot(){
		console.log(this);
		return this.root;
	}
	
	prettyPrint(){
		console.log("START OF TREE \n");
		this.printChildren(this.root, 0);
		console.log("END OF TREE \n")
	}
	
	printChildren(node, depth){

		var output = "";

		for(var i = 0; i < depth; i++){
			output += "    ";
		}

		console.log(output + node.data);

		if(node.isLeaf()){
			return;
		}

		for(let child of node.children){
			this.printChildren(child, depth + 1);
		}
	}
}

var tree = new Tree(6);

tree.root.addNodes([3, 4, 2])
	[2].addNode(5);

tree.root.children[0].addNodes([9, 5])
	[0].addNodes([10, 11]);
	
console.log("height: " + tree.root.children[2].height());
console.log("height of tree: " + tree.height());

tree.prettyPrint();