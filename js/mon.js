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

    $("#header").find("a[data-slide]").on('click',function(){
        $("#header").find("a.active").removeClass('active');
        $(this).addClass('active');
        mySwiper.slideTo( $(this).data("slide") );
    });

    $(".flgauche").on('click',function(){
        $(".page_3").removeClass('gauche');
        $(".page_3").addClass('droite');
    });
    $(".fldroite").on('click',function(){
        $(".page_3").removeClass('droite');
        $(".page_3").addClass('gauche');
    });

    $("#social_list").on("mouseenter mouseleave",function(){
        $(".social_list").toggleClass('socialed');
    });

    emailE='jonathanconde.com';
    emailE=('mail' + '@' + emailE);
    $("#nono").append('<a href="mailto:' + emailE + '">' + emailE + '</a>');
});
