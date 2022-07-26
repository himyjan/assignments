
Responsive Layouts
https://teamtreehouse.com/library/responsive-layouts

Responsive Theory
Quiz Question 1 of 3

#Which of the following best defines responsive web design?

Responsive web design is a collection of techniques for building websites that work on multiple screen sizes.

#In general, what are the three parts of responsive web design?

In general, responsive design consists of fluid grids, fluid images, and media queries.

#Why is responsive web design preferred over traditional techniques?

Maintaining multiple versions of the same website is not a sustainable strategy.

#Which of the following is a relative unit in CSS?

em

#Please fill in the correct answer in each blank provided below

Elements that use percentages are relative to their_(parent)_container

#Prior to responsive design, why did most web designers use fixed units for the width of web pages and layouts?

Web design was initially influenced by print design, where the medium is a known size. Additionally, there weren't as many screen sizes as there are today.

#Instead of fixed units like pixels, what are the units of responsive design?

Relative units like percentages or ems

#In general, what is a breakpoint?

Generally, any media query that adjusts the layout based on a certain width could be called a breakpoint.

#What is the practical cost of creating new breakpoints?

Each breakpoint slightly increases the complexity of design and code.


#Why should breakpoints be used in combination with fluid grids?

In a mobile first approach, a single column layout won't look good when stretched across a large monitor. The layout "breaks" and must be adjusted.

#A breakpoint should be created based on the width of popular screen sizes.

False

---

Media Queries

#What are media queries?

Media queries are CSS rules that include CSS code only when certain conditions are met.

#What is a media feature?

A media feature is the expression or set of conditions inside a media query.

#Which of the following is NOT a media feature?
Hint: You should use the MDN documentation on media features to find the answer.

pixel

#Consider the following media query:
```
@media only screen and (min-width: 768px)
```
There are expressions before and after the boolean operator and. When will this media query be applied?

The media query will be applied only if both expressions are true.

---
Responsive Patterns

#In general, how many columns should be included in a portrait-mode mobile layout?

Most mobile layouts are a single column, because they lend themselves to scrolling.

#In computer programming, two common boolean operators are "and" and "or". Media queries use the keyword "and", but how could a media query represent an "or" if there's no keyword for it?

Media queries can express an "or" by using a comma to separate two different media queries. If any one of the expressions returns true, then the whole media query is true. Here is an example of this:
```
@media only screen and (min-width: 768px),
       only screen and (min-width: 700px) and (orientation: landscape)
```


#Why is it important to create breakpoints based on content rather than based on popular device screen sizes?

If breakpoints are based on popular screen sizes, then they will not be ready for devices that have not yet been released.

#Responsive web design can be used with any kind of backend (PHP, Ruby, WordPress, etc) because the principles remain the same.

True

#What is flexbox?

Flexbox is a collection of CSS properties for adjusting page layout based on different screen sizes.

#Consider the following media query:
```
@media only screen and (min-width: 768px)
```
Will this media query be applied if the width of the browser is 768 pixels across?

Yes. The min-width media feature is inclusive, so a browser width that is equal to the min-width will make the media query true.

#Which of the following are acceptable values for the media feature orientation?

landscape

---
Responsive Patterns

---
Mobile-First CSS Layout
https://teamtreehouse.com/library/css-flexbox-layout
https://teamtreehouse.com/community/quiz:1632

Add a wrapper <div> around the content inside <body>. Give it the class 'container'.
```
<!DOCTYPE html>
<html>
    <head>
        <title>Getting Started with CSS Layout</title>
        <link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="page.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="container">
            <header>
                <h1>Best City Guide</h1>
            </header>

            <div class="main">
                <h2>Welcome!</h2>
                <p>Dessert toffee chocolate lollipop fruitcake cake sweet. Pudding cotton candy chocolate pudding liquorice jelly marzipan. Muffin gummies topping lollipop. Caramels chocolate cake donut liquorice.</p>
                <p>Cake sesame snaps sweet tart candy canes tiramisu I love oat cake chocolate bar. Jelly beans pastry brownie sugar plum pastry bear claw tiramisu tootsie roll.</p>
            </div>

            <footer>
                <p>&copy;2015 Residents of The Best City.</p>
            </footer>
        </div>
	</body>
</html>
```

 Set the wrapper's width to 80% of the browser width. Then use margins to center the wrapper in the browser.
https://teamtreehouse.com/community/how-do-you-do-this-26
```
.container {
    width: 80%;
    margin: auto;
}
```

Quiz Question 1 of 6

#The element that centers a layout in the browser and keeps it from looking too wide or narrow is usually called a:

Wrapper

#In web design, a sticky footer is:

A footer that's forced to the bottom of the page regardless of the amount of content above it

#Which of the following best describes the "mobile first" layout approach?

Basic styles are served to mobile devices by default, then gradually adjusted for wider screens, using media queries.

#What does a CSS reset do?

It removes all browser inconsistencies to ensure that your layout displays as consistently as possible across all browsers.

#It's common to have more than one wrapper on a page. You can even have containers inside of containers.

True

#When do vertical margins collapse?

When there is no border, padding or content area to interrupt two touching margins.

---

React Basics

First Steps in React

JSX Review

Quiz Question 1 of 6

#Is using JSX with React optional?

Yes

#What is the purpose of curly braces { } in JSX?

