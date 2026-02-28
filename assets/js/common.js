// 언어별 날짜 포맷 변환 함수
function getLocalizedDate(dateString) {
    // const date = new Date(dateString);
        
    // 날짜 문자열을 Date 객체로 정확히 파싱
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day); // month는 0-based이므로 -1 필요
    
    const formatters = {
        'en-us': new Intl.DateTimeFormat('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        }),
        'en': new Intl.DateTimeFormat('en-GB', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        }),
        'en-eu': new Intl.DateTimeFormat('en-GB', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        }),
        'fr': new Intl.DateTimeFormat('fr', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        }),
        'es': new Intl.DateTimeFormat('es', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        }),
        'it': new Intl.DateTimeFormat('it', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        }),
        'de': new Intl.DateTimeFormat('de', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        })
    };

    let formatter;
    switch(ICL_LANGUAGE_CODE) {
        case 'en-us':
            formatter = formatters['en-us']; // August 29, 2024
            break;
        case 'en':
        case 'en-eu':
            formatter = formatters['en']; // 29 August 2024
            break;
        default:
            formatter = formatters[ICL_LANGUAGE_CODE] || formatters['en-us'];
    }
    
    let formatted = formatter.format(date);
    
    // 스페인어의 경우 'de' 위치 조정
    if (ICL_LANGUAGE_CODE === 'es') {
        formatted = formatted.replace(' de ', ' de ');
    }
    
    return formatted;
}


function trans(jsonString) {
    const translations = JSON.parse(jsonString);
    const lang = ICL_LANGUAGE_CODE;
    return translations[lang] || ""; // 현재 언어에 해당하는 텍스트가 없을 경우 빈 문자열 반환
}

// Tom Select
document.addEventListener('DOMContentLoaded', function() {
    window.tomSelects = []; // 전역 또는 적절한 범위에 배열을 선언
    document.querySelectorAll('.tom-select').forEach((el, index) => {
        let settings = {
            // create: true,
            sortField: {
                field: "text",
                direction: "asc"
            },
            maxOptions: null, // 최대 선택 가능한 옵션 수, 기본값은 50, null은 제한 없음
        };
        let tomSelectInstance = new TomSelect(el, settings);
        window.tomSelects.push(tomSelectInstance); // 인스턴스 저장
    });
});
// tom select clear
function clearTomSelectById(elementId) {
    let tomSelectInstance = window.tomSelects.find(ts => ts.input.id === elementId);
    if (tomSelectInstance) {
        tomSelectInstance.clear();
    }
}


// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelectorAll('.tom-select').forEach((el)=>{
//         let settings = {
//             // create: true,
//             sortField: {
//                 field: "text",
//                 direction: "asc"
//             }
//         };
//          new TomSelect(el,settings);
//     });
// });


// --- begin mavenoid embedded troubleshooter ---
(function (m, a, v, e, n, o, i, d) {
    d = m.createElement(e);
    d.async = true;
    d.src = "https://app.mavenoid.com" + v;
    i = m.getElementsByTagName(e)[0];
    i.parentNode.insertBefore(d, i);
    n[o] = n[o] || [];
})(document, 0, "/embedded/embedded.js", "script", window, "mavenoid");
// --- end mavenoid embedded troubleshooter ---

// Check if the current URL matches the /support/* pattern
function isSupportPage() {
    return window.location.pathname.startsWith("/support/") || window.location.pathname.match(/\/[a-zA-Z-]+\/support/);
}

if (isSupportPage()) {
    mavenoid = mavenoid || {};
    mavenoid.config = {
        noIframe: false,
        clientId: "5d424df4f86c269f2204"
    };

    mavenoid.push({
        event: "troubleshooter-open",
        productId: 26025543,
        orgName: "Sena",
        position: "right",
        // openByDefault: true
    });
}


