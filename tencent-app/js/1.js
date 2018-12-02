(function(){
window.onload = function(){//标签
(function(){
    let oIpt = document.getElementsByClassName('ipt')[0];
    oIpt.onblur = function(){
    oIpt.value = "";
            };
        }
    )()
}
})();


        /* 轮播 */

        (function(){
        var oNav=document.getElementsByClassName("lunbo")[0];
        var oImg=document.getElementById("img");
        var pic=new Array('3.jpg','33.jpg','34.jpg','35.jpg', '36.jpg','37.jpg');
        var i=0;
        function disp(){
            oImg.src="img/"+pic[i];
            i++;
            if(i==pic.length) i=0;
        }
        setInterval(disp,2000);
    })();

/* 题目 */
(function(){
        let main=document.getElementsByClassName('tecent_two')[0].getElementsByTagName('ul')[0];
        var oLi=document.getElementsByClassName("tecent_two")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
        
        
        for(var i=0;i<oLi.length;i++){
            (function(index){
                oLi[index].onclick=function(){
                    for(var j=0;j<oLi.length;j++){
                        oLi[j].className="";
                    }
                    oLi[index].className="on";
                }
            })(i);
        }

    })();


            /* 底部 */
            (function(){
    var oLi=document.getElementById("foot").getElementsByTagName("li");
    var oImg=document.getElementById("foot").getElementsByClassName("img");
    var pic=new Array('首页.png','热点.png','会员.png','消息.png','我的.png')
    var pic1=new Array('首页-1.png','热点-1.png','会员-1.png','消息-1.png','我的-1.png')
    for(var i=0;i<oLi.length;i++){
        (function(index){
            oLi[index].onclick=function(){
                for(var j=0;j<oLi.length;j++){
                    oLi[j].className="";
                    oImg[j].src="img/"+pic[j];
                }
                oLi[index].className="on";
                oImg[index].src="img/"+pic1[index];
            }
        })(i);
    }
})();
