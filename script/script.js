'use strict';

// レスポンシブ対応用
const mobile = 0;
const tablet = 1;
const computer = 2;

// collection.htmlへの画面遷移
function transitionPage(type) {
    location.href = `collection.html?type=${ type }`;
}

// 共通処理
function commonInit() {

    // アコーディオン
    let collectionList = document.querySelector('.accordion');

    // Illustration Collection クリック時
    collectionList.addEventListener('click', function(){
        this.classList.toggle('hide');
    }, false);
    if( getUserTerminal() === 2 ) {
        // Illustration Collection マウスオーバー時
        collectionList.addEventListener('mouseover', function(){
            this.classList.remove('hide');
        }, false);
        // Illustration Collection マウスアウト時
        collectionList.addEventListener('mouseout', function(){
            this.classList.add('hide');
        }, false);
    }

    //　トップへもどるボタンクリック時
    let topButton = document.getElementsByClassName('top-btn');
    if (topButton.length !== 0) {
        topButton[0].addEventListener('click', function(){
            scrollTo(0, 0);
        }, false);
    }

    // ハンバーガーメニューbutton押下時
    let toggleBtn = document.querySelector('header .nav-toggle');
    toggleBtn.addEventListener('click', function(){
        this.classList.toggle('close-btn');
        document.querySelector('header').classList.toggle('close-list');
    }, false);
}

// 操作端末取得
function getUserTerminal() {
    if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
        return mobile;
    }
    else if (window.matchMedia('(max-width: 768px)').matches) {
        return tablet;
    }
    else if (window.matchMedia('(min-width: 769px)').matches) {
        return computer;
    }
    return '';
}