$(function () {

    // 메일링 신청
    // .layer_mailing 클래스에 on 추가
    // $("#btn_mailing").on("click", function (e) {
    //     $(".layer_mailing").addClass("on");
    //     e.preventDefault();
    // });

    // (function() {
    //     var gaScript = document.createElement('script');
    //     gaScript.async = true;
    //     gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-RXFKR5WZVS';
    //     document.head.appendChild(gaScript);

    //     window.dataLayer = window.dataLayer || [];
    //     function gtag(){dataLayer.push(arguments);}
    //     gtag('js', new Date());
    //     gtag('config', 'G-RXFKR5WZVS');
    // })();



    // 쿠키팝업
    let _senacookiepop = getCookie("_senacookiepop");
    if (!_senacookiepop) {
        
        // 설정되어 있는 ga 작동 안함
        // 첫페이지에서만 적용 body 태그에 home 클래스 여부에 따라 적용
        let is_front = $("body").hasClass("home");
        if(is_front) {
            $("#layer_cookie").addClass("show");
        }

    }

    if (!_senacookiepop == "N") {

        // ga
        (function () {
            var gaScript = document.createElement('script');
            gaScript.async = true;
            gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-966END94HG';
            document.head.appendChild(gaScript);

            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-966END94HG');
        })();
        // (function() {
        //     var gaScript = document.createElement('script');
        //     gaScript.async = true;
        //     gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-RXFKR5WZVS';
        //     document.head.appendChild(gaScript);

        //     window.dataLayer = window.dataLayer || [];
        //     function gtag(){dataLayer.push(arguments);}
        //     gtag('js', new Date());
        //     gtag('config', 'G-RXFKR5WZVS');
        // })();

    }

    $("#btn_cookie_accept").on("click", function (e) {
        e.preventDefault();
        setCookie("_senacookiepop", "Y", 7);
        $("#layer_cookie").removeClass("show");
    });

    $("#btn_cookie_decline").on("click", function (e) {
        e.preventDefault();
        setCookie("_senacookiepop", "N", 7);
        $("#layer_cookie").removeClass("show");
    });

    $("#btn_cookie_close").on("click", function (e) {
        e.preventDefault();
        $("#layer_cookie").removeClass("show");
    });


    // 팝업
    $(document).on("click", "#btn_close_popup, .dim", function(e){
        e.preventDefault();
        closePopup(false); // 쿠키 설정 옵션을 true로 전달

        // brain 241201
        if ($("#container_layer_alert").length > 0) {
            $(".layer_alert").removeClass("on");
            $(".dim").animate({
                opacity: 0
            }, 300);
            $(".dim").css("display", "none");
            setTimeout(function () {
                const container = document.getElementById("container_layer_alert");
                container.innerHTML = "";
            }, 500);
        }        
        
        // $("#popup-subscribe").removeClass("on");
        // $(".dim").animate({
        //     opacity: 0
        // }, 300);
        // $(".dim").css("display", "none");
    });

    $("#btn_subscribe_popup").on("click", function(e){
        e.preventDefault();
        $(".popup-subscribe").removeClass("on");
        $(".popup-subscribe").css("opacity", "0");
    
        // $(".dim").animate({
        //     opacity: 0
        // }, 300);
        // $(".dim").css("display", "none");

        $(".layer_mailing").addClass("on");



    });

    
    $("#no-thanks").on("click", function(e){
        e.preventDefault();
        closePopup(true);
        // $(".dim").animate({
        //     opacity: 0
        // }, 300);
        // $(".dim").css("display", "none");

        let currentLang = ICL_LANGUAGE_CODE || 'en';
        let cookieName = 'newsletter_popup_' + currentLang;
        setCookie(cookieName, 'hidden', 7);
        console.log('cookieName', cookieName);
    });

    function closePopup(setCookie = false) {
        $(".popup-subscribe").removeClass("on");
        $(".popup-subscribe").css("transition", "opacity 0.25s ease-in-out");
        $(".popup-subscribe").css("opacity", "0");
        $(".dim").animate({
            opacity: 0
        }, 300);
        $(".dim").css("display", "none");
        
        let currentLang = ICL_LANGUAGE_CODE || 'en';
        let cookieName = 'newsletter_popup_' + currentLang;
        if(setCookie) {
            setCookie(cookieName, 'hidden', 7);
        }
    }






});







// header 검색
let btn_search_header_element = document.getElementById("btn_search_header");
let post_keyword_header_element = document.getElementById("post_keyword_header");
const btn_search_header_mo_element = document.getElementById("btn_search_header_mo");
const post_keyword_header_mo_element = document.getElementById("post_keyword_header_mo");


// 검색 버튼 클릭
if (btn_search_header_element || btn_search_header_mo_element) {
    btn_search_header_element.addEventListener("click", function (event) {
        event.preventDefault();
        search_header();

    });
    btn_search_header_mo_element.addEventListener("click", function (event) {
        event.preventDefault();
        search_header();
    });
}
function search_header() {
    post_keyword = post_keyword_header_element.value;
    // 비어 있으면 모바일 검색창에서 검색어 가져오기
    if (post_keyword == '') post_keyword = post_keyword_header_mo_element.value;
    if (post_keyword) {
        post_keyword = post_keyword.trim();
        post_keyword = encodeURIComponent(post_keyword); // post_keyword 인코딩
        console.log('ICL_LANGUAGE_CODE', ICL_LANGUAGE_CODE);
        if (ICL_LANGUAGE_CODE == 'en') {
            location.href = "/search/" + post_keyword;
        } else {
            location.href = '/' + ICL_LANGUAGE_CODE + '/search/' + post_keyword;
        }
    } else {
        alert("검색어를 입력해주세요.");
        // post_keyword_header_element.focus();
    }
}
// 검색어 입력/엔터    
if (post_keyword_header_element || post_keyword_header_mo_element) {
    post_keyword_header_element.addEventListener("keyup", function (key) {
        search_header_keyup(key);
    });
    post_keyword_header_mo_element.addEventListener("keyup", function (key) {
        search_header_keyup(key);
    });
}
function search_header_keyup(key) {
    const pattern = /[.,~!@$%^&*()_+|?:;{}\/]/;
    if (pattern.test(this.value)) {
        this.value = this.value.replace(pattern, "");
    }
    if (key.keyCode == 13) {
        search_header();
    }
}



$(".headerArea .navbar li a").wrapInner("<span></span>");

// .headerArea .navbar li 하위에 a 태그 추가
$(".headerArea .navbar > li").each(function () {
    $(this).append(`<a href="#" class="btn-gnb-menu"></a>`);
    // if ($(this).children("ul").length > 0) {

    // }
});

// header 검색
//var dim = `<div class="dim"></div>`;
$(".headerArea .util .btn_search").on("click", function (e) {
    // brain 240113 검색페이지에서는 검색창이 열리지 않도록
    if ($(".entry-content > div").hasClass("search")) {
        $(".sub_content.search .search_box input").focus();
        // $(".sub_content.search .search_box").css("border-color", "#ED2222").css("border-width", "1px");
        $(".sub_content.search .search_box").css("background-color", "#ed222245");
        setTimeout(function () {
            // $(".sub_content.search .search_box").css("border-color", "#D9D9D9").css("border-width", "1px");
            $(".sub_content.search .search_box").css("background-color", "#fff");
        }, 500);
        return false;
    }
    globalClose();
    searchBoxOpen();
    headerClose();
    e.preventDefault();
});

