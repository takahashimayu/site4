// APIキー「AIzaSyDVtxxEekoE1oSleI642JgjGa3Xs9q6IuY」

'use strict';

let illustData = [
    {src: 'img/bambi_l.png', message: 'バンビ'},
    {src: 'img/butterfly1.png', message: '蝶々'},
    {src: 'img/picnic.png', message: 'ピクニック'},
    {src: 'img/cake4.png', message: 'ベリーのケーキ'},
    {src: 'img/hibiscus_l.png', message: 'ハイビスカス'},
    // {src: 'img/', message: ''},
];

let num = -1;

window.onload = function() {
    // 共通初期処理
    commonInit();

    // スライドショー処理
    slideshow_timer();

    // VideoList表示
    showVideoList('ヒカキン');

    // 検索用インプットテキストEnter時
    let searchTxt = document.getElementById('search-val');
    searchTxt.addEventListener('keyup', function(e){
        // EnterKeyでない場合、処理を終了する
        if (e.keyCode !== 13 || (e.keyCode === 13 && (e.shiftKey || e.altKey || e.ctrlKey)))
            return;
        
        // 検索文字列を取得
        let value = searchTxt.value;

        // VideoList取得＆表示
        showVideoList(value);
    }, false);

    // 検索ボタン押下時
    let searchBtn = document.querySelector('.fa-search');
    searchBtn.addEventListener('click', function(){
        // 検索文字列を取得
        let value = searchTxt.value;

        // Videolist取得＆表示
        showVideoList(value);
    }, false);
}

// スライドショー関数
function slideshow_timer() {
    num = (num + 1) % illustData.length;
    
    let illustItem = document.querySelector('.video .main .illust-gallery img');
    illustItem.setAttribute('src', illustData[num].src);
    illustItem.setAttribute('alt', illustData[num].message);

    setTimeout(slideshow_timer, 5000);
}

// 動画リスト取得＆表示処理
function showVideoList(value) {

    if(!value) return;

    // リクエストパラメータのセット
    const KEY = 'AIzaSyDVtxxEekoE1oSleI642JgjGa3Xs9q6IuY';      // API KEY
    let url = 'https://www.googleapis.com/youtube/v3/search?';  // API URL

    url += 'type=video';                // 動画を検索する
    url += '&part=snippet';             // 動画結果にすべてのプロパティを含む
    url += '&q=' + value;               // 検索ワード
    url += '&videoEmbeddable=true';     // Webページに埋め込み可能な動画のみを検索
    url += '&videoSyndicated=true';     // youtube.com 以外で再生できる動画のみに限定
    url += '&maxResults=6';             // 動画の最大取得件数
    url += '&key=' + KEY;               // API KEY

    // fetch API
     fetch(url, {
        method: 'GET'
    })
    .then((response) => response.text())
    .then((text) => {
        let data = JSON.parse(text);
        let result = '';
        let video = '';

        // 動画を表示するHTMLを作る
        for (let i = 0; i < data.items.length; i++) {
            video = '<iframe src="https://www.youtube.com/embed/';
            video += data.items[i].id.videoId;
            video += '" allowfullscreen></iframe>';
            result += '<div class="video-item">' + video + '</div>';
        }

        // HTMLに反映する
        document.getElementById('videoList').innerHTML = result;
    })
    .catch((error) => console.log(error));
}


