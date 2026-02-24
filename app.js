"use strict";

//TODO  🟦 Module 7 - DOM Manipulation: Lesson 15. Manipulating Styles and Classes

//# Task A (start here) — Click a task to toggle a class

const ul = document.querySelector("#section3 .tasks");
if (!ul) throw new Error("Cannot find #section3 .tasks");

ul.addEventListener("click", (e) => {
    const task = e.target.closest("li.task");
    if (!task) return;

    task.classList.toggle("highlight");
});