$(".headerArea .search_box .search_close").on("click", function (e) {
    searchBoxClose();
    e.preventDefault();
});

$(".search_dim").on("click", function () {
    searchBoxClose();
})

// header 검색 열기
function searchBoxOpen() {
    if (!$(".headerArea").hasClass("search_active")) {
        $("body").find(".header_dim").stop().fadeOut('fast');
        if (isMobileTablet()) {
            $("body").addClass("hidden");
        }
        //$("body").addClass("hidden"); // 안해주면 스크롤시에 헤더색 투명일때 문제
        $(".headerArea").addClass("white search_active");
        //$(".headerArea .search_box.pc .btn_search").addClass("on");
        if (isMobile() == false) {
            $("body").find(".search_dim").stop().fadeIn('fast');
        }
        // brain 240113 focus
        $(".headerArea .search_box input").focus();

    }
}

// header 검색 닫기
function searchBoxClose() {
    if ($(".headerArea").hasClass("search_active")) {
        if (isMobileTablet()) {
            $("body").removeClass("hidden");
        }
        //$(".headerArea .search_box.pc .btn_search").removeClass("on");
        $("body").find(".search_dim").stop().fadeOut('fast');
        $(".headerArea").removeClass("search_active");
        headerTransparent();
    }
}

// header 리사이징했을때도 반영
$(window).on("resize", function () {
    headerInit();
});

function headerInit() {
    if ($(window).width() <= 768) {
        // mo
        //isMobile();
        searchBoxClose();
        headerClose();
        globalClose()

    } else if ($(window).width() <= 1181) {
        //isMobileTablet();
        headerClose();
        searchBoxClose();
        globalClose();

    } else {
        // 리사이즈 했을때 pc header 닫기
        headerClose();
        searchBoxClose();
        headerTransparent();
        globalClose();
    }
}
headerInit();


// header 흰색
if ($(".entry-content > div").hasClass("sub_content") || $(".site-content > section").is(".error")) {
    $(".headerArea").addClass("white");
}

// header 상품 상세는 fixed가 아님
if ($(".entry-content > div").is(".product.detail")) {
    $(".headerArea").addClass("defalut");
}

// header 투명
function headerTransparent() {
    // 메인, 상품 오버뷰(서브메인), 콜라보, 세나랩
    if (
        $(".entry-content > div").is(".main_content") ||
        $(".entry-content > div").is(".wave_content") ||
        $(".entry-content > div").is(".product.overview") ||
        $(".entry-content > div").is(".collaborations") ||
        $(".entry-content > div").is(".stories.lab")
    ) {
        $(".headerArea").removeClass("white");
    }
    // 새로고침 할때 header가 top이 아니면 흰색, top일때만 투명이어야함
    if ($(window).scrollTop() >= 5) {
        $(".headerArea").addClass("white");
    }
}
headerTransparent();


// pc: header
// if($(".entry-content > div").hasClass("support")) {
//     $(".headerArea.white .inner .util .support").addClass("on");
// }

$(".headerArea .navbar li").on("mouseenter", function (e) {
    // gnb 메뉴 마우스 오버하면 검색은 닫기
    searchBoxClose();
    globalClose();

    if (isMobileTablet() == false) {
        //$("body").addClass("hidden");
        if ($(this).hasClass("gnb-one-depth") == false) {
            $("body").find(".header_dim").stop().fadeIn('fast');
        } else {
            headerClose();
        }

        $(".headerArea").addClass("white");
        $(".headerArea").addClass("header_active");


        if ($(this).hasClass("on") == false) {
            $(this).siblings().removeClass("on");
            $(this).addClass("on");

            // 상품관련 메뉴들은 2뎁스 두번째 메뉴가 활성화
            if ($(this).hasClass("gnb-three-depth")) {
                $(this).children(".sub-menu").children("li").eq(1).addClass("on");
            }

            $(this).siblings().removeClass("over").addClass("out");
            $(this).removeClass("out").addClass("over");
        }
    }
    e.preventDefault();
});

// 1뎁스만 반영
$(".headerArea .navbar > li").on("mouseenter", function () {
    if (isMobileTablet() == false) {
        if ($(this).hasClass("menu-item-has-children") == false) {
            // 1뎁스가 2뎁스를 가지고 있지 않다면 2뎁스 메뉴 스타일 닫기
            $(".headerArea").removeClass("header_active");
        } else {
            // 1뎁스가 2뎁스를 가지고 있다면 나머지 2뎁스에 기존 스타일 전부 제거
            $(this).siblings().find(".sub-menu li").removeClass("on over out");
        }

        // 오른쪽 비주얼
        var idx = $(this).index();
        if ($(this).hasClass("on")) {
            $(this).parents(".headerArea").find(".visual_list li").removeClass("on");
            $(this).parents(".headerArea").find(".visual_list li").eq(idx).addClass("on");
        }

    }
});

$(".headerArea .navbar > li").on("mouseleave", function () {
    // 3뎁스 메뉴만 클래스 삭제하고 기본 검정 텍스트 컬러로
    $(".headerArea .navbar > li > .sub-menu > li > .sub-menu li").removeClass("on over out");

});

