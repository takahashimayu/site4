'use strict';

window.onload = function() {
    // 共通初期処理
    commonInit();

}

// 入力文字数カウント
function showLength(str) {
    let length = document.getElementById('show-length');
    length.innerText = str.trim().length;
    if(str.trim().length > 200) {
        length.style.color = 'red';
    }
    else {
        length.style.color = 'gray';
    }
}

// 入力文字数制限
function checkValue() {
    let target = document.getElementsByClassName('length-check');
    let alertMessage = document.getElementsByClassName('alert-message')[0];

    for(let i = 0; i < target.length; i++) {
        if( target[i].value.trim().length > 200 ) {
            alertMessage.innerText = 'お問合せ内容は200字以内で入力してください';
            return false;
        }
    }
    return true;
}
