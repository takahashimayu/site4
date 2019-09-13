;(function($){

$.fn.getvideodata = function(options) {
    let opts = $.extend({}, $.fn.getvideodata.defaults, options);

    let url = 'https://www.googleapis.com/youtube/v3/search?';  // API URL

    url += 'type=video';                                // 動画を検索する
    url += '&part=' + opts.part;                        // 動画結果にすべてのプロパティを含む
    url += '&q=' + opts.q;                              // 検索ワード
    url += '&videoEmbeddable=' + opts.videoEmbeddable;  // Webページに埋め込み可能な動画のみを検索
    url += '&videoSyndicated=' + opts.videoSyndicated;  // youtube.com 以外で再生できる動画のみに限定
    url += '&maxResults=' + opts.maxResults;            // 動画の最大取得件数
    url += '&key=' + opts.key;                          // API KEY

    // ajax
    $.get(url, {}, function(data){
        opts.callback(data)
    });

    return this;
};

$.fn.getvideodata.defaults = {
    q: '',
    part: 'snippet',
    videoEmbeddable: 'true',
    videoSyndicated: 'true',
    maxResults: '6',
    key: '',
    callback: function(data){}
};

})(jQuery);