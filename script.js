"use strict";

//TODO  🟦 Module 7 - DOM Manipulation: Lesson 15. Manipulating Styles and Classes


//? 1) Prefer classes over inline styles
//  • Classes are best for “states” (active, hidden, selected, error) because CSS stays in one place.
//  • Inline styles (el.style...) are best for values that change continuously (e.g., width based on a number, element position, dynamic colors from user input).

//? 2) The core APIs you will use

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










