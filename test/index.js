//変数
let unko = 'Hello World!';
//unko = 'hello world2';

//定数
const bigUnko = 'Hello World!!っふ';

//配列
let inoki = ['いーち','にーい','さーん','だー！'];
//console.log(inoki[2]);

//ループ文
/*
    let index=0;
    while(index<5){
        //繰り返したい命令
        console.log(index);
        index++;
        //consoleには0,1,2,3,4が表示される
    }
    while(index < inoki.length){
        console.log(index);
        //consoleには0,1,2,3が表示される(inokiの配列は4つなので)
        index++;
    }
    while(index < inoki.length){
        console.log(inoki[index]);
        index++;
        //consoleにはinokiの配列の値が表示される
    }
    */

//if else
/*
    if(inoki.length > 5){
        console.log('ボンバ家!');
    }else {
        console.log('ボンバ...')
    }
*/

//関数
    const test = (arg) => {
        //実行したい命令
        if(inoki.length > arg){
            console.log('ボンバ家!');
        }else {
            console.log('ボンバ...')
        }
    };
/*
    test(5);
    test(2);
    test(6);
*/

//オブジェクト
const unko2={
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    gotToilet: ()=> {
        console.log('Hello World');
    }
};
//console.log(unko2);
//console.log(unko2.color);
//console.log(unko2.gotToilet());

//jsのオブジェクト
    //console.log(window.innerHeight);
    //window.alert('hello');
    //console.log(document);
    //console.log(document.getElementsByTagName('button'));
    //console.log(document.getElementsByTagName('button')[0]);

    //イベント
    //最初(左端)のボタンが押された時にwindow.alertを行う
    document.getElementsByTagName('button')[0].addEventListener('click',()=>{
        //命令を書く
        window.alert('Hello World');
    })
