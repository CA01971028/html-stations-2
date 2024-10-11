function displayList() {
    // fruitsのdivを取得
    const fruitsDiv = document.getElementById('fruits');

    // 現在の内容を空にする
    fruitsDiv.innerHTML = '';

    // 新しいul要素を作成
    const ul = document.createElement('ul');

    // フルーツのリストを作成
    const fruits = ['リンゴ', 'イチゴ', 'ブドウ'];
    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit; // liにフルーツの名前を追加
        ul.appendChild(li); // ulにliを追加
    });

    // ulをfruitsDivに追加
    fruitsDiv.appendChild(ul);
}
