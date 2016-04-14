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
            $('.balls').removeClass('selected');
            $('.balls_article').removeClass('active');
            // history.pushState(null, null, $("#header").find("a.active").attr("href"));
            switch(mySwiper.activeIndex){
            case 0:
                $("body").attr("class", "vue_1");
                break;

            case 1:
                $("body").attr("class", "vue_2");
                // $('section.page_2').removeClass('stayput');
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
            $('section.page_2').addClass('stayput');
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

    $("#header").find("a[data-slide]").on('click',function(){
        $("#header").find("a.active").removeClass('active');
        $(this).addClass('active');
        mySwiper.slideTo( $(this).data("slide") );
    });

    $(".balls").on("click", function(){
        $(this).addClass('selected');
        $(".balls_article").removeClass('active');
        var myBallsIndex = $(this).data("index");
        $(".balls_article").slice(myBallsIndex, myBallsIndex+1).addClass("active");
        console.log($(this).data("index"));
    });

    $('.balls_close_icon').on('click',function(){
        $('.balls').removeClass('selected');
        $('.balls_article').removeClass('active');
    });

    $(".slides").find("a").on("click", function(){
        $(".page_4").addClass('on');
        $('.slide_wrapper').css("z-index", "6");
    });

    $('.close_icon').on('click',function(){
        $(".page_4").removeClass('on');
        setTimeout(function(){
            $('.slide_wrapper').css("z-index", "0");
        }, 650);
    });

    $("#social_list").on("mouseenter mouseleave",function(){
        $(this).toggleClass('socialed');
    });

    emailE='jonathanconde.com';
    emailE=('mail' + '@' + emailE);
    $("#nono").append('<a href="mailto:' + emailE + '">' + emailE + '</a>');

});
