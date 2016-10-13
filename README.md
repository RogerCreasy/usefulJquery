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


# back-to-top
    docs coming soon