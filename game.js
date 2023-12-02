const changeButtons = document.getElementsByClassName("btn");
const honBtn = document.getElementById("btn1");
const ponBtn = document.getElementById("btn2");
const bonBtn = document.getElementById("btn3");
const questionImageElement = document.getElementById("image");
const questionCaptionElement = document.getElementsByClassName("question_caption");

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

const mondai = [
    {"id":"1", "img":"./images/one.png", "caption":"1本", "pronounce":"pon" },
    {"id":"2", "img":"./images/two.png", "caption":"2本" , "pronounce":"hon" },
    {"id":"3", "img":"./images/three.png", "caption":"3本", "pronounce":"bon" },
    {"id":"4", "img":"./images/four.jpg", "caption":"4本", "pronounce":"hon" },
    {"id":"5", "img":"./images/five.png", "caption":"5本", "pronounce":"hon" },
    {"id":"6", "img":"./images/six.png", "caption":"6本", "pronounce":["pon","hon"]  },
    {"id":"7", "img":"./images/seven.jpg", "caption":"7本", "pronounce":"hon"  },
    {"id":"8", "img":"./images/eight.jpg", "caption":"8本", "pronounce":["pon","hon"]  },
    {"id":"9", "img":"./images/nine.jpg", "caption":"9本", "pronounce":"hon"  },
    {"id":"10", "img":"./images/ten.jpg", "caption":"10本", "pronounce":"pon"  }
]

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
    });
}


function getRandomMondai() {
    let randomIndex = Math.floor(Math.random() * (10-0)) ;
    return mondai[randomIndex];
}

function displayMondai(mondai) {
    // 画像のsrc属性を新しいURLに変更
    questionImageElement.src = mondai["img"];
    // キャプションを設定
    questionCaptionElement[0].textContent = mondai["caption"];
}