// header 작업완료 후 주석 제거
$(".headerArea").on("mouseleave", function () {
    if (isMobileTablet() == false) {
        headerClose();
        if ($(".headerArea").hasClass("search_active") == false) {
            headerTransparent();
        }

        // header가 top이 0 아니면 흰색을 유지
        if ($(window).scrollTop() >= 5) {
            $(".headerArea").addClass("white")
        }

    }
});


// header 닫기
function headerClose() {
    // 검색이 열렸을때 headerArea 마우스 아웃시 hidden이 사라지면 안됨
    if ($(".headerArea").hasClass("search_active") == false) {
        //$("body").removeClass("hidden");
    }
    $('body').find('.header_dim').stop().fadeOut('fast');
    $(".headerArea").removeClass("header_active");
    $(".headerArea .navbar li").removeClass("on over out");

    // 오른쪽 비주얼 이미지
    $(".headerArea .visual_list li").removeClass("on");
    $(".headerArea .visual_list li:first-child").addClass("on");

    // tb, mo
    $(".headerArea .btn_gnb").removeClass("hide");
    $(".headerArea .btn_gnb_close").removeClass("show");
    $(".headerArea .navbar > li.menu-item-has-children").find(".sub-menu").css("display", "");
}

// tb, mo: 전체메뉴 열기
$(".headerArea .btn_gnb").on("click", function (e) {
    searchBoxClose();
    $(this).addClass("hide");
    $(this).siblings().addClass("show")
    $(".headerArea").addClass("header_active");
    $("body").addClass("hidden");
    //globalClose();
    e.preventDefault();
});

// tb, mo: 전체메뉴 닫기
$(".headerArea .btn_gnb_close").on("click", function (e) {
    $(this).removeClass("show");
    $(this).siblings().removeClass("hide")
    $(".headerArea").removeClass("header_active");
    $("body").removeClass("hidden");
    $(".headerArea .navbar > li").removeClass("on over out");
    $(".headerArea .navbar > li .sub-menu").stop().slideUp();
    e.preventDefault();
})

// tb, mo: 서브메뉴
if (isMobileTablet()) {
    $(".headerArea .navbar > li.menu-item-has-children > .btn-gnb-menu").on("click", function (e) {
        if ($(this).parent("li").hasClass("on") == false) {
            $(".headerArea .navbar > li").removeClass("on").addClass("out");
            $(this).parent("li").removeClass("out").addClass("on");
            $(".headerArea .navbar > li.menu-item-has-children").find(".sub-menu").stop().slideUp();
            $(this).parent("li").find(".sub-menu").stop().slideDown();
        } else {
            $(this).parent("li").removeClass("on");
            $(".headerArea .navbar > li").removeClass("out");
            $(this).parent("li").find(".sub-menu").stop().slideUp();
        }
        e.preventDefault();
    });
}

function globalClose() {
    if($('.headerArea .global_wrap').hasClass('active')) {
        $('.headerArea .global_wrap').removeClass('active');
    }
}

// 2024-04-05 다국어 추가
$(".headerArea .util .btn_global").on("click", function (e) {
    $('.headerArea .global_wrap').toggleClass('active');
    // if($('.headerArea').hasClass('header_active')) {
    //     headerClose();
    // }
    searchBoxClose();
    e.preventDefault();
});

// footer 상단으로 이동 버튼
var lastScroll = 0;
$(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > lastScroll) {
        // down
        $(".btn_top").removeClass("up");
    }
    else {
        // up
        if ($(".btn_top").hasClass("hidden") == false) {
            $(".btn_top").addClass("up");
            // support brain 240330
            // mavenoid-assistant 태그가 dom에 있으면
            if($("mavenoid-assistant").length > 0) {
                // $(".btn_top.up").css("bottom", "10rem");
                $(".btn_top").removeClass("up");
                $(".btn_top").addClass("support_up");

            }
        }

        if (scrollTop <= 5) {
            $(".btn_top").removeClass("up");
            $(".btn_top").removeClass("support_up");
        }
    }

    if ($(window).scrollTop() >= $(".footer").offset().top - $(window).innerHeight()) {
        $(".btn_top").addClass("hidden");
    } else {
        $(".btn_top").removeClass("hidden");
    }

    lastScroll = scrollTop;
});

// footer 상단으로 이동 버튼
$(".btn_top a").on("click", function (e) {
    $("html, body").stop().animate({ scrollTop: 0 }, 400);
    e.preventDefault();
});

// 2024-04-04 상품 상세 테스트 중
if ($("#post-21157").length > 0) {
    $(".headerArea").addClass("product");
    $(".headerArea").removeClass("defalut");
}


// HEADER STICKY
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $(".headerArea").outerHeight();

$(window).scroll(function (event) {
    didScroll = true;

});
setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 100);
function hasScrolled() {
    var st = $(this).scrollTop();

    // console.log("st", st);

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        // 모바일 메뉴가 펼쳐졌을 때는 제외
        // if (!($(".headerArea").hasClass("header_active") || $(".headerArea").hasClass("search_active"))) {
        //     //$(".headerArea").addClass("up");
        //     //$(".headerArea").addClass("white");
        //     
        // }
        $(".headerArea").addClass("white");
        $(".headerArea").addClass("scrolling");

        globalClose();

        // 2024-04-04 상품 상세 테스트 중
        if ($("#post-21157").length > 0) {
            $(".headerArea").addClass('up');
            $(".product.detail .scroll_menu").addClass('up');
        }

    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $(".headerArea").addClass("white");

            // 2024-04-04 상품 상세 테스트 중
            if ($("#post-21157").length > 0) {
                $(".headerArea").removeClass("up");
                $(".product.detail .scroll_menu").removeClass('up');
            }

        }
        if (st <= 5) {
            // 흰색배경
            if ($(".entry-content > div").hasClass("sub_content")) {
                $(".headerArea").addClass('white');
            }
            // 투명배경 
            if (!($(".headerArea").hasClass("header_active") || $(".headerArea").hasClass("search_active"))) {
                //$(".headerArea").addClass("up");
                //$(".headerArea").addClass("white");
                headerTransparent();
            }
            $(".headerArea").removeClass("scrolling");

        } else {
            $(".headerArea").addClass("scrolling");
        }
    }

    lastScrollTop = st;
}

