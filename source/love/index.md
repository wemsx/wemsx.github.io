---
title: love
date: 2022-05-28 20:24:30
author: Wemsx
comments: false
toc: false
---

<h1><span id="timeDateILU"></span></h1>
<h1><span id="timesILU"></span></h1>
<script>
    var nowL = new Date(); 
    function createtime() { 
        var grtL = new Date("05/20/2022 17:32:46");
        nowL.setTime(nowL.getTime()+250); 
        daysL = (nowL - grtL ) / 1000 / 60 / 60 / 24; dnumL = Math.floor(daysL); 
        hoursL = (nowL - grtL ) / 1000 / 60 / 60 - (24 * dnumL); hnumL = Math.floor(hoursL); 
        if(String(hnumL).length ==1 ){hnumL = "0" + hnumL;} minutes = (nowL - grtL ) / 1000 /60 - (24 * 60 * dnumL) - (60 * hnumL); 
        mnumL = Math.floor(minutes); if(String(mnumL).length ==1 ){mnumL = "0" + mnumL;} 
        seconds = (nowL - grtL ) / 1000 - (24 * 60 * 60 * dnumL) - (60 * 60 * hnumL) - (60 * mnumL); 
        snumL = Math.round(seconds); if(String(snumL).length ==1 ){snumL = "0" + snumL;} 
        document.getElementById("timeDateILU").innerHTML = "喜欢TA已经 "; 
        document.getElementById("timesILU").innerHTML =  dnumL + " 天 " + hnumL + " 小时 " + mnumL + " 分 " + snumL + " 秒"; 
    } 
setInterval("createtime()",1000);
</script>
你是我一生中只会遇见一次的幸运
想拍一束花，却总不小心有人入了画。