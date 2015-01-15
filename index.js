;(function(){
    var tpl = {
        addCol : "<div class=\"addCol\"></div>",
        addRow : "<div class=\"addRow\"></div>",
    };

    function init () {
        bindEvent();
    }

    function bindEvent () {
        var addItem = document.querySelector(".addItem");
        var addRow = document.querySelector(".addRow");
        console.log(addItem);
        addItem.onclick = function(){
            console.log('aaaaa');
        };
        addRow.onclick = function(){
            console.log('bbbbbb');
        };
    }

    init();
})();
