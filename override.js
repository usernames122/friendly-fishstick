// Get a reference to the <body> element
var body = document.body;

// Remove all child elements except <script> elements
var childNodes = body.childNodes;
for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];
    if (node.tagName !== 'SCRIPT') {
        body.removeChild(node);
    }
}
var body = document.head;

// Remove all child elements except <script> elements
var childNodes = body.childNodes;
for (var i = childNodes.length - 1; i >= 0; i--) {
    var node = childNodes[i];
    if (node.tagName !== 'SCRIPT') {
        body.removeChild(node);
    }
}

// Create and append your own HTML content
var newDiv = document.createElement('div');
newDiv.innerHTML = '<p>This is your custom HTML content.</p>';
body.appendChild(newDiv);
