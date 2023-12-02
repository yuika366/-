const changeButtons = document.getElementsByClassName("btn");
const honBtn = document.getElementById("btn1");
const ponBtn = document.getElementById("btn2");
const bonBtn = document.getElementById("btn3");
const questionImageElement = document.getElementById("image");
const questionCaptionElement = document.getElementsByClassName("question_caption");
const questioncount =document.getElementsByClassName("questions_num");

let currentQuestionCount = 1;

// const allButtons = document.getElementsByClassName('btn');

// const "img" = document.getElementById('image');

// btn1.addEventListener('click', function() {
//     changeImage('./images/two.png');
//     setActiveButton(btn1);
// });

// btn2.addEventListener('click', function() {
//     changeImage('');
//     setActiveButton(btn2);
// });

// btn3.addEventListener('click', function() {
//     changeImage('');
//     setActiveButton(btn3);
// });


// function changeImage(path) {
//     "img".src = path;
// }

// function setActiveButton(activeButton) {
//     for (var i = 0; i < allButtons.length; i++) {
//         allButtons[i].classList.remove('show');
//     }

//     activeButton.classList.add('show');
// }


document.addEventListener('DOMContentLoaded', function() {
    // ゲーム画面の初期化時にURLパラメータから問題のインデックスを取得
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuestionIndex = parseInt(urlParams.get('initialQuestionIndex'), 10);
    console.log(initialQuestionIndex);
    
    // 最初の問題を表示
    let usedQuestionIndices = [];
    

    for(let i = 0; i < changeButtons.length; i++){
        changeButtons[i].addEventListener('click', function() {
            //正誤判定
            isCorrect();
        });
        changeButtons[i].addEventListener('click', function() {
            // ランダムな問題を取得
            let randomMondai = getRandomMondai();
            // 問題を表示
            displayMondai(randomMondai);
            currentQuestionCount++;
    questioncount[0].textContent = String(currentQuestionCount);
        });
    }

    const initialMondai = mondai[initialQuestionIndex];
    displayMondai(initialMondai);
    mondai.splice(initialQuestionIndex,1);

    function getRandomMondai() {
        let availableIndices = mondai.map((_, index) => index).filter(index => !usedQuestionIndices.includes(index));
    
        // 全ての問題が表示された場合はリセット
        if (availableIndices.length === 0) {
            usedQuestionIndices = [];
            availableIndices = mondai.map((_, index) => index);
        }
    
        // 未使用の問題からランダムに選ぶ
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        usedQuestionIndices.push(randomIndex);
        return mondai[randomIndex];
    }
    
    function displayMondai(mondai) {
        // 画像のsrc属性を新しいURLに変更
        questionImageElement.src = mondai["img"];
        // キャプションを設定
        questionCaptionElement[0].textContent = mondai["caption"];
    
    }
});


const mondai = [
    {"id":"1", "img":"./images/one.png", "caption":"1本", "pronounce":"pon" },
    {"id":"2", "img":"./images/two.png", "caption":"2本" , "pronounce":"hon" },
    {"id":"3", "img":"./images/three.png", "caption":"3本", "pronounce":"bon" },
    {"id":"4", "img":"./images/four.jpg", "caption":"4本", "pronounce":"hon" },
    {"id":"5", "img":"./images/five.png", "caption":"5本", "pronounce":"hon" },
    {"id":"6", "img":"./images/six.png", "caption":"6本", "pronounce":"pon , hon"},
    {"id":"7", "img":"./images/seven.jpg", "caption":"7本", "pronounce":"hon"},
    {"id":"8", "img":"./images/eight.jpg", "caption":"8本", "pronounce":"pon , hon"},
    {"id":"9", "img":"./images/nine.jpg", "caption":"9本", "pronounce":"hon"  },
    {"id":"10", "img":"./images/ten.jpg", "caption":"10本", "pronounce":"pon"  }
]


    //honが押されたとき
    honBtn.addEventListener('click', function() {
        //正誤判定
        let yesOrNo = honIsCorrect();
        showyesOrNo(yesOrNo);
    });

    ponBtn.addEventListener('click', function() {
        //正誤判定
        let yesOrNo = ponIsCorrect();
        showyesOrNo(yesOrNo);
    });

    bonBtn.addEventListener('click', function() {
        //正誤判定
        let yesOrNo = bonIsCorrect();
        showyesOrNo(yesOrNo);
    });

    
    




function honIsCorrect(){
    if(currentElement["id"] === "2" || currentElement["id"] ===  "4"||currentElement["id"] === "5" ||currentElement["id"] === "6" ||currentElement["id"] === "7" ||
    currentElement["id"] === "8" ||currentElement["id"] === "9"){
        console.log("正解です");
        return true
    }else{
        console.log(currentElement["id"] );
        return false;
    }   
}

function ponIsCorrect(){
    if(currentElement["id"] === "1" ||currentElement["id"] === "6" ||
    currentElement["id"] === "8" ||currentElement["id"] === "10"){
        console.log("正解です");
        return true
    }else{
        console.log(currentElement["id"] );
        return false;
    }   
}

function bonIsCorrect(){
    if(currentElement["id"] === "3"){
        console.log("正解です");
        return true
    }else{
        console.log(currentElement["id"] );
        return false;
    }   
}

function showyesOrNo(answer){
    if(answer === true){
        //2秒後に画像が切り替わる
        questionImageElement.src = "./images/correct.jpg";
        questionCaptionElement[0].textContent = currentElement["pronounce"];
        setTimeout(changeImage,2000);
    }else{
        questionImageElement.src = "./images/wrong.jpg";
        questionCaptionElement[0].textContent = currentElement["pronounce"];
        setTimeout(changeImage,2000);
    }
}

