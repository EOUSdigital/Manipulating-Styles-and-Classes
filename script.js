"use strict";

//TITLE  🟦 Module 7 - DOM Manipulation: Lesson 15. Manipulating Styles and Classes


//# 1) Prefer classes over inline styles
//  • Classes are best for “states” (active, hidden, selected, error) because CSS stays in one place.
//  • Inline styles (el.style...) are best for values that change continuously (e.g., width based on a number, element position, dynamic colors from user input).

//# 2) The core APIs you will use

//* Class manipulation
//  • el.classList.add("x")
//  • el.classList.remove("x")
//  • el.classList.toggle("x")
//  • el.classList.contains("x")
//  • el.classList.replace("a", "b")
//! Avoid el.className = ... unless you intend to overwrite all classes.

//* Inline styles
//  • el.style.backgroundColor = "..." (camelCase)
//  • el.style.setProperty("--token", "value") (for CSS variables)
//  • el.style.removeProperty("background-color")

//* Computed styles (read-only)
//  • getComputedStyle(el).display (useful for debugging)


//TITLE  Documentation: Manipulating Styles and Classes

//? A. The mental model (what you are actually controlling)

//* There are three layers that determine how an element looks:
//  1. CSS rules (from stylesheets)
//  2. Inline styles (style="" or el.style...)
//  3. Browser default styles (User Agent Stylesheet) - A user-agent stylesheet (UA) is a set of default CSS rules that web browsers apply to HTML elements automatically, ensuring consistent visual rendering across different web pages. These pre-defined styles exist in every browser and help maintain uniformity for elements like headings, paragraphs, lists, and more, by applying basic styles like margins, padding, font sizes, and colors. 

//* Your JavaScript can influence appearance mainly by:
//  • Adding/removing classes (preferred for states)
//  • Setting/removing inline styles (preferred for dynamic values)
//  • Reading computed styles (what the browser ended up using)

//? B. Classes vs inline styles (when to use each)

//* Use classes for UI “states”

//* Examples:
//  • selected / active / expanded / collapsed
//  • error / warning / success
//  • hidden / shown
//  • dark mode / light mode

//* Why:
//  • Keeps styling in CSS (maintainable)
//  • Reusable across components
//  • Easy to test visually
//  • Easy to reason about (“this element is active”)

//* Use inline styles for “numbers that change”

//* Examples:
//  • set width based on progress (0–100)
//  • position a tooltip near the mouse
//  • animate using a JS-calculated value
//  • set a CSS variable value dynamically

//* Why:
//  Values are computed in JS, not static states

//* Rule of thumb:
//  If you can name it as a state word, it should be a class.

//? C. The DOM APIs you must know (and what they do)

//* 1) classList (primary tool)
//  • el.classList.add("highlight") → adds a class
//  • el.classList.remove("highlight") → removes a class
//  • el.classList.toggle("highlight") → adds if missing, removes if present
//  • el.classList.contains("highlight") → returns true/false
//  • el.classList.replace("old", "new") → swap one class for another

//! Why it matters: you avoid overwriting other classes accidentally.

//! Avoid for now: el.className = ...
//  It replaces the entire class attribute and often breaks layouts.

//! Reference MDN: classList

//* 2) Inline style via el.style
//  • el.style.backgroundColor = "red" (camelCase)
//  • el.style.border = "2px solid black"
//  • el.style.removeProperty("background-color")
//  • el.style.setProperty("--accent", "hotpink") (CSS variables)

//! Reference MDN: element inline style (HTMLElement.style)

//* 3) Computed styles (read-only truth)
//  • getComputedStyle(el).display
//  • getComputedStyle(el).color
//  Use this to debug “why is it not changing?”

//! Reference MDN: getComputedStyle

//? D. Common real-world patterns you should learn

//* Pattern 1 — Toggle a state (simple)
//  Click → toggle("highlight")

//* Pattern 2 — “Only one active” (menu selection)
//  When you click an item:
//  1. remove .is-active from all items
//  2. add .is-active to the clicked one

//* Pattern 3 — Hide/show
//  Use .is-hidden { display: none; } and toggle it.

//* Pattern 4 — Use data attributes + classes together
//  • data-state="open" for logic (optional)
//  • .is-open for styling
//  This scales in bigger apps.

