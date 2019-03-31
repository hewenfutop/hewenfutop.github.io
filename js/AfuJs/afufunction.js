function $$(id) //获取元素
{
    if (document.getElementById(id)) {
        return document.getElementById(id);
    }
    else if (document.getElementsByClassName(id)) {
        return document.getElementsByClassName(id)
    }
    else if (document.getElementsByTagName(id)) {
        return document.getElementsByTagName(id)
    }
    else return null;
}

// var mk = { //相同的节点元素需要在tab后面加数字区别
//     div: ["class", "id1", {
//         p: ["class", "id2", {
//             span4: ["class", "id3"],
//             span7: ["class", "id4"],
//             input: ["class", "id5","type:text,place:hello"]
//         }]
//     }]
// };

function $CreateByArr(parent, data) {
    function createElementText(myData) {
        var newElementArr = [];
        for (var key in myData) {

            var model = /[a-zA-Z\-]+/i;
            console.log("TEST:" + key.match(model));

            var newElement = document.createElement(key);
            var obj = myData[key];
            var className = obj[0];
            var idNum = obj[1];

            if (className) {
                newElement.className = className;
            }
            if (idNum) {
                newElement.id = idNum;
            }

            if ((typeof obj[2]) == "string") {
                console.log(obj[2]);
                var tempArr = obj[2].split(",");
                for (var k = 0; k < tempArr.length; k++) {
                    var sp = tempArr[k].split(":");
                    if (sp.length == 2) {
                        newElement.setAttribute(sp[0], sp[1]);
                    }
                }
            }

            if ((typeof obj[obj.length - 1]) == "object") {
                var innerElement = createElementText(obj[obj.length - 1]);
                for (var p = 0; p < innerElement.length; p++) {
                    newElement.appendChild(innerElement[p]);
                }
            }
            newElementArr.push(newElement);
        }
        return newElementArr;
    }

    var innerElement = createElementText(data);
    for (var p = 0; p < innerElement.length; p++) {
        $$(parent).appendChild(innerElement[p]);
    }
}


function $Create(tab, parentID, classname, id, text)//添加新元素
{
    var newElement = document.createElement(tab);
    if (classname) {
        newElement.className = classname;
    }
    if (id ) {
        newElement.id = id;
    }
    if (text) {
        newElement.innerHTML = text;
    }
	if(typeof parentID ==="string")
		document.getElementById(parentID).appendChild(newElement);
	else	 parentID.appendChild(newElement);
    return newElement;
}

function $Remove(id)//删除元素
{
    var rElement = document.getElementById(id);
    rElement.parentNode.removeChild(rElement);
}

function GetRunFlagFromID(mSting)//获取字符串的最后一个数字
{
    if (mSting == "") return "";
    var TEMP = mSting.split("_");
    return TEMP[TEMP.length - 1];
}


function GetRandColor(opcity) {
    var r = Math.round(Math.random() * 1000) % 256;
    var g = Math.round(Math.random() * 1000) % 256;
    var b = Math.round(Math.random() * 1000) % 256;
    if (opcity) {
        return "rgba(" + r + "," + g + "," + b + "," + opcity + ")";
    }
    else {
        return "rgb(" + r + "," + g + "," + b + ")";
    }
}

function $SetTextCenter(CurrentTextID) {
    var height = $(CurrentTextID).height();
    $(CurrentTextID).css({lineHeight: height + "px"});
}
