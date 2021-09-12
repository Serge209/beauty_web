



$(document).ready(function(){
   
    $('.portfolio__tab').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all'){
            $('.portfolio__work_item').show('1000');
        }
        else{
            $('.portfolio__work_item').not('.'+value).hide('1000');
            $('.portfolio__work_item').filter('.'+value).show('1000');
        }
    })

    $('.portfolio__tab').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })


    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay,  #thanks, #order').fadeOut('slow');
    });

    $('.services__item_btn').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.services__item_title').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });

    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
   
})


const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
