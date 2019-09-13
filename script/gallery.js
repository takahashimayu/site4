// APIキー「AIzaSyDVtxxEekoE1oSleI642JgjGa3Xs9q6IuY」

'use strict';

let illustData = [
    {src: 'img/bambi_l.png', message: 'バンビ'},
    {src: 'img/butterfly1.png', message: '蝶々'},
    {src: 'img/picnic.png', message: 'ピクニック'},
    {src: 'img/cake4.png', message: 'ベリーのケーキ'},
    {src: 'img/hibiscus_l.png', message: 'ハイビスカス'},
];

let num = -1;

$(function(){

    // スライドショー処理
    slideshow_timer();

    // VideoList取得＆表示
    $(this).getvideodata({
        q: $('#search-val').attr('placeholder'),
        key: 'AIzaSyDVtxxEekoE1oSleI642JgjGa3Xs9q6IuY',
        callback: setVideoList
    });

    // 検索用インプットテキストEnter時
    let searchTxt = $('#search-val');
    searchTxt
        .keyup(function(e){
            // EnterKeyでない場合、処理を終了する
            if (e.keyCode !== 13 || (e.keyCode === 13 && (e.shiftKey || e.altKey || e.ctrlKey)))
                return;
            
            // 検索文字列を取得
            let value = searchTxt.val();

            if(value) {
                // VideoList取得＆表示
                $(this).getvideodata({
                    q: value,
                    key: 'AIzaSyDVtxxEekoE1oSleI642JgjGa3Xs9q6IuY',
                    callback: setVideoList
                });
            }
        });

    // 検索ボタン押下時
    $('.fa-search')
        .click(function(){
            // 検索文字列を取得
            let value = searchTxt.val();

            if(value) {
                // VideoList取得＆表示
                $(this).getvideodata({
                    q: value,
                    key: 'AIzaSyDVtxxEekoE1oSleI642JgjGa3Xs9q6IuY',
                    callback: setVideoList
                });
            }
        });

    // スライドショー関数
    function slideshow_timer() {
        num = (num + 1) % illustData.length;
        
        let illustItem = $('.video .main .illust-gallery img')
                            .attr('src', illustData[num].src)
                            .attr('alt', illustData[num].message);

        setTimeout(slideshow_timer, 5000);
    }

    // video List 表示
    function setVideoList(data) {
        let videoList = $('#videoList')
                            .empty();

        // 動画を表示するHTMLを作る
        for (let i = 0; i < data.items.length; i++) {
            let videoItem = $('<div>')
                            .addClass('video-item');
            let iframe = $('<iframe>')
                            .attr('src', 'https://www.youtube.com/embed/' + data.items[i].id.videoId)
                            .attr('allowfullscreen', true);
            iframe.appendTo(videoItem);
            videoItem.appendTo(videoList);
        }
    }

});