// 인풋에 포커스
$(".select_box .txt").on("click", function () {
    $(this).parent().toggleClass('on');
});
$(".select_box .select_list li").on("click", function () {
    $(this).parents(".select_box").find(".select_list li").removeClass('current');
    $(this).addClass('current');
    $(this).parents(".select_box").removeClass('on');
});

$('body').on('click', function (e) {
    if (!$('.select_box').has(e.target).length) {
        $('.select_box').removeClass('on');
    }
});
$(".phone_box input").on("focusin", function () {
    $(this).parents(".phone_box").addClass("on");
});

$(".phone_box input").on("focusout", function () {
    $(this).parents(".phone_box").removeClass("on");
});

$(".textarea_box textarea").on("focusin", function () {
    $(this).parent().addClass("on");
});

$(".textarea_box textarea").on("focusout", function () {
    $(this).parent().removeClass("on");
});

// footer 다국어 선택
$(".global_wrap .txt a").on("click", function (e) {
    $(".global_wrap").toggleClass("on");
    e.preventDefault();
});

$(".global_list a").on("click", function () {
    $(".global_wrap").removeClass("on");
});



jQuery("textarea").change(function () {
    var current_val = jQuery(this).val();

    current_val = current_val.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    current_val = current_val.replace(/'/g, "&quot;").replace(/"/g, "&#39;");
    current_val = current_val.replace(/(<([^>]+)>)/gi, "");
    jQuery(this).val(current_val);
});

//게시판 검색
jQuery("#keyword").keydown(function (key) {
    if (key.keyCode == 13) {
        jQuery("#keyword_btn").trigger("click");
    }
});
jQuery("#keyword_btn").click(function () {
    if (document.location.hash && document.location.hash != "#1") {
        document.location.hash = "#1";
    }
    jQuery(this).parents("form").submit();
});

//xss 방지
jQuery("input[type=text],input[type=tel], textarea").on("propertychange change keyup paste input", function () {
    var current_value = jQuery(this).val();
    current_value = current_value.replace(/</gi, "");
    current_value = current_value.replace(/>/gi, "");
    current_value = current_value.replace("'", "");
    current_value = current_value.replace('"', "");
    jQuery(this).val(current_value);
});

// get 파리미터 가져오기
function getUrlParam(name) {
    // 한글 파리미터 인코딩
    var search = unescape(encodeURIComponent(location.search));
    search = decodeURIComponent(search);

    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

var isEmpty = function (value) {
    if (value == "false" || value == 0 || value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return true;
    } else {
        return false;
    }
};

// 배열 내 모든값 변경
function updateArray(myArray, oldValue, newValue) {
    if (!myArray instanceof Array) return;
    myArray.forEach(function () {
        const index = myArray.indexOf(oldValue);
        if (index !== -1) myArray[index] = newValue;
    });
}

function deleteArray(myArray, value) {
    if (!myArray instanceof Array) return;
    // myArray.forEach(function(element, index, array) { // 파라미터 : 현재아이템, 인덱스, 배열
    //     if(element==value) myArray.splice(index, 1);
    // });
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] === value) {
            myArray.splice(i, 1);
            i--; //forEach를 안쓰고 for를 쓰면서 i--;를 하는 이유는 배열 삭제 후 길이가 -1이 되기 때문
        }
    }
}

//좋아요 버튼
// jQuery(document).on("click", ".btn_like", function(event) {
//     jQuery(this).addClass("on")
// });
// jQuery(document).on("click", ".btn_like.on", function(event) {
//     jQuery(this).removeClass("on")
// });

//관심매장 버튼
// jQuery(document).on("click", ".bookmark", function(event) {
//     jQuery(this).addClass("on")
// });
// jQuery(document).on("click", ".bookmark.on", function(event) {
//     jQuery(this).removeClass("on")
// });

// 아이디 형식 체크
function check_id(user_id) {
    // 영문대소문자, 숫자만 사용가능
    var reg = /^[a-zA-Z0-9]{4,20}$/;
    if (!reg.test(user_id)) {
        return false;
    } else {
        return true;
    }
}