They are used to evaluate JavaScript expressions

#Which of the following JSX snippets applies a class of 'container' to the div?

```
<div className="container">...</div>
```

#Please fill in the correct answer in each blank provided below.

Display the value of the petName variable inside the <p> tags.
```
const petName =  'Ernie';
const header = (
  <header>
    <p>I have a pet named _{petName}_.</p>
  </header>
);
```

#Elements written in JSX get transpiled to:

React.createElement() functions


#What tool do we use to translate JSX into standard JavaScript?

Babel

---

Thinking in Components

React Components Review

#A ________ renders a reusable piece of the UI.

component

#How do you create a React component?

#Please fill in the correct answer in each blank provided below.
Define a component that creates a reusable 'footer'.
https://teamtreehouse.com/community/define-a-component-that-creates-a-reusable-footer
```
function _(Footer)_ () {
  return (
    <footer>
      <h2>The Footer</h2>
      <span>This is the awesome footer!</span>
    </footer>
  );
}
```

#Please fill in the correct answer in each blank provided below.
Use a JSX tag to render a component named Scoreboard into the DOM.
https://teamtreehouse.com/community/need-help-221
```
ReactDOM.render(
  _<Scoreboard/>_,
  document.getElementById('root')
);
```

#React uses a templating language for creating components.

False. React components are written in plain JavaScript, with the help of JSX.

---

Thinking in Components Review

#Which component do you usually pass to ReactDOM.render()?

The top-level component.

#When a component contains other components, it's called:

composition

#Why is a capital letter necessary in the component name?

To differentiate custom components from native DOM elements

#Please fill in the correct answer in each blank provided below.
Complete the code below to create a Navigation component as a function.
https://teamtreehouse.com/community/complete-the-code-below-to-create-a-navigation-component-as-a-function
```
const Navigation = () => {
    _(return)_(
    <nav>
      <ul> ... </ul>
    </nav>
  );
}
```

#When should you break a component into smaller components?

When the component has too many responsibilities

---
Introducing Props

#Which property should you provide to components generated by iterating over an array?

key

#Please fill in the correct answer in each blank provided below.
Pass the score prop the number value 100.
https://teamtreehouse.com/community/fill-in-the-correct-answer-2
```
<Student name="Gob" score=_{100}_ />
```

#Which of the following best describes properties (or props) in React?

Props pass data from a parent component down to child components.

#Please fill in the correct answer in each blank provided below.
Enable the use of props inside the Header component. Then, add the code that displays the value of a prop named user.
https://teamtreehouse.com/community/enable-the-use-of-props-inside-the-header-component-then-add-the-code-that-displays-the-value-of-a-prop-named-user
```
const Header = (_props_) => {
  return (
    <h1>Hello, {_props.user_}!</h1>
  );
}
```

#How should you write an iteration method like map() in JSX?

It's a JavaScript expression, so it needs to be placed inside curly braces.

#A component can change the value of the props given to it.

False. Props are "read only" (or immutable). A component can only read the props given to it, never change them.

---

Understanding State

Understanding State Review

#What type of components allow you to initialize state?

Class components

#The only required method in a class component is:

render()

#Please fill in the correct answer in each blank provided below.
Complete the code to define a class component named Modal.
https://teamtreehouse.com/community/complete-the-code-to-define-a-class-component-named-modal
```
class Modal extends _(React.Component)_ {
  ...
}
```

#Can you define any stateless functional component as a class?

Yes

#Please fill in the correct answer in each blank provided below.
Complete the code to define a time state with an initial value of 0. Note that the state object is not inside a constructor().
```
class Timer extends React.Component {
  _(state)_ = {
   _(time)_ : _(0)_
  };
  render() { ... }
}
```

#Please fill in the correct answer in each blank provided below.
In the function below, update an isRunning state to true.
https://teamtreehouse.com/community/in-the-function-below-update-an-isrunning-state-to-true-in-react
```
startTimer = () => {
  this._(setState)_({ _(isRunning)_ : _(true)_ });
}
```

#Please fill in the correct answer in each blank provided below.
Add the code that will call a function named startTimer when the button is clicked.
https://teamtreehouse.com/community/what-the-react-am-i-doing-wrong-here
```
<button _(onClick)_ = {_this.startTimer_} >Start</button>
```

#Data from state is distributed through the application via ___.

props

#What type of state is available to the entire app?

Application state

#In React, state is never modified directly.

True. The only way React allows you to update state is by using its built-in

#State may be updated asynchronously. Whenever you need to update state based on previous state, you shouldn't rely on _____ to calculate the next state.

this.state

#Please fill in the correct answer in each blank provided below.
Complete the code so that the isConfirmed state updates its value based on the previous state.
https://teamtreehouse.com/community/i-cant-figure-out-whats-suppose-to-go-here-ive-reviewed-the-videos-a-few-times-i-guess-im-just-missing-it
```
confirmGuest = () => {
  this.setState( prevState => ({
    isConfirmed: !_(prevState)_.isConfirmed
  }));
}
```

#Please fill in the correct answer in each blank provided below.
Complete the code to display the value of a prop named time. Note that Clock is a class component.
https://teamtreehouse.com/community/having-trouble-understanding-this-question-2
```
class Clock extends React.Component {
  render() {
    return (
      <span className="time">_{this.props.time}_</span>
    );
  }
}
```