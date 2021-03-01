$(document).ready(() => {
    generateQuoteCarousel();
    //generatePopularCarousel();
});

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

function generatePopularCarousel() {
    $.get('https://smileschool-api.hbtn.info/popular-tutorials',
    (data) => {
        for (i in data) {
            let item = generateTutorialCard(data[i]);
            if (i == 0) {
                item.className += ' active';
            }
            $('[id^=carousel-popular] .carousel-inner').prepend(item);
        }
        $('.loader').hide();
    });
}

function generateTutorialCard(data) {
    let item = document.createElement('div');
    item.className = 'carousel-item';
    item.innerHTML = `
    <div class="card">
        <div class="thumb-4">
            <img class="card-img-top" src="${data['thumb-url']}" alt="">
        </div>
        <div class="card-body">
            <p class="card-text"><b>${data['title']}</b></p>
            <p class="card-text">${data['sub-title']}</p>
            <div class="d-flex">
                <img src="${data['author_pic_url']}" alt="" class="avatar-sm rounded-circle">
                <p class="text-purple mx-2">${data['author']}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-3">
                <div id="rating" class="d-flex">
                </div>
                <div id="time">
                    <p class="card-text text-purple">${data['duration']}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    for (let i = 0; i < 5; i++) {
        let rating = item.querySelector('#rating');
        let star = document.createElement('img');
        star.setAttribute('class', 'img-star mr-2');
        if (i < data['star']) {
            star.setAttribute('src', 'assets/images/star_on.png');
        } else {
            star.setAttribute('src', 'assets/images/star_off.png')
        }
        rating.append(star);
    }
    return item;
}

jQuery(document).ready(function() {
    $('#carousel-popular').on('slide.bs.carousel', function (e) {

        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 5;
        var totalItems = $('#carousel-popular .carousel-item').length;

        console.log('Carousel Behind the scenes');
        
        if (idx >= totalItems-(itemsPerSlide-1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (e.direction=="left") {
                    console.log('fucked!');
                    $('.carousel-popular .carousel-item').eq(i).appendTo('.carousel-popular .carousel-inner');
                }
                else {
                    $('.carousel-popular .carousel-item').eq(0).appendTo('.carousel-popular .carousel-inner');
                }
            }
        }
    });
});