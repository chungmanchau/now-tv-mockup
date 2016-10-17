$(function() {
    $('.animate').not('.load').each(function(i) {
        var $this = $(this);
        var ind = i * 120;
        setTimeout(function() {
            $this.addClass('load');
        }, ind);
    });
});