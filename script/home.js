'use strict';

$(function(){

    // 入力文字数表示
    $('#input-content')
        .keyup(function(){
            let length = $(this).val().trim().length;
            let color = (length > 200) ? 'red' : 'gray';

            $('#text-length')
                .text(length)
                .css('color', color);
        });

    // 「送信」ボタンクリック時
    $('#form-submit')
        .click(function(){
            let target = $('#input-content');
            // 入力内容が200字より多い場合、メッセージを表示
            if( target.val().trim().length > 200 )
                $('.alert-message').text('お問合せ内容は200字以内で入力してください');
        });

});
