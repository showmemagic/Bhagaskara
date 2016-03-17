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

    function checkForm() {
        var form = document.getElementsByTagName("form")[0];
        var nameInput = document.getElementById("name");
        var emailInput = document.getElementById("email");

        form.addEventListener("submit", function(event){
            var name = nameInput.value;
            var email = emailInput.value;

            if(email.indexOf("@")===-1){
                console.log("Zły mail");
                event.preventDefault();
            }
            if(name.length < 3) {
                console.log("Zły name");
                event.preventDefault();
            }
        });
    }

    checkForm();

});