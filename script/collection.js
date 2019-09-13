'use strict';

// イラストギャラリーデータの作成
let dogData = [
    {src: 'img/illustrain02-dog01.png', alt: 'パグ・・・愛嬌たっぷり'},
    {src: 'img/illustrain02-dog02.png', alt: 'チン・・・小さくて従順'},
    {src: 'img/illustrain02-dog03.png', alt: '柴犬・・・犬の中でも特に忠義心が強い'},
    {src: 'img/illustrain02-dog04.png', alt: 'シーズー・・・犬の中でも優美'},
    {src: 'img/illustrain02-dog05.png', alt: 'チャウチャウ・・・しつけの難易度は上級者向け'},
    {src: 'img/illustrain02-dog06.png', alt: 'ブルドッグ・・・牛や熊に対抗できる犬'},
    {src: 'img/illustrain02-dog07.png', alt: 'ハスキー・・・見かけによらずお茶目で友好的'},
    {src: 'img/illustrain02-dog08.png', alt: 'チワワ・・・犬の中でも賢い'},
    {src: 'img/illustrain02-dog09.png', alt: 'シュナイザー・・・バランスの取れている犬種'},
    {src: 'img/illustrain02-dog10.png', alt: 'ポメラニアン・・・犬の中でも真ん丸'},
    {src: 'img/illustrain02-dog11.png', alt: 'ブルテリア・・・勇ましく闘う犬'},
    {src: 'img/illustrain02-dog12.png', alt: 'ダルメシアン・・・生まれたばかりは真っ白'},
    {src: 'img/illustrain02-dog13.png', alt: 'シェパード・・・信頼できる家族の一員に'},
    {src: 'img/illustrain02-dog14.png', alt: 'ビーグル・・・犬の中でもお利口'},
    {src: 'img/illustrain02-dog15.png', alt: 'マルチーズ・・・犬の中でも高貴'},
    {src: 'img/illustrain02-dog16.png', alt: 'ヨークシャテリア・・・毛並みが美しい'},
    {src: 'img/illustrain02-dog17.png', alt: 'ラブラドールレトリバー・・・賢く忠誠心溢れる種類'},
    {src: 'img/illustrain02-dog18.png', alt: 'コーギー・・・運動量が多い活発な犬種'},
    {src: 'img/illustrain02-dog19.png', alt: 'ダックスフンド・・・犬の中でも怖いもの知らず'},
    {src: 'img/illustrain02-dog20.png', alt: 'プードル・・・従順でしつけもしやすい'},
    {src: 'img/illustrain02-dog21.png', alt: 'ぶち犬'},
    {src: 'img/illustrain02-dog22.png', alt: '黒い犬'},
    {src: 'img/illustrain02-dog23.png', alt: '白い犬'}
];
let catData = [
    {src: 'img/illustrain02-cat11.png', alt: 'ロシアンブルー・・・用心深く内気で大人しい性格'},
    {src: 'img/illustrain02-cat12.png', alt: 'ラグドール・・・その名前の通り人形のように愛らしい'},
    {src: 'img/illustrain02-cat13.png', alt: 'メインクーン・・・大きい体で世界一しっぽが長い猫'},
    {src: 'img/illustrain02-cat14.png', alt: 'マンチカン・・・手足が短く非常に可愛らしい人気の猫種'},
    {src: 'img/illustrain02-cat15.png', alt: 'ボンベイ・・・漆黒で小さな黒豹のような猫'},
    {src: 'img/illustrain02-cat16.png', alt: 'ベンガル・・・とても大人しくおしとやかな性格'},
    {src: 'img/illustrain02-cat17.png', alt: 'ペルシャ猫・・・長毛で非常に美しい猫種'},
    {src: 'img/illustrain02-cat18.png', alt: 'ブリティッシュショートヘア・・・「不思議な国のアリス」のモデルになった猫'},
    {src: 'img/illustrain02-cat19.png', alt: 'ヒマラヤン・・・ふわふわの毛で温厚な性格'},
    {src: 'img/illustrain02-cat20.png', alt: 'バーマン・・・丸い顔と個性的な鼻が特徴'},
    {src: 'img/illustrain02-cat21.png', alt: 'ノルウェージャンフォレストキャット・・・愛らしい表情と大きな身体つきが特徴的'},
    {src: 'img/illustrain02-cat22.png', alt: '猫のスフィンクス・・・大きな目と耳、しわくちゃな肌を持った猫'},
    {src: 'img/illustrain02-cat23.png', alt: 'スコティッシュフィールド・・・甘えん坊で寂しがり屋'},
    {src: 'img/illustrain02-cat24.png', alt: 'シャム猫・・・キレイなサファイアブルーの目が印象的'},
    {src: 'img/illustrain02-cat25.png', alt: 'サイベリアン・・・温和で従順、賢く辛抱強い猫'},
    {src: 'img/illustrain02-cat26.png', alt: 'キムリック・・・用心深く、抜け目がない'},
    {src: 'img/illustrain02-cat27.png', alt: 'オリエンタル・・・シャムの血を引いている'},
    {src: 'img/illustrain02-cat28.png', alt: 'エキゾチックショートヘア・・・やさしく決して怒らない温厚な性格'},
    {src: 'img/illustrain02-cat29.png', alt: 'アンゴラ・・・「歌いながら歩く猫」、「バレリーナのような猫」'},
    {src: 'img/illustrain02-cat30.png', alt: 'アメリカンショートヘア・・・活発で陽気、人懐っこい性格'},
    {src: 'img/illustrain02-cat07.png', alt: 'ぶち猫'},
    {src: 'img/illustrain02-cat08.png', alt: 'トラ猫'},
    {src: 'img/illustrain02-cat09.png', alt: '黒猫'},
    {src: 'img/illustrain02-cat10.png', alt: '白猫'}
];

$(function(){
  
    // リクエストを取得する
    let animalType = location.search.split('=')[1];

    // イラストギャラリーデータを取得する
    let illustData = (animalType === 'cat') ? catData : dogData;

    // メインタイトルを表示する
    let mainTitle = $('.main .main-title h2');
    mainTitle.text(animalType.charAt(0).toUpperCase() + animalType.slice(1) + '\'s Gallery');

    // サムネイルイメージを表示する
    let thumbFlame = $('.collection aside .container');
    for (let i = 0; i < illustData.length; i++) {
        let thumbImage = $('<img>')
                            .attr('src', illustData[i].src)
                            .attr('alt', illustData[i].alt)
                            .addClass('thumb-img')
                            .addClass(animalType)
        thumbFlame.append(thumbImage);
    }

    // メインイメージ領域に最初のデータを表示する
    let mainImage = $('<img>')
                        .attr('src', illustData[0].src)
                        .attr('alt', illustData[0].alt);

    let mainMsg = $('<p>')
                    .text(mainImage.attr('alt'));

    let mainFlame =$('.collection .main-image')
                        .append(mainMsg)
                        .append(mainImage);

    // クリックした画像をメインにする
    $('body').on('click', '.thumb-img', function() {
        mainImage
            .attr('src', $(this).attr('src'))
            .attr('alt', $(this).attr('alt'));
        mainMsg
            .text($(this).attr('alt'));
    });

});
