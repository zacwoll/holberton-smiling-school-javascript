# Holberton Smiling School - JavaScript Edition
This project is a reboot of a previous project I had, [Smiling School](https://github.com/zacwoll/holberton-smiling-school), this version aims to add functionality to the product I built in that project using JavaScript.

## Organization, or TL;DR
This project was spread over three websites, the courses.html, homepage.html & pricing.html pages. They are actually hosted via github-pages:
- [homepage](https://zacwoll.github.io/holberton-smiling-school-javascript/)
- [courses](https://zacwoll.github.io/holberton-smiling-school-javascript/courses.html)
- [pricing](https://zacwoll.github.io/holberton-smiling-school-javascript/pricing.html)
And, the navigation works on each page, so to see the others, simply click the links in the top right! Due to req. constraints Login isn't implemented in this project.

## Specific Insights from the Project

First, I created a loading animation for my dynamic assets. While they're loading, a loader shows in place of incomplete data and spins, indicating progress being made loading the asset. In 1-, 2-, and 3-homepage , we set the loader for the three respective carousels present on the page at this stage.

in courses.html, filling in the search requirements sends a GET request to `https://smileschool-api.hbtn.info/courses` an API that holberton pre-built for this exercise. This was one of my first exposures to decoupled development for applications, that I could just access this API and load content from it onto the page led me to a deeper understanding of application development in general, especially when I started writing my own Express Backend a few weeks later.

in scripts.js, I learned a lot about creating components that accept data and render as whole sections of html + css. Using Bootstrap, and data loaded in from hitting the endpoint at `https://smileschool-api.hbtn.info/quotes` I was able to create a template for the data coming in and easily render it to the screen the right way. Here's that code snippet right here

```
// Hitting my endpoint for data
function generateQuoteCarousel() {
    $.get('https://smileschool-api.hbtn.info/quotes',
    (quotes) => {
        for (i in quotes) {
            let item = generateQuoteCard(quotes[i]);
            if (i == 0) {
                item.className += ' active';
            }
            $('#Quote-Carousel .carousel-inner').prepend(item);
        }
        $('.loader').hide();
    });
}
```

```
// Generate a Quote Card using the data
function generateQuoteCard(data) {
    let item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `
    <div class="row align-items-center justify-content-between">
        <span class="holberton_school-icon-arrow_4 d-sm-none" aria-hidden="true"></span>
        <img src="${data['pic_url']}" class="avatar rounded-circle ml-sm-auto" alt="user avatar">
        <span class="holberton_school-icon-arrow_3 d-sm-none" aria-hidden="true"></span>
        <div class="col-12 col-sm-6 m-3 mr-auto">
            <p>${data['text']}</p>
            <p class="mb-0">${data['name']}</p>
            <p><em>${data['title']}</em></p>
        </div>
    </div>
    `
    return item;
}
```