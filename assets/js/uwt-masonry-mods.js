/*
* Manipulate the links to the initiative-[impact-goal].html pages
* on the initiatives.html page.
* */
(function () {
    'use strict';
    // Clicking on an item filter also displays a button link which corresponds
    // to the item filter clicked.
    $('.items-filter a').click(function () {
        console.log('I have been clicked!!');
        $('.init-links div').fadeOut(300);
        let selector = '.init-links div' + $(this).attr('data-filter');
        console.log(selector);

        setTimeout(function () {
            $(selector).fadeIn(200);
        }, 500);


    });

}());