// 이메일 형식 체크 
function check_email(email) {
    // 1. 사전 위험 문자 필터링
    if (/\s|[,":<>]/.test(email)) return false;
    
    // 2. NetSuite-style 정규식 (RFC 5322 기반, IDN 포함)
    const regex = /^[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-zA-Z0-9]+(?:-+[a-zA-Z0-9]+)*\.)+(?:xn--[-a-zA-Z0-9]+|[a-zA-Z]{2,16})$/i;
    
    if (!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}
// function check_email(email) {
//     const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     // var reg = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
//     if (!reg.test(email)) {
//         return false;
//     } else {
//         return true;
//     }
// }

function check_email_keydown(email) {
    var reg = /[^0-9a-zA-Z_@.-]/g;
    var email = email.replace(reg, "");
    return email;
}

// 비밀번호체크 8~20 대소문자,숫자,특수문자
function check_password(user_password) {
    var reg = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/; // 8~20자리 영문 숫자 조합
    // var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/; ㅜ// 8~20 자리 영문 대소문자, 숫자, 특수문자 조합
    if (!reg.test(user_password)) {
        return false; // 부적절한 조합
    } else {
        return true;
    }
}

function check_number(number) {
    // 숫자로만 되어 있는지 체크
    var reg = /^[0-9]*$/;
    if (!reg.test(number)) {
        return false;
    } else {
        return true;
    }
}

function check_number_keydown(number) {
    // 숫자가 아닌 값 제거
    var reg = /[^0-9]/g;
    var number = number.replace(reg, "");
    return number;
}
function check_phone_validate(phone) {
    // 숫자로만 되어 있는지 체크
    var reg = /^[0-9]*$/;
    if (!reg.test(phone)) {
        return false;
    } else {
        return true;
    }
}

function check_url(url) {
    // url 형식 체크
    var reg = /^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    if (!reg.test(url)) {
        return false;
    } else {
        return true;
    }
}
function check_url_keydown(url) {
    var reg = /[^a-zA-Z0-9-_.:/?&=]/g;
    var url = url.replace(reg, "");
    return url;
}

function check_zip(zip) {
    var reg = /^[A-Za-z0-9](?:[A-Za-z0-9 \-]*[A-Za-z0-9])?$/;
    if (!reg.test(zip)) {
        return false;
    } else {
        return true;
    }
}
function check_zip_keydown(zip) {
    // /^[A-Za-z0-9](?:[A-Za-z0-9 \-]*[A-Za-z0-9])?$/;
    var reg = /[^A-Za-z0-9\- ]/g;
    var zip = zip.replace(reg, "");
    return zip;
}

// 휴대폰번호 체크
function check_phone_cell(phoneNumber) {
    // var regMobile = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // 휴대폰 번호 정규식
    var regMobile = /^010-?([0-9]{4})-?([0-9]{4})$/; // 휴대폰 번호 정규식
    var regLandline = /^0([2-7]{1}[0-9]{0,1})-?([0-9]{3,4})-?([0-9]{4})$/; // 유선 전화번호 정규식

    if (regMobile.test(phoneNumber) || regLandline.test(phoneNumber)) {
        return true; // 올바른 형식
    } else {
        return false; // 부적절한 조합
    }
}
// function check_phone_cell(user_phone_cell) {
//     // var reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // "-"가 있던 없던 무시
//     var reg = /^010-?([0-9]{4})-?([0-9]{4})$/; // "-"가 있던 없던 무시
//     if (!reg.test(user_phone_cell)) {
//         return false; // 부적절한 조합
//     } else {
//         return true;
//     }
// }

// 인증번호 체크
function check_email_auth_str(auth_str) {
    // console.log("auth_str", auth_str);
    // var reg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // "-"가 있던 없던 무시
    var reg = /^([0-9]{6})$/; // "-"가 있던 없던 무시
    if (!reg.test(auth_str)) {
        return false; // 부적절한 조합
    } else {
        return true;
    }
}

function replace_phone_cell(phone) {
    // 두번째 하이픈이 표시되지 않음
    console.log("phone", phone);
    if (phone) return phone.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, ""); // xxx-xxxx-xxxx
    // if(phone) return phone.replace(/^(\d{0,2})(\d{0,3})(\d{0,4})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, ""); // xx-xxxx-xxxx
    // return false;
}

function replace_phone(value) {
    if (!value) {
        return "";
    }

    value = value.replace(/[^0-9]/g, "");

    let result = [];
    let restNumber = "";

    // 지역번호와 나머지 번호로 나누기
    if (value.startsWith("02")) {
        // 서울 02 지역번호
        result.push(value.substr(0, 2));
        restNumber = value.substring(2);
    } else if (value.startsWith("1")) {
        // 지역 번호가 없는 경우
        // 1xxx-yyyy
        restNumber = value;
    } else {
        // 나머지 3자리 지역번호
        // 0xx-yyyy-zzzz
        result.push(value.substr(0, 3));
        restNumber = value.substring(3);
    }

    if (restNumber.length === 7) {
        // 7자리만 남았을 때는 xxx-yyyy
        result.push(restNumber.substring(0, 3));
        result.push(restNumber.substring(3));
    } else {
        result.push(restNumber.substring(0, 4));
        result.push(restNumber.substring(4));
    }

    return result.filter((val) => val).join("-");
}

// 날짜체크
function check_date(date) {
    var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
    if (regex.text(date)) return true;
    return false;
}

function replace_date(date) {
    // 두번째 하이픈이 표시되지 않음
    date = date.replace(/[^0-9]/g, "");
    if (date.length > 8)
        return date
            .substring(0, date.length - 1)
            .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1-$2-$3")
            .replace(/\-{1,2}$/g, "");
    // console.log(date);
    // console.log(date.length);
    // if(date) return date.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, ""); // xxx-xxxx-xxxx
    // if(date) return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    if (date) return date.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, "$1-$2-$3").replace(/\-{1,2}$/g, ""); // xx-xxxx-xxxx
    // return false;
}

// 모바일확인
function isMobile() {
    // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // 화면 크기로 판단
    return window.innerWidth <= 768;
}

function isMobileTablet() {
    // return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet/i.test(navigator.userAgent);
    // 화면 크기로 판단
    return window.innerWidth <= 1180;
}

// 받침이 있는 문자인지 확인 함수
const isSingleCharacter = function (text) {
    var strGa = 44032; // 가
    var strHih = 55203; // 힣

    var lastStrCode = text.charCodeAt(text.length - 1);

    if (lastStrCode < strGa || lastStrCode > strHih) {
        return false; //한글이 아닐 경우 false 반환
    }
    return (lastStrCode - strGa) % 28 == 0;
};

// '로' 가 붙어야 하는지 '으로'가 붙어야 하는지 체크해주는 함수
const roChecker = function (text) {
    return text + (isSingleCharacter(text) ? "로" : "으로");
};
// '를' 이 붙어야 하는지 '을'이 붙어야 하는지를 체크해주는 함수
const rulChecker = function (text) {
    return text + (isSingleCharacter(text) ? "를" : "을");
};

const gaChecker = function (text) {
    return text + (isSingleCharacter(text) ? "가" : "이");
};

var getCookie = function (name) {
    var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return value ? value[2] : null;
};

var setCookie = function (name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
};

var deleteCookie = function (name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/";
};

// 현내날짜시간반환
var getNow = function () {
    var today = new Date();

    var year = today.getFullYear();
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var day = ("0" + today.getDate()).slice(-2);
    var dateString = year + "-" + month + "-" + day;

    var hours = ("0" + today.getHours()).slice(-2);
    var minutes = ("0" + today.getMinutes()).slice(-2);
    var seconds = ("0" + today.getSeconds()).slice(-2);
    var timeString = hours + ":" + minutes + ":" + seconds;

    return dateString + " " + timeString;
};

// 3자리수 쉼표 처리
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 이메일 형식 체크
function checkEmail(str) {
    var reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(str)) {
        return false;
    } else {
        return true;
    }
}
// if(!checkEmail(obEmail.value))	{
// 	alert("이메일 형식이 잘못되었습니다");
// 	return;
// }

var isEmpty = function (value) {
    if (value == "false" || value == 0 || value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
        return true;
    } else {
        return false;
    }
};

function XSSCheck(str, level) {
    if (level == undefined || level == 0) {
        str = str.replace(/\<|\>|\"|\'|\%|\;|\(|\)|\&|\+|\-/g, "");
    } else if (level != undefined && level == 1) {
        str = str.replace(/\</g, "&lt;");
        str = str.replace(/\>/g, "&gt;");
    }
    return str;
}

/* 스토리지 제어 함수 정의 */
var handleStorage = {
    // 스토리지에 데이터 쓰기(이름, 만료일)
    setStorage: function (name, exp) {
        // 만료 시간 구하기(exp를 ms단위로 변경)
        var date = new Date();
        date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

        // 로컬 스토리지에 저장하기 (값을 따로 저장하지 않고 만료 시간을 저장)
        localStorage.setItem(name, date);
    },
    // 스토리지 읽어오기
    getStorage: function (name) {
        var now = new Date();
        now = now.setTime(now.getTime());
        // 현재 시각과 스토리지에 저장된 시각을 각각 비교하여 시간이 남아 있으면 true, 아니면 false 리턴
        return parseInt(localStorage.getItem(name)) > now;
    },
};

// asset
window.onload = function () {
    // .scroll_wrap > .txt > a 태그 클릭 시
};

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded");
    // 운영자산 앵커 클릭 시 스크롤 이동
    var linkElements = document.querySelectorAll(".target_list li a");
    linkElements.forEach(function (linkElement) {
        linkElement.addEventListener("click", function (event) {
            event.preventDefault();
            var target = document.querySelector("#" + linkElement.getAttribute("href"));
            var targetTop = target.offsetTop;
            window.scrollTo({
                top: targetTop - 75,
                behavior: "smooth",
            });
        });
    });

    //
});

// dday
function getDday(eddt) {
    let now = new Date();
    let eddt_date = new Date(eddt);
    let gap = eddt_date.getTime() - now.getTime();
    gap = Math.floor(gap / (1000 * 60 * 60 * 24));
    // gap = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
    console.log("gep", gap);
    if (gap < 0) {
        return false;
    } else {
        return "D-" + gap;
    }
}

// 레이어팝업 생성
function generateModalHTML(message = "", title = "Confirm", btn_name = "Close", action = "default", icon = "success") {
    fetch(modalFilePath)
        .then((response) => response.text())
        .then((html) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");

            // <p class="txt"> 요소의 내용을 가져옴
            // const txtContent = doc.querySelector("#modal_text").innerHTML;

            // 필요에 따라 내용을 수정
            // const content = '<a href="mailto:contact@jbrix.co.kr">contact@jbrix.co.kr</a>메일로<br>회원아이디와 비밀번호를 인증할 수 있는 메일이 발송되었습니다.';

            doc.querySelector("#modal_title").innerHTML = title;
            doc.querySelector("#modal_text").innerHTML = message;
            doc.querySelector("#modal_btn_close").innerHTML = btn_name;

            // <p class="txt"> 요소의 내용을 수정된 내용으로 변경
            // icon 클래스 추가
            doc.querySelector("#modal_title").classList.add(icon);


            // 수정된 내용이 적용된 HTML을 가져옴
            const dynamicHTML = doc.documentElement.innerHTML;

            // 동적으로 생성된 HTML을 컨테이너 요소에 추가
            const container = document.getElementById("container_layer_alert");
            // container.style.zIndex = "9999"; // z-index를 최상단으로 설정
            container.innerHTML = dynamicHTML;
            // document.body.innerHTML += dynamicHTML; // body에 직접 추가

            // 어떤 팝업인지 구분하기 위해 container 에 data-action 속성 추가
            document.getElementById("modal_btn_close").setAttribute("data-action", action);

            // $(".layer_alert").addClass("on");
            // $(".dim").css("display", "block").animate({ opacity: 1 }, 300);

            // 아래 showLayerAlertCenter() 내에서 스크립트로 On 반영
            // document.querySelector(".layer_alert").classList.add("on");

            // 레이어팝업 뷰포트 중앙에 배치
            showLayerAlertCenter();

            document.querySelector(".dim").style.display = "block";
            // document.querySelector(".dim").animate({ opacity: 1 }, 300);
            document.querySelector(".dim").style.opacity = "1";

        })
        .catch((error) => console.error("HTML 가져오기 오류:", error));
}

