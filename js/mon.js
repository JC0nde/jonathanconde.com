$(document).ready(function(){
    setTimeout(function(){
        $("body").addClass("fixed");
    }, 350);

    // function locationHashChanged(i) {
    //          var hash = location.hash;
    //          // Iterate over all nav links, setting the "active" class as-appropriate.
    //          $("#header").find("a").each(function() {
    //                          var that = $( this );
    //                          that[ that.attr( "href" ) === hash ? "addClass" : "removeClass" ]( "active" );
    //                          console.log(that)
    //          });

    // }

    // window.onhashchange = locationHashChanged;

    var mySwiper = new Swiper('.swiper-container-h', {
        nextButton: '.swiper-button-next-h',
        direction: 'vertical',
        mousewheelControl: true,
        keyboardControl:true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 900,
        onSlideChangeStart: function(){
            $("#header").find("a.active").removeClass('active');
            $("#header").find("a").eq(mySwiper.activeIndex).addClass('active');
            // history.pushState(null, null, $("#header").find("a.active").attr("href"));
            switch(mySwiper.activeIndex){
            case 0:
                $("body").attr("class", "vue_1");
                break;

            case 1:
                $("body").attr("class", "vue_2");
                break;
            case 2:
                $("body").attr("class", "vue_3");
                break;

            case 3:
                $("body").attr("class", "vue_4");
                break;

            case 4:
                $("body").attr("class", "vue_5");
                break;
            }
            console.log(mySwiper.activeIndex);
        },
        onSlideChangeEnd: function(){
            $("body").addClass("fixed");
        }
    });
    var swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination-v',
        paginationClickable: true,
        nextButton: '.swiper-button-next-v',
        prevButton: '.swiper-button-prev-v',
        keyboardControl:true,
        grabCursor: true,
        loop: true,
        spaceBetween: 40,
        speed: 900,
        paginationBulletRender: function (index, className) {
            return '<span class="' + className + '">' + '<i></i>' + '</span>';
        }
    });

    var swiperS = new Swiper('.swiper-container-s', {
        paginationClickable: true,
        nextButton: '.swiper-button-next-s',
        prevButton: '.swiper-button-prev-s',
        parallax: true,
        grabCursor: true,
        speed: 1155,
        keyboardControl:true,
        onSlideChangeStart:function (e){
            switch (swiperS.activeIndex){
            case 0:
                $(".swiper-container-s").removeClass('droite');
                $(".swiper-container-s").addClass('gauche');
                break;

            case 1:
                $(".swiper-container-s").removeClass('gauche');
                $(".swiper-container-s").addClass('droite');
                break;
            }
        }
    });

    $("#header").find("a[data-slide]").on('click',function(){
        $("#header").find("a.active").removeClass('active');
        $(this).addClass('active');
        mySwiper.slideTo( $(this).data("slide") );
    });

    $("#social_list").on("mouseenter mouseleave",function(){
        $(".social_list").toggleClass('socialed');
    });
});
