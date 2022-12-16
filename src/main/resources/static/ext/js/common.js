$(function() {

    //fold panel    
    $('.btn_fold').on('click', function(e) {

        e.preventDefault();
        
        if (!$(this).parents('.container').hasClass('active')) {
            $(this).parents('.container').addClass('active');
            $(this).text('�쇱튂湲�');
        }
        else {
            $(this).parents('.container').removeClass('active');
            $(this).text('�묎린');
        }
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
    });

    //tab
    $('.tab_cont').addClass('blind');
    $('.tabs li:first').addClass('active').show();
    $('.tab_container .tab_cont:first').removeClass('blind');

    $('.tabs li').on('click', function(e) {
        e.preventDefault();
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_cont').addClass('blind');

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).removeClass('blind');
        return false;
    });

    //contents resizable
    $( ".contents .aside_cont" ).resizable({
        minWidth: 560,
        maxWidth: 1100,
        handles: "w",
        resize: function(w, ui){
            var currentWidth = ui.size.width;
            //var gap = 0;
            //currentWidth += gap;
            $('.contents .main_cont').css("width", "calc(100% - "+ currentWidth +"px)");
        }
    });

    //datepicker
    $('.calendar').each(function() {
        $(this).datepicker({ dateFormat: 'yy-mm-dd' });
        $(this).datepicker();
    });

    //checked all selection
    $('.check_all').on('click',function(){
        var adminCheckYN = $(this).prop("checked");
            sch =  $(this).attr('name');
        if(adminCheckYN){
            $("input.chk[name=" + sch + "]").prop("checked",true);
        }else{
            $("input.chk[name=" + sch + "]").prop("checked",false);
        }
    });
    $('.chk').on('click',function(){
        var sch =  $(this).attr('name');
        if( $(".chk[name=" + sch + "]").not('.check_all').length == $(".chk[name=" + sch + "]:checked").not('.check_all').length ){
            $(".check_all[name=" + sch + "]").prop("checked",true);
        } else {
            $(".check_all[name=" + sch + "]").prop("checked",false);
        }
    });

    //layer popup
    $('.open_pop').click(function(){
        var $href = $(this).attr('href');
        layer_popup($href);
    });
    
    function layer_popup(el){

        var $el = $(el);
        
        $el.addClass('active');
        $('.wrap').css('position','fixed');
        $el.find('.btn_close').click(function(){
            $el.removeClass('active');
            $('.wrap').css('position','relative');
            return false;
        });
        
    }

    //layer popup (fold_pan)
    var pop_s = $('.detail_pop_wrap');

    $('.open_pop_s').click(function(){
        $(pop_s).show();
    });
    $('.detail_pop_wrap').find('.btn_close').click(function(){
        $(pop_s).hide();
        return false;
    });

});