// 250531 아이프레임 로딩 시 중앙 정렬

let lastCenterY = null;
window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'VIEWPORT_CENTER') {
        lastCenterY = event.data.centerY;
        updatePopupPosition();
    }
});

function showLayerAlertCenter() {
    const popup = document.querySelector('.layer_alert');
    if (!popup) return;

    if (window.self !== window.top) {
        // 아이프레임 환경: 부모와 통신, MutationObserver, 위치 계산
        window.parent.postMessage({
            type: 'POPUP_HEIGHT',
            height: popup.offsetHeight
        }, '*');

        // // transition을 잠시 제거
        // popup.style.transition = 'none';
        // popup.style.opacity = '0';
        // popup.style.pointerEvents = 'none';

        // 위치 지정 (부모에서 받은 lastCenterY 사용)
        popup.style.position = 'absolute';
        popup.style.left = '50%';
        if (lastCenterY !== null) {
            popup.style.top = (lastCenterY + window.scrollY) + 'px';
            popup.style.transform = 'translateX(-50%)';
        } else {
            popup.style.top = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
        }
        // popup.style.zIndex = '9999';

        // 리플로우 강제 발생
        // void popup.offsetWidth;

        // transition을 다시 켜고, opacity를 1로
        // popup.style.transition = '';
        // popup.style.opacity = '1';
        // popup.style.pointerEvents = 'auto';
        popup.classList.add('on');

        // // transitionend 이벤트에서 인라인 스타일 제거 (닫힐 때)
        // popup.addEventListener('transitionend', function handleTransitionEnd(e) {
        //     if (!popup.classList.contains('on')) {
        //         popup.removeAttribute('style');
        //         popup.removeEventListener('transitionend', handleTransitionEnd);
        //     }
        // });

        // 닫힐 때 .on 클래스가 제거되면 transition 없이 즉시 숨김 처리 (아이프레임 환경에서만)
        // if (!popup._observerAdded) {
        //     const observer = new MutationObserver(function(mutations) {
        //         mutations.forEach(function(mutation) {
        //             if (
        //                 mutation.type === "attributes" &&
        //                 mutation.attributeName === "class" &&
        //                 !popup.classList.contains("on")
        //             ) {
        //                 popup.style.transition = "none";
        //                 popup.style.opacity = "0";
        //                 popup.style.pointerEvents = "none";
        //                 setTimeout(() => {
        //                     popup.removeAttribute("style");
        //                 }, 10);
        //             }
        //         });
        //     });
        //     observer.observe(popup, { attributes: true });
        //     popup._observerAdded = true;
        // }
    } else {
        // 일반 페이지: 항상 브라우저 중앙에 고정, transition 효과만 사용
        // popup.style.position = 'fixed';
        popup.style.top = '50%';
        // popup.style.left = '50%';
        // popup.style.transform = 'translate(-50%, -50%)';
        // popup.style.zIndex = '9999';
        // popup.style.opacity = '1';
        // popup.style.pointerEvents = 'auto';
        popup.classList.add('on');
        // transition 등은 CSS에서만 적용(필요시)

        // // transitionend 이벤트에서 인라인 스타일 제거 (닫힐 때)
        // popup.addEventListener('transitionend', function handleTransitionEnd(e) {
        //     if (!popup.classList.contains('on')) {
        //         popup.removeAttribute('style');
        //         popup.removeEventListener('transitionend', handleTransitionEnd);
        //     }
        // });
    }
}

function updatePopupPosition() {
    const popup = document.querySelector('.layer_alert.on');
    if (!popup) return;
    if (window.self !== window.top && lastCenterY !== null) {
        popup.style.top = (lastCenterY + window.scrollY) + 'px';
        popup.style.transform = 'translateX(-50%)';
    } else {
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
    }
}

// 레이어팝업 닫기 버튼 이벤트 핸들러 /template-parts/popup.html
$(document).on("click", "#modal_btn_close, .layer_close", function () {

    let action = $(this).attr("data-action");

    $(".layer_alert").removeClass("on");
    // 오류 팝업일 경우에는 dim을 유지
    if(action != "invalid") {
        $(".dim").fadeOut();

    } else {
        $(".layer_mailing").addClass("on");
        $(".layer_mailing").css("opacity", "1");
        setTimeout(function() {
            $("#phone_nl_wrap").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
        }, 200);
    }
    // 0.5초 후 생성한 코드 삭제
    setTimeout(function () {
        const container = document.getElementById("container_layer_alert");
        container.innerHTML = "";
    }, 500);
});


function shareOnTwitter() {
    var url = window.location.href;
    var shareUrl = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(url);
    window.open(shareUrl, "_blank");
}

function shareOnFacebook() {
    var url = window.location.href;
    var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
    window.open(shareUrl, "_blank");
}