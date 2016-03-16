$(document).ready(function() {
	function test_match_media_with_listener(){
        var mq = window.matchMedia("(max-width: 630px)");
        mq.addListener(changeWidth);
        changeWidth(mq);

        function changeWidth(mq) {
            if(mq.matches) {
                console.log('yes')
            } else {
                console.log('no');
            }
        }
    }

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

    toggleMenu();

});