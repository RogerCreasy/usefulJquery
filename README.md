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

#### Request for help
----------------
I would like to add a directory of the code snippets here in the readme. If you are willing to help, please submit a PR 
