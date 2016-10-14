# useful Jquery

A collection of useful jquery snippets.

If you are interested in contributing, please submit a PR.

## Examples

[**Back To Top Button**](backToTop.js)  
This jQuery snippet allows you to scroll to the top of the page when clicking on the element with a class of `.backToTop`.  

*Usage:*  
```html
<head>
  <script src="./backToTop.js" type="text/javascript"></script>
</head>
<body>
	<div class="backToTop"></div>
</body>
```

[**Bootstrap Nav Highlight**](bootstrapNavHighlightActive.js)  
This jQuery snippet allows you to highlight the active element in a nav bar by using a `ul` with a class of `.nav`.  

*Usage:*  
```html
<head>
  <script src="./bootstrapNavHighlightActive.js" type="text/javascript"></script>
</head>
<body>
  <ul class="nav">
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</body>
```

[**Canvas to Blob**](canvas-to-blob.js)  
This jQuery snippet is a polyfill for the standard JavaScript canvas.toBlob method. It can be used to create Blob objects from an HTML canvas element..  

*Usage:*  
```html
<head>
  <script src="./canvas-to-blob.js" type="text/javascript"></script>
</head>
<body>
  <script type="text/javascript">
	var canvas = document.createElement('canvas');
	/* ... your canvas manipulations ... */
	if (canvas.toBlob) {
		canvas.toBlob(
			function (blob) {
				// Do something with the blob object,
				// e.g. creating a multipart form for file uploads:
				var formData = new FormData();
				formData.append('file', blob, fileName);
				/* ... */
			},
			'image/jpeg'
		);
	}
  </script>
</body>
```

[**Disable Links**](disableLinks.js)  
This jQuery snippet allows you to disable any links that have the `.disabled-link` class.  

*Usage:*  
```html
<head>
  <script src="./disableLinks.js" type="text/javascript"></script>
</head>
<body>
    <a href="disableLinks.js">Normal</a>
    <a href="disableLinks.js" class="disabled-link">Disabled</a>
</body>
```

[**New Window**](linksToNewWindow.js)  
This jQuery snippet allows you to force all external links to open in a new tab using `_blank` for the `target` attribute.  

*Usage:*  
```html
<head>
  <script src="./linksToNewWindow.js" type="text/javascript"></script>
</head>
<body>
    <a href="linksToNewWindow.js">This link will open in the same tab.</a>
    <a href="https://external-link.com/">This link will be forced to open in a new tab.</a>
</body>
```

[**Nodes Analyser**](nodesAnalyser.js)  
This jQuery snippet allows you to analyse some useful DOM information including the depth of the deepest node, the number of nodes on the page, and adds a shadow around all DOM Nodes.  

*Usage:*  
```html
<head>
  <script src="./nodesAnalyser.js" type="text/javascript"></script>
</head>
<body>
    <script type="text/javascript">
		walk($(document.body), 0);
	</script>
</body>
```

[**Smooth Scroll**](smoothScroll.js)  
This jQuery snippet allows you to scroll to any id on the page by clicking a nav item link with a selector of `.nav a`. The `a` tag must use a href pointing to an id (i.e. `<a href="#examples">Examples</a>`).  

*Usage:*  
```html
<head>
  <script src="./smoothScroll.js" type="text/javascript"></script>
</head>
<body>
  <ul>
    <li class="nav"><a href="#home">Home</a></li>
    <li class="nav"><a href="#about">About</a></li>
  </ul>
  <div id="Home"></div>
  <div id="About"></div>
</body>
```

[**Tooltip**](tooltip.js)  
This jQuery snippet allows you to add a fading tooltip to any element with the class `.element-with-tooltip`.  

*Usage:*  
```html
<head>
  <script src="./tooltip.js" type="text/javascript"></script>
</head>
<body>
  <span class="element-with-tooltip">Testing</span>
</body>
```

[**US State Select Populator**](stateDropdownPopulator.js)  
This jQuery snippet allows you to automatically fill a `select` element with dropdown items of US states.  Uses the 2-digit state code as the value, and displays the full state name as the displayed text.

*Usage:*  
```html
<head>
  <script src="./stateDropdownPopulator.js" type="text/javascript"></script>
</head>
<body>
	<select id="stateDropDown"></select>
</body>
```


#### Request for help
----------------
I would like to add a directory of the code snippets here in the readme. If you are willing to help, please submit a PR 
