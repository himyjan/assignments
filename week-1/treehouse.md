
Responsive Layouts
https://teamtreehouse.com/library/responsive-layouts

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