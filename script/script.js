'use strict';

// レスポンシブ対応用
const mobile = 0;
const tablet = 1;
const computer = 2;

$(function(){

    // コンピュータ操作か
    let isComputer = getUserTerminal() === computer;

    // アコーディオン動作を設定
    $('.accordion')
        .click(function(){
            $(this).toggleClass('hide');
        })
        .mouseover(function(){
            if( isComputer ) $(this).removeClass('hide');
        })
        .mouseout(function(){
            if( isComputer ) $(this).addClass('hide');
        })

    // イラストコレクションリスト　クリック時
    $('.collection-list')
        .click(function(){
            window.location.href = 'collection.html?animaltype=' + $(this).data('animaltype');
        });

    //　トップへもどるボタンクリック時
    $('.top-btn')
        .click(function(){
            scrollTo(0, 0);
        });

    // ハンバーガーメニューbutton押下時
    $('header .nav-toggle')
        .click(function(){
            $(this).toggleClass('close-btn');
            $('header').toggleClass('close-list');
        });

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

});