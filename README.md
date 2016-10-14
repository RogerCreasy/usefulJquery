# useful Jquery

A collection of useful jquery snippets.

If you are interested in contributing, please submit a PR.


## Table of Contents
- [Useful Jquery](#useful)
    - [swap-img-to-svg](#swap-img-to-svg)
    - [backToTopJs](#back-to-top)
    - [bootStrapNavHighlightActive](#boot-strap-nav-highlight-active)
    - [canvas-to-blob](#canvas-to-blob)
    - [disableLinks](#disable-links)
    - [linksToNewWindow](#links-to-new-window)
    - [nodesAnalyser](#nodes-analyser)
    - [smoothScroll](#smooth-scroll)
    - [stateDropdownPopulator](#state-dropdown-populator)


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

[**Easy Toggle Checkboxes**](easyToggleCheckboxes.js)  
Allows you to easily toggle checkboxes using 2 classes. *[Example JSFiddle](https://jsfiddle.net/PXgamer/ngL66hjm/)*  

`.checkAll` is used for the toggle. This can be a `button` or an `a` element.  
`.all-checkable` is used for the checkboxes that can be toggled by it.  

*Usage:*  
```html
<head>
  <script src="./easyToggleCheckboxes.js" type="text/javascript"></script>
</head>
<body>
    <ul class="no-dot">
      <li>
        <label for="known">
          <input id="known" class="all-checkable" type="checkbox" name="checked[]" /> Known</label>
      </li>
      <li>
        <label for="unsure">
          <input id="unsure" class="all-checkable" type="checkbox" name="checked[]" /> Unsure</label>
      </li>
      <li>
        <label for="unknown">
          <input id="unknown" class="all-checkable" type="checkbox" name="checked[]" /> Unknown</label>
      </li>
    </ul>
    <button type="button" class="checkAll">Check All</button>
    <script type="text/javascript">
    var none_checked = true;
    $('.checkAll').click(function() {
      if (none_checked) {
        $('input.all-checkable').prop('checked', 'checked');
        none_checked = false;
      } else {
        $('input.all-checkable').prop('checked', false);
        none_checked = true;
      }
    });
    </script>
</body>
```

[**Fluent Node Creation**](fluentNodeCreation.js)  
This jQuery snippet allows you to easily create DOM nodes by passing parameters to the jQuery-call.
The snippet below will create a in-memory node, it's HTML will be `<div id="divID" class="class-1 class-2" foo="bar"></div>`.

*Usage:*
```javascript
$("<div/>", {
  id: "divID",
  class: "class-1 class-2",
  foo: "bar"
});
```

Because of jQuery's fluent pattern you can call every jQuery method on that node like this:
```javascript
$("<p/>", {
  id: "testP",
  text: "Click me to change colour"
}).on("click", function() {
  $(this).css("color", "#" + Math.random().toString(16).slice(2, 8));
});
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

[**Micro Side Bar**](microSideBar.js)  
This jQuery snippet allows you to quickly create a micro side bar with 2 different classes. `.sidebarToggle` for the toggle bar, and `.sidebar` for the sidebar area.  
https://jsfiddle.net/PXgamer/te3hqgm5/  

*Usage:*  
```html
<head>
  <script src="./microSideBar.js" type="text/javascript"></script>
</head>
<body>
	<div class="ui sidebar">
	  <div class="pull-left" style="display: inline-block; min-width: 183px; min-height: 165px; height: 100%;">
		<strong class="list-group-item">Required Links</strong>
		<a href="https://github.com/PXgamer" class="list-group-item" target="_blank">GitHub</a>
		<a href="https://code.jquery.com" class="list-group-item" target="_blank">jQuery</a>
		<a href="https://getbootstrap.com/getting-started/" class="list-group-item" target="_blank">Bootstrap</a>
	  </div>
	  <div class="pull-right" style="display: inline-block; margin-left: 2px;">
		<a class="btn btn-xs btn-default sidebarToggle" style="min-height: 165px;"><span class="glyphicon glyphicon-chevron-right"></span></a>
	  </div>
	</div>
	<div>
		<!-- Other Content -->
	</div>
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
  <span class="element-with-tooltip" data-tooltip="TEST TIP">Testing</span>
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
[**Swap img tags with inline svg**](swap-image-to-svg.js)
## swap-img-to-svg
### Docs
 Jquery plugin to Swap Images with svg src with inline svg Elements.
 
### The Problem.
 
 If you've ever used svg icons, you would have added it as an source, like so.
 
 ```
 <img src="circle.svg" />
 ```
 
 this takes away all the editability of the svg. you cannot use css selectors, etc.
 
### The solution

the plugin swaps this

 ```
 <img class="swap-svg" id="myid" src="circle.svg" />
 ```
 
 ```
 <svg class="swap-svg" id="myid" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="330px" height="400px" viewBox="0 0 330 400">
......
</svg>
```
now you can use your css selector to change colors, etc.

#### Usage.

1. Add the scripts.

```
<script src="bower_components/jquery/dist/jquery.min.js" charset="utf-8"></script>
<script src="swap-svg.js" charset="utf-8"></script>

```
2. Add a class to the images you wanna swap

```
<img class="swap-svg" id="myid" src="circle.svg" />
<swap class="swap-svg" src="BatmanHat.svg"></swap>
```
yes, it works on any tag as long as it as a src attribute with svg file source.

3. initiate the plugin.

```
$('img.swap-svg').swapSvg();
```
its important that you select a image tag with a class of swap-svg


[**Check IE Version**](checkIEVersion.js)
This jQuery snippet allows you to check the version of IE the user is running. It returns a Number as the version of IE.

*Usage:*  
```html
<head>
  <script src="./checkIEVersion.js" type="text/javascript"></script>
</head>
<body>
  <script type="text/javascript">
		var IEVersion = checkIEVersion();
    if (IEVersion) {
      alert("You are running Internet Explorer version: " + IEVersion);
    }
	</script>
</body>
```



#### Request for help
----------------
I would like to add a directory of the code snippets here in the readme. If you are willing to help, please submit a PR 
