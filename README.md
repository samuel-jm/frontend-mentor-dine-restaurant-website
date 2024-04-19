# Frontend Mentor - Dine Website Challenge solution

This is a solution to the [Dine Website Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- See the correct content for the Family Gatherings, Special Events, and Social Events section when the user clicks each tab
- Receive an error message when the booking form is submitted if:
  - The `Name` or `Email Address` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
  - Any of the `Pick a date` or `Pick a time` fields are empty should show "This field is incomplete"

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: https://github.com/samuel-jm/frontend-mentor-dine-restaurant-website
- Live Site URL: https://samuel-jm.github.io/frontend-mentor-dine-restaurant-website/

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- SASS/SCSS
- Webpack

### What I learned

The two key points I learned while working on this challenge were:

1. The importance of planning ahead
2. The importance of a CSS methodology

By planning ahead you can make informed decisions about how your html and css can be put together in an efficient manner. For example, in the "Family Gathering" section I used CSS Grid to organise the text components because grid allows you to render component out of order. This is usefull because the desktop layout has a text group -> button -> navigation order while the tablet and mobile layouts have a navigation -> text group -> button order.

Without a clear organizational structure to your stylesheets, creating styles can quickly become a nightmare with styles all over the place and so many unnecessarily repeated styles. For this project I used the BEM methodology.

### Continued development

I plan to complete this challenge again using Svelte break up the website into compact and easily manageable components.<br><br>
I would also like to increase my understanding of CSS as I continue to complete these challenges so that I may know the most efficient solutions to problems as they come up.

### Useful resources

- [The BEM Methodology](https://samuel-jm.github.io/frontend-mentor-dine-restaurant-website/) - This methodology helped me greatly in creating structured styles that could easily be reused anywhere in the website.

## Author

- Github - https://github.com/samuel-jm
- Frontend Mentor - [@samuel-jm](https://www.frontendmentor.io/profile/samuel-jm)
