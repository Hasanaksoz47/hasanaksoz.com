// Custom Script
// Developed by: Samson.Onna
var customScripts = {
    profile: function () {
        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
            $('.navbar-inverse').on('click', 'li a', function () {
                $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
            });
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });
                return false;
            });
            $(window).smartresize(function () {
                $container.isotope({
                    // update columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });
        }
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {

        if ($('#main-nav ul li:first-child').hasClass('active')) {
            $('#main-nav').css('background', 'none');
        }
        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting

            },
            end: function () {
                //I get fired when the animation is ending
                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    $('.header').addClass('addBg');
                } else {
                    $('.header').removeClass('addBg');
                }

            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
                if (!$('#main-nav ul li:first-child').hasClass('active')) {
                    $('.header').addClass('addBg');
                } else {
                    $('.header').removeClass('addBg');
                }
            }
        });
    },
    slider: function () {
        $('#da-slider').cslider({
            autoplay: true,
            bgincrement: 0
        });
    },
    owlSlider: function () {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.slider();
        customScripts.owlSlider();
        customScripts.bannerHeight();
    }
}
$('document').ready(function () {
    customScripts.init();
    $('#diagram-id-1').diagram({
        size: "190",
        borderWidth: "10",
        bgFill: "#95a5a6",
        frFill: "#3498db",
        textSize: 54,
        textColor: '#1a1a1a'
    });
    $('#diagram-id-2').diagram({
        size: "190",
        borderWidth: "10",
        bgFill: "#95a5a6",
        frFill: "#3498db",
        textSize: 54,
        textColor: '#333'
    });

    $('#diagram-id-3').diagram({
        size: "190",
        borderWidth: "10",
        bgFill: "#95a5a6",
        frFill: "#3498db",
        textSize: 54,
        textColor: '#1a1a1a'
    });
    $(window).load(function () {
        $('#filter .current').trigger('click');
    });
});




document.getElementById('contactfrm').addEventListener('submit', function (event) {
    event.preventDefault(); // Formun normal gönderilmesini engelle

    // Formdan verileri al
    var kullanıcıAdı = document.getElementById('name').value;
    var eposta = document.getElementById('email').value;
    var mesaj = document.getElementById('comments').value;

    // Telegram Bot API URL'si
    var token = "7782206979:AAG-FzYPUbbK9jg-KZjDpmlktdPQVRC-ALc";
            var chatId = "5312871954";

    var url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Mesaj içeriğini oluştur
    var text = `Kullanıcı yorumu  :):\n\nKullanıcı Adı: ${kullanıcıAdı}\nTelefon numarası, kullanıcı adı veya e-posta: ${eposta}\nMesaj: ${mesaj}`;

    // Veriyi Telegram API'sine gönder
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log("Mesaj gönderildi:", data);
        })
        .catch(error => {
            console.error("Hata:", error);
            alert("Bir hata oluştu, lütfen tekrar deneyin.");
        });
});
