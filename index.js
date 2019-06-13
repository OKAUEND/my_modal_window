window.addEventListener('load',function()
{
    const submit_buttom = this.document.querySelector('.submit');
    const delete_buttom = this.document.querySelector('.delete');

    submit_buttom.addEventListener('click',() =>
    {
        modalWindowOpen('パターンA','OK','js-modalButton--submit');
    })

    delete_buttom.addEventListener('click',() =>{
        modalWindowOpen('パターンB','OK','js-modalButton--deleting');
    })

    function modalWindowOpen(titleText,buttonText,submitClassName)
    {
        //モーダルウィンドウを展開する処理へ変更
        //モーダルウィンドウの各種を表示
        document.querySelector('#modal').classList.remove('modal--is_hidden');
        document.querySelector('.modal__back').classList.remove('modal__back--is_hidden');
    
        //タイトルを設定する
        document.querySelector('.modal__titletext').appendChild(document.createTextNode(titleText));
    
        const modalSubmitbutton = document.querySelector('.modal__Submit');
        //Submitボタンの名前を設定する
        modalSubmitbutton.appendChild(document.createTextNode(buttonText));
    
        //Submitのクラス名を設定する
        modalSubmitbutton.classList.add(submitClassName);

        let $text = document.createElement('p');
        $text.appendChild(document.createTextNode(titleText));

        let modalItem = document.querySelector('.modal__item');
        modalItem.appendChild($text);
    
        //モーダルウィンドウのバック黒画面をクリックしたときのイベントを追加する
        document.querySelector('.modal__back').addEventListener('click',modalWindowClose,false);
        document.querySelector('.modal__Cancel').addEventListener('click',modalWindowClose,false);
        document.querySelector('.modal__close').addEventListener('click',modalWindowClose,false);
    }
    function modalWindowClose()
    {    
        //モーダルウィンドウを非表示に
        document.querySelector('#modal').classList.add('modal--is_hidden');
        document.querySelector('.modal__back').classList.add('modal__back--is_hidden');
    
        //モーダルウィンドウのタイトル部分にあたるテキストを削除する
        //最初の要素がテキストの要素であることが確定なので、firstchildで指定しそれをremoveする
        const modalWindowTitleText = document.querySelector('.modal__titletext');
        modalWindowTitleText.removeChild(modalWindowTitleText.firstChild);
    
        //Submit用ボタンのテキストを削除する
        const modalSubmitbutton = document.querySelector('.modal__Submit');
        modalSubmitbutton.removeChild(modalSubmitbutton.firstChild);
    
        //Submit用ボタンのスタイル指定を解除する
        const classList = modalSubmitbutton.classList;
        modalSubmitbutton.classList.remove(classList[classList.length -1]);
    
        //表示しているアイテムをすべて削除する
        const modalWindowNodeList = document.querySelector('.modal__item');
        modalWindowNodeList.textContent = null;
    
        //モーダルウィンドウのバック黒画面をクリックしたときのイベントを削除
        document.querySelector('.modal__back').removeEventListener('click',modalWindowClose,false);
        document.querySelector('.modal__Cancel').removeEventListener('click',modalWindowClose,false);
        document.querySelector('.modal__close').removeEventListener('click',modalWindowClose,false);
    }
},false)