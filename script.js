$(function () {
var effect_pos = 300; // 画面下からどの位置で(px)
var effect_move = 50; // どのぐらい要素を動かすか(px)
var effect_time = 800; // エフェクトの時間(ms) 1秒なら1000

// フェードする前のcssを定義
$('.scroll-fade').css({
    opacity: 0,
    transform: 'translateY(' + effect_move + 'px)',
    transition: effect_time + 'ms'
});

// スクロールまたはロードするたびに実行
$(window).on('scroll load', function () {
    var scroll_top = $(this).scrollTop();
    var scroll_btm = scroll_top + $(this).height();
    effect_pos = scroll_btm - effect_pos;

    // effect_posがthis_posを超えたとき、エフェクトが発動
    $('.scroll-fade').each(function () {
        var this_pos = $(this).offset().top;
        if (effect_pos > this_pos) {
            $(this).css({
                opacity: 1,
                transform: 'translateY(0)'
            });
        }
    });
});


//リトリートページ質問箱プログラム
$(".question").on("click", function () {
    $(this).next().slideToggle(200);

});

//TOPページ　ハンバーガーメニュー
$('.drawer').drawer();

//　スリック　画像のスライド
$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
        {
            breakpoint: 1024, // 768~1023px以下のサイズに適用
            settings: {
                slidesToShow: 3
            }
    }, {
            breakpoint: 768, // 480〜767px以下のサイズに適用
            settings: {
                slidesToShow: 2
            }
     }, {
            breakpoint: 480, // 〜479px以下のサイズに適用
            settings: {
                slidesToShow: 1
            }
    }
 ]

});

//TOPページ　画像切替
$('.img-wrap img:nth-child(n+2)').hide();
setInterval(function () {
    $(".img-wrap img:first-child").fadeOut(2000);
    $(".img-wrap img:nth-child(2)").fadeIn(2000);
    $(".img-wrap img:first-child").appendTo(".img-wrap");
}, 4000);
});









});
