walk(document.body);

function walk(node) 
{
	// panicsteve stole this function from here:
	// http://is.gd/mwZp7E
  // and i stole it from him
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/audiophile(?!s)/g, "deluded tool with too much money");
	v = v.replace(/audiophiles/g, "deluded tools with too much money");
	v = v.replace(/Audiophile(?!s)/g, "Deluded tool with too much money");
	v = v.replace(/Audiophiles/g, "Deluded tools with too much money");
	
	textNode.nodeValue = v;
}


