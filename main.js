document.getElementById("startButton").addEventListener("click", function() {
    // ランダムな整数を生成
    let randomIndex = Math.floor(Math.random() * 10); // 例として10を使用

    // 遷移先URLにランダムなinitialQuestionIndexを含める
    location.href = `game.html?initialQuestionIndex=${randomIndex}`;
});
