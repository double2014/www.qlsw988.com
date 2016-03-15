

// JavaScript Document

var goTopEx=function (){
	var obj=document.getElementById("topcontrol");

	function addEvent(obj,type,fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+type,function(){
            fn.call(obj);
        })
    }else{
        obj.addEventListener(type,fn,false);
    }
}

function getScrollTop(){
                return document.documentElement.scrollTop||document.body.scrollTop;
            }


function setScrollTop(value){
				if(document.documentElement.scrollTop){
					document.documentElement.scrollTop=value;
				}else if(document.body.scrollTop){
					document.body.scrollTop=value;
				}
            } 

        addEvent(window,'scroll',function(){
			getScrollTop()>0?obj.style.display="":obj.style.display="none";
		});
        addEvent(obj,'click',function(){
			var goTop=setInterval(scrollMove,10);
            function scrollMove(){
                    setScrollTop(getScrollTop()/1.1);
                    if(getScrollTop()<1)clearInterval(goTop);
                }
		});  
       // window.onscroll=function(){getScrollTop()>0?obj.style.display="":obj.style.display="none";}
	   /*obj.onclick=function(){
            var goTop=setInterval(scrollMove,10);
            function scrollMove(){
                    setScrollTop(getScrollTop()/1.1);
                    if(getScrollTop()<1)clearInterval(goTop);
                }
        }*/
	   
        
    }