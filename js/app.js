$(document).ready(function() {
	function test_match_media_with_listener(){
        var mq = window.matchMedia("(max-width: 630px)");
        mq.addListener(changeWidth);
        changeWidth(mq);

        
    }

//*****************************HAMBURGER MENU********************************//
    function toggleMenu() {
        var hamburger = $(".hamburger");
        var menu = $(".menu");
        function changeWidth(mq) {
            if(mq.matches) {
                menu.hide();
                hamburger.show();
            } else {
                menu.show();
                hamburger.hide();
            }
        }
            
            hamburger.on("click", function(event) {
                menu.toggle();
            });

            var mq = window.matchMedia("(max-width: 630px)");
            mq.addListener(changeWidth);
            changeWidth(mq);
        }

    
//******************************VLIDATE INPUT********************************//
    function checkForm() {
        var form = $("form");
        var nameInput = $("#name");
        var emailInput = $("#email");
        var messageInput = $("#message");
        
        
        $(nameInput).on("blur", function(event) {
            var input = $(this);
            var name = $(nameInput).val();

            if(name.length <= 3){
                input.addClass("invalid");
                $(this).attr("placeholder", "Incorrect name");
            }
            else {
                input.removeClass("invalid");
            }
        });

        $(emailInput).on("blur", function(event) {
            var input = $(this);
            var email = $(emailInput).val();
            var sings = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
            var isEmail = sings.test(email);
            var message = $(messageInput).val();
            if (isEmail === false) {
                input.addClass("invalid");
                $(this).attr("placeholder", "Incorrect email");
            }
            else {
                input.removeClass("invalid");
            }
        });

        $(messageInput).on("blur", function(event) {
            var input = $(this);
            

            if(message.length < 10) {
                input.addClass("invalid");
                $(this).attr("placeholder", "Please, type your message");
            }
            else {
                input.removeClass("invalid");
            }
        });

        $(form).on("submit", function(event){
            var name = $(nameInput).val();
            var email = $(emailInput).val();
            var message = $(messageInput).val();
            
            if (nameInput.hasClass("invalid") || emailInput.hasClass("invalid") || messageInput.hasClass("invalid") || name.length === 0 || email.length === 0 || message.length === 0) {
                event.preventDefault();
                alert("Please, fill in all the fields or check your submission.")
            }
        });

    } 

//*********************************HEADER ICONS*******************************//

    function scrollDown() {
        var body = $("body");
        var links = $(".shape").find("a");
        var bottomLink = $(".littleShape").find("a");

        links.click(function(event) {
            body.animate({
                scrollTop: $($(this).attr("href")).offset().top}, "slow");
            event.preventDefault();
        });

        bottomLink.click(function(event) {
            body.animate({
                scrollTop: $($(this).attr("href")).offset().top}, "slow");
            event.preventDefault();
        });

    }

//*****************************STICKY MENU***********************************//

    function stickyMenu() {
        var navElement = $("nav");
        var stickyElement = navElement.find(".navContainer")
        var navTop = navElement.offset().top;

        function setSticky() {
            var windowScroll = $(window).scrollTop();
            if (windowScroll > navTop) {
                stickyElement.addClass("sticky");
            }
            else {
                stickyElement.removeClass("sticky");
            }
        }

        $(window).scroll(function(event) {
            setSticky();
        });

        $(window).resize(function(event) {
            navTop = navElement.offset().top;
            setSticky();
        
        });
    }
//**********************************MENU SLIDE*******************************//

    function menuScroll() {
        var body = $("body");
        var links = $(".menu").find("a");

        links.click(function(event) {
            body.animate({
                scrollTop: $($(this).attr("href")).offset().top}, "slow");
            event.preventDefault();
        });

    }

//********************************GALLERY HOVER******************************//

    function photoHover() {
        var photo = $(".gallery").find("img");

        photo.on("mouseenter", function(event) {
            $(this).css("cursor", "pointer");
            $(this).addClass("gray");
            $(this).prev().children(".cross").fadeIn("slow");
        });
        photo.on("mouseleave", function(event) {
            $(this).css("cursor", "default");
            $(this).removeClass("gray");
            $(this).prev().children(".cross").fadeOut("slow");
        })
    }

//***************************GALLERY ZOOM IMAGES******************************//
    function zoomImages() {
        var ovr = $('#overlay');
        var photo = $(".gallery").find("img");

        photo.on("click", function(){  
            ovr.fadeTo(600,1).css({
                backgroundImage:"url("+this.src+")"
            });  
        });
        ovr.on("click", function(){
            $(this).stop().fadeTo(600,0,function(){
                $(this).hide();
            });
        });
    }

    
//****************************GALLERY LOAD MORE IMAGES***********************//
    function loadImages() {
        $(".gallery .photo:lt(6)").show();
        var items =  15;
        var shown =  6;
        $("#showMore").click(function () {
            event.preventDefault();
            $("#showLess").css("display", "flex");
            shown = $(".gallery .photo:visible").size()+2;
            if(shown < items) {
                $(".gallery .photo:lt("+shown+")").show();
            }
            else {
                $(".gallery .photo:lt("+items+")").show();
                $("#showMore").hide();
            }
        });

        $("#showLess").click(function () {
            $(".gallery .photo").not(":lt(6)").hide();
            $("#showLess").hide();
            event.preventDefault();
        });
    }

//*********************************MIXITUP*********************************//

    $(function(){
        $("#imageGallery").mixItUp();
        $("#imageGallery").mixItUp("filter", ".initial");
    });


    toggleMenu();
    checkForm();
    scrollDown();
    stickyMenu();
    menuScroll();
    photoHover();
    zoomImages();
    loadImages();

});