$(document).ready(function(){
            //opup manu
            var popUp="<div class='popup'></div>";
            $('.btnMenu').click(function(){
                $('body').append(popUp);
                $('.popMenu').css({"left":"0px"});
                //  alert(1);
               
            });



            $('body').on('click','.popup',function(){
                $(this).remove();
                 $('.popMenu').css({"left":"-282px"});
            });

            //back button to homepage
            
            $('.btnBack').click(function(){
                window.location.href = '/index.html'; // ផ្លាស់ប្តូរទៅ URL ដើម
            });



            
        
     
});