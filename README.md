# 🟦 Module 07 — DOM Manipulation  
## Lesson 15: Manipulating Styles and Classes

This lesson focuses on controlling visual state in the DOM using **class manipulation** and (when necessary) **inline styles**.

You implemented:
- Toggle highlight on click
- Single active item behavior
- Single active with toggle-off logic
- Event delegation for class-based UI state

---

## Learning Goals

By the end of Lesson 15, you should be able to:

- Explain the difference between **class-based styling** and **inline styles**
- Use `classList.add()`, `remove()`, `toggle()`, and `contains()`
- Implement "single active" UI patterns
- Use event delegation for scalable UI state handling
- Understand when to hide, remove, or restyle elements

---

## Core Concepts

### 1️⃣ Classes vs Inline Styles

**Use classes for UI states**
- selected / active
- hidden / visible
- error / success
- highlighted items

Example:
```js
element.classList.add("highlight");
```

**Use inline styles for dynamic values**
- width based on progress
- position based on mouse
- dynamic color values

Example:
```js
element.style.backgroundColor = "red";
```

Rule of thumb:
> If it describes a state, it should be a class.

---

## Utility Classes Used

Add these to `style.css`:

```css
.is-hidden { display: none; }

.is-active { outline: 2px solid #007bff; outline-offset: 2px; }

.highlight { background: #fff3cd; font-weight: 600; }

.danger { border: 2px solid #b00020; background: #ffe8e8; }
```

---

## Task A — Toggle Highlight

Click a task to toggle `.highlight`:

```js
const ul = document.querySelector("#section3 .tasks");

ul.addEventListener("click", (e) => {
  const task = e.target.closest("li.task");
  if (!task) return;

  task.classList.toggle("highlight");
});
```

---

## Task B — Single Active Item

Only one task can be highlighted at a time:

```js
ul.addEventListener("click", (e) => {
  const task = e.target.closest("li.task");
  if (!task) return;

  ul.querySelectorAll("li.task")
    .forEach(li => li.classList.remove("highlight"));

  task.classList.add("highlight");
});
```

---

## Task C — Single Active With Toggle-Off

Clicking the active task removes highlight completely:

```js
ul.addEventListener("click", (e) => {
  const clicked = e.target.closest("li.task");
  if (!clicked) return;

  const wasActive = clicked.classList.contains("highlight");

  ul.querySelectorAll("li.task")
    .forEach(li => li.classList.remove("highlight"));

  if (!wasActive) {
    clicked.classList.add("highlight");
  }
});
```

---

## Key Patterns Learned

### Clear → Apply Pattern
1. Capture previous state  
2. Clear all items  
3. Apply state conditionally  

### Event Delegation Pattern
Attach one listener to a parent instead of many listeners to children.

---

## Common Mistakes

- Using `querySelector()` and trying to index it
- Calling `.remove()` on a NodeList
- Using `".class"` instead of `"class"` in `classList` methods
- Overwriting all classes using `className = ...`

---

## Reflection Questions

1. Why is `classList` safer than `className`?
2. Why must we clear all active classes before setting one?
3. Why do we capture `wasActive` before clearing?
4. When should you use inline styles instead of classes?

---

## Exit Ticket

- What does `classList.toggle()` return?
- What happens if you call `classList.add()` twice?
- Why does event delegation work for dynamically added elements?

---

## License

© 2021–2026 EOUSdigital  
Source-available (not OSI open source). Personal, educational, and non-commercial research use only. See `LICENSE` for full terms.
