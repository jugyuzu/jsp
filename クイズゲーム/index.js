/*59行目にリファクタリングした問題文等がある
//問題文
const question = '新規下腿切断者が作る最初の義足として一般的なのはどれ?';
//選択肢
const answers = [
    '仮義足',
    '大腿義足',
    '下腿義足',
    '上腕義手'
];

//回答
const correct = '仮義足';

//問題文をid=js-questionに表示
//document.getElementById('js-question').textContent = question;

/*
//選択肢をtagのbuttonに表示
for(let i=0; i<answers.length; i++){
    document.getElementsByTagName('button')[i].textContent = answers[i];
}

//タグbuttonをclick時にcorrectとbuttonのテキストが同じか判定する
document.getElementsByTagName('button')[0].addEventListener('click', () => {
    if(correct === document.getElementsByTagName('button')[0].textContent){
        window.alert('正解');
    }else{
        window.alert('不正解');
    }
});
これをボタン分用意
*/
//上のままだと長いのでリファクタリング


//定数buttonに共通する部分を代入オブジェクトを取得している場合は先頭に$をつける
const $button = document.getElementsByTagName('button');

/*
回答1
//選択肢をtagのbuttonに表示
for(let i=0; i<answers.length; i++){
    $button[i].textContent = answers[i];
}

//タグbuttonをclick時にcorrectとbuttonのテキストが同じか判定する
for(let i=0; i<answers.length; i++){
    $button[i].addEventListener('click', () => {
        if(correct === $button[i].textContent){
            window.alert('正解');
        }else{
            window.alert('不正解');
        }
    });
}
*/

//最適解
const quiz = [
    {
        question: '新規下腿切断者が作る最初の義足として一般的なのはどれ?',
        answers: ['仮義足',
                '大腿義足',
                '下腿義足',
                '上腕義手'
            ],
        correct:'仮義足'
    },
    {
        question: '治療用装具で使えない保険はどれ',
        answers: ['国民健康保険',
                '協会けんぽ',
                '組合保険',
                '介護保険'
            ],
        correct:'介護保険'
    },
    {
        question: '継ぎ手付きの短下肢装具を処方する際,不適切な症例はどれ',
        answers: ['最大背屈角度が5度以上',
                '発症後の弛緩期',
                '脳梗塞後遺症',
                '今まで患者が使っていた装具が継ぎ手付きの場合'
            ],
        correct:'発症後の弛緩期'
    }
];

const quizLength = quiz.length;
let quizIndex    = 0;
let score        = 0;

const buttonLength = $button.length;
//クイズの問題文、選択肢を定義

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex] . question;
    let buttonIndex = 0;
    //let buttonLength= $button.length;2回定義されているので上で一回定義する
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex] . answers[buttonIndex];
        buttonIndex++;
}
};
setupQuiz();
//クリックした時に行われる処理を定数化
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        score++;
    }else{
        window.alert('不正解');
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('終了!正解数は' + score + '/' + quizLength + 'です!');

    }
    
};
//tagのbuttonの数だけ繰り返す。eとはEventの略でクリックされた場所やタグなどのさまざまな情報が入っているので e　を引数にすることでクリックされたボタンの情報が飛ぶ
let handlerIndex = 0;
//const buttonLength = $button.length;2回定義されているので上で一回定義する
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handlerIndex++;
} 

