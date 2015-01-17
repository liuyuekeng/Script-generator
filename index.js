;(function(){
    var tpl = {
        addItemTpl : function () {
            var item = document.createElement('span');
            item.setAttribute('class', 'addItem');
            item.innerHTML = "add item";
            item.onclick = function (e) {
                addItem(e);
            }
            return item;
        },
        item : function () {
            var item = document.createElement("input");
            item.setAttribute('type', "text");
            item.setAttribute('value', "aaaaa");
            return item;
        },
        row : function () {
            var item = document.createElement("div");
            item.setAttribute('class', 'row');
            return item;
        }
    };

    function init () {
        bindEvent();
    }

    function bindEvent () {
        var addItemBtn = document.querySelector(".addItem");
        var addRowBtn = document.querySelector(".addRow");
        var buildBtn = document.getElementById("build");
        addItemBtn.onclick = function(e){
            addItem(e);
        };
        addRowBtn.onclick = function(e){
            addRow(e);
        };
        buildBtn.onclick = function(){
            build();
        }
    }

    function addItem (e) {
        e.target.parentNode.insertBefore(tpl.item(),e.target);
    }

    function addRow (e) {
        var row = tpl.row();
        row.appendChild(tpl.addItemTpl());
        e.target.parentNode.insertBefore(row, e.target);
    }

    function build () {
        var obj = {};
        var rows = document.querySelectorAll(".row");
        var rowLen = rows.length;
        for (var i = 0; i < rowLen; i++) {
            dealRowData(rows[i]);
        }
        function dealRowData (row) {
            console.log(row);
        }
    }

    init();
})();
