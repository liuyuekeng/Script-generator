;(function(){
    //生成插入的元素
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

    //初始化
    function init () {
        bindEvent();
    }

    //绑定按钮事件
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

    //使querySelectorAll返回的nodelist转化为数组
    function querySelectorAll (node, str) {
        return Array.prototype.slice.call(node.querySelectorAll(str), 0);
    }

    //增加一个同级的元素
    function addItem (e) {
        e.target.parentNode.insertBefore(tpl.item(),e.target);
    }

    //增加一行
    function addRow (e) {
        var row = tpl.row();
        row.appendChild(tpl.addItemTpl());
        e.target.parentNode.insertBefore(row, e.target);
    }

    //输出结果
    function build () {
        getCommonSetting();
        var res = [];
        var rows = querySelectorAll(document, ".row");
        var rowLen = rows.length;
        for (var i = 0; i < rowLen; i++) {
            res.push(dealRowData(rows[i]));
        }

        var len = commonSetting.length;
        for (var i = 0; i < len; i ++) {
        }
    }

    //处理行数据
    function dealRowData (row) {
        var rowRes = [];
        var items = querySelectorAll(row, "input");
        var itemLen = items.length;
        for (var i = 0; i < itemLen; i ++) {
            var value = items[i].value;
            rowRes.push(dealItemData(value));
        }
        return rowRes;
    }

    //处理节点数据
    function dealItemData (str) {
        var setting = getItemSettng(str);
        return setting;
    }

    //获得节点设置项
    function getItemSettng (str) {
        var itemRes;
        var setting = str.match(commonSetting.settingReg)
        if (setting) {
            itemRes = {};
            var settingArry = setting[1].split("&");
            var len = settingArry.length;
            for (var i = 0; i < len; i++) {
                var keyVal = settingArry[i].split("=");
                itemRes[keyVal[0]] = keyVal[1];
            }
            return itemRes;
        } else {
            return false;
        }
    }

    //获得全局配置项
    function getCommonSetting () {
        var lengthStr = document.getElementById("length").value;
        var length = lengthStr ? parseInt(lengthStr) : 0 ;
        var prefix = document.getElementById("prefix").value;
        var suffix = document.getElementById("suffix").value;
        var settingReg = new RegExp(prefix + "(.*)" + suffix);
        window.commonSetting = {
            length : length,
            settingReg : settingReg
        }
    }

    init();
})();
