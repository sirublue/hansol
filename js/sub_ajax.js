$(function(){
    $('#cont_left').load("sub01_left.txt");
    $('#cont_right').load("sub01_right.txt");

    $('#sub01_btn').on('click',function(){
        $('#cont_left').load("sub01_left.txt");
        $('#cont_right').load("sub01_right.txt");
    })
    $('#sub02_btn').on('click',function(){
        $('#cont_left').load("sub02_left.txt");
        $('#cont_right').load("sub02_right.txt");
    })
    $('#sub03_btn').on('click',function(){
        $('#cont_left').load("sub03_left.txt");
        $('#cont_right').load("sub03_right.txt");
    })
})