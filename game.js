const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const allButtons = document.getElementsByClassName('btn');

const img = document.getElementById('image');

btn1.addEventListener('click', function() {
    changeImage('./images/two.png');
    setActiveButton(btn1);
});

btn2.addEventListener('click', function() {
    changeImage('');
    setActiveButton(btn2);
});

btn3.addEventListener('click', function() {
    changeImage('');
    setActiveButton(btn3);
});


function changeImage(path) {
    img.src = path;
}

// function setActiveButton(activeButton) {
//     for (var i = 0; i < allButtons.length; i++) {
//         allButtons[i].classList.remove('show');
//     }

//     activeButton.classList.add('show');
// }

const mondai = [
    {id:"1", img:"", caption:"1本" },
    {id:"2", img:, caption:"2本" },
    {id:"3", img:, caption:"3本" },
    {id:"4", img:, caption:"4本" },
    {id:"5", img:, caption:"5本" },
    {id:"6", img:, caption:"6本" },
    {id:"7", img:, caption:"7本" },
    {id:"8", img:, caption:"8本" },
    {id:"9", img:, caption:"9本" },
    {id:"10", img:, caption:"10本" },
]

Math.floor(Math.random() * (11 - 1)) + 1