//* Pattern 5 — Event delegation (so it works with dynamic DOM)
//  Attach one listener on a parent (ul, main, etc.), use closest() to find the target child.

//! MDN: Element.closest()

//? E. Where to learn this properly (documentation + book)

//* Official references (the ones you should bookmark)
//  • MDN: Element.classList
//  • MDN: HTMLElement.style
//  • MDN: window.getComputedStyle()
//  • MDN: Element.closest()

//* One strong structured tutorial section
//  • javascript.info: “Styles and classes” (practical, well-explained)

//* Book-style reference
//  • Eloquent JavaScript has DOM + event chapters that support this lesson’s skills.

//TITLE Real-world relevance

//* By the end of this lesson, you will be able to implement:
//  • selected item highlighting in lists/menus
//  • “active tab” UI
//  • hide/show panels
//  • inline style changes for dynamic UI values
//  • robust UI behaviors using delegation that survive DOM changes


//TITLE Primary lesson reference (best overview)

//  • javascript.info — Styles and classes (big-picture explanation + examples of className, classList, style.*, style.cssText, and getComputedStyle).

//? MDN core documentation (authoritative API references)

//* Classes
//  • Element.classList (what it is, why it's safer than className, and how "add/remove/toggle/contains/replace" work).
//  • DOMTokenList (the object type behind "classList", with method list and behavior notes).
//  • DOMTokenList.toggle() (precise toggle behavior + return value).
//  • DOMTokenList.replace() (swap one class for another safely).
//  • Element.className (string-based alternative; useful to know, risky if you overwrite classes).

//* Styles
//  • HTMLElement.style (inline style API; includes setProperty() / removeProperty() ).
//  • window.getComputedStyle() (read resolved styles; essential for debugging "Why did not my CSS apply?").

//* Event delegation helper (you will use this in Lesson 15 tasks)
//  • Element.closest() (critical for "click anywhere inside the item" patterns).

//? Recommended reading order for Lesson 15 (fast + effective)
//  1. javascript.info “Styles and classes”
//  2. classList + DOMTokenList (and skim toggle/replace)
//  3. HTMLElement.style (focus on setProperty/removeProperty)
//  4. getComputedStyle (debug tool)
//  5. closest() (for robust click targeting)


//# Task A (start here) — Click a task to toggle a class

//* Goal
//  When you click a task item in #section3 .tasks, toggle .highlight on that clicked <li>.

//* Constraints
//  • Use event delegation (one listener on the ul)
//  • Use classList.toggle("highlight")
//  • Do not attach listeners to each <li>

//* Tiny hint
//  Clicks may land on nested nodes later; closest("li.task") makes it robust.

//* Pseudocode
//  1. Select ul (#section3 .tasks)
//  2. Add click listener to the ul
//  3. Find the clicked task: e.target.closest("li.task")
//  4. If none, return
//  5. Toggle .highlight on that task


//# Task B (start here) — Click a task to toggle a class

//* Goal: Only one task can be highlighted at a time.

//* Constraints
//  • Still one listener on the ul
//  • When a task is clicked:
//      • remove .highlight from all tasks
//      • add .highlight to the clicked task
//        (Clicking the same task again should keep it highlighted—no toggling.)

//* Tiny hint
//  Inside the handler: select all li.task from the same ul and remove the class, then add it to the clicked one.

//* Pseudocode
//  1. Select ul (#section3 .tasks)
//  2. Add one click listener to ul
//  3. On click, find the clicked task: "task = e.target.closest("li.task")". If none, return.
//  4. From "ul", select all "li.task" and remove ".highlight" from each.
//  5. Add ".highlight" to "task".


//# Task C — “Single active, but clicking again turns it off”

//* Goal
//  • Clicking a task highlights it (only one can be active).
//  • Clicking the already highlighted task removes the highlight (so none are active).

//* Constrains

//  • Keep one click listener on the ul
//  • Use classList methods only
//  • Do not attach listeners to each <li>

//* Tiny hint
//  • Do the “clear all” step before you decide whether to re-add the class.

//* Pseudocode

//  1. Select ul ("#section3 .tasks")
//  2. On click, get clicked = e.target.closest("li.task")
//  3. If no clicked task, return
//  4. Check wasActive = clicked.classList.contains("highlight")
//  5. Remove .highlight from all tasks
//  6. If wasActive was false, add .highlight to clicked
//  7. If wasActive was true, add nothing (it stays off)