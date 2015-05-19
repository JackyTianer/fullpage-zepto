/**
 * Created by jackytianer on 15/5/11.
 */
define(['zepto', 'touch'], function($) {
    'use strict';
    $.fn.scrollScreen = function(options) {
        return this.each(function() {
            new ScrollScreen(this, options);
        });
    };
    var ScrollScreen = function(dom, options) {
        var height = $(window).height();
        $(dom).css('height', height).show();
        options.screenCotent.css('height', height).on('swipeUp swipeDown', function(e) {
            var id = $(this).index() + 1;
            var length = options.screenCotent.length;
            if (id) {
                if (e.type === 'swipeUp' && id < $('.viewframe').length) {
                    $('.content').css('-webkit-transform', 'translateY(-' + parseInt(id) * 100 / length + '%)');
                } else if (e.type === 'swipeDown' && id > 1) {
                    $('.content').css('-webkit-transform', 'translateY(-' + (parseInt(id) - 2) * 100 / length + '%)');
                }
            }
        });
    };
});

