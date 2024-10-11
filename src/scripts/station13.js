
  const checkbox = document.getElementById("check");
  const textElement = document.getElementById("text");

  // トグルボタンが変更されたときに実行される関数
  function changeBackgroundColor() {
    if (checkbox.checked) {
      // チェックボックスがオンなら背景色を赤にする
      textElement.style.backgroundColor = "red";
    } else {
      // チェックがオフなら背景色を白にする
      textElement.style.backgroundColor = "white";
    }
  }

  // チェックボックスの状態が変わったときに関数を呼び出す
  checkbox.addEventListener("change", changeBackgroundColor);

