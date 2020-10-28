$(function(){
    $('div').click(function (e) { 
        e.preventDefault();
        if($('textarea').css('left')=='0px'){
            $('textarea').removeClass('.tt1').addClass('.tt2');
        }
        else{
            $('textarea').removeClass('.tt2').addClass('.tt1');
        }
    });
});