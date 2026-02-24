1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: 
- getElementById select and return one element by id. 
- getElementsByClassName select and return all elements by class name. 
- querySelector select and return first element by css selector. 
- querySelectorAll select and return all elements by css selector.



2.  How do you create and insert a new element into the DOM?

Ans: 
Create element using "document.createElement()"
Add content using "innerHTML" or "textContent"
Append element using "appendChild()".
Example: 
const new = document.createElement("p");
new.textContent = "Shiam Sharif!";
document.body.appendChild(new);



3. What is Event Bubbling? And how does it work?

Ans:
when an event starts from the target element and then “bubbles up” to its parent elements.
Example: 
<div id="parent">
  <button id="child">Click Me</button>
</div>

const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener("click", function() {
  console.log("Parent clicked");
});

child.addEventListener("click", function() {
  console.log("Button clicked");
});



4. What is Event Delegation in JavaScript? Why is it useful?

Ans:
Event delegation is a technique in JavaScript that allows you to handle events on multiple elements by attaching a single event listener to a parent element.



5.  What is the difference between preventDefault() and stopPropagation() methods?

Ans:
preventDefault() stops the default behavior of an event.
stopPropagation() stops the event from bubbling up to its parent elements.


