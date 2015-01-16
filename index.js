;(function(){
    var tpl = {
        addCol : "<div class=\"addCol\"></div>",
        addRow : "<div class=\"addRow\"></div>",
        item : function () {
            var item = document.createElement("div");
            item.innerHTML = "aaaa";
            return item;
        },
        row : "<div class=\"row\"></div>"
    };

    function init () {
        bindEvent();
    }

    function bindEvent () {
        var addItemBtn = document.querySelector(".addItem");
        var addRowBtn = document.querySelector(".addRow");
        addItemBtn.onclick = function(e){
            addItem(e);
        };
        addRowBtn.onclick = function(){
            console.log('bbbbbb');
        };
    }

    function addItem (e) {
        e.target.parentNode.insertBefore(tpl.item(),e.target);
    }

    function addRow () {
    }

    init();
})();
