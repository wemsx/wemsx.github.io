---
title: 说说
author: Wemsx
comments: false
date: 2022-02-26 09:56:39
---
<div id='speak-bber'></speak>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber@1.4.3/ispeak-bber.min.js" charset="utf-8" ></script>
<script>
ispeakBber
    .init({
      el: '#speak-bber',
      name: 'wemsx', // 显示的昵称
      envId: 'bberdeyunhuanjing-4e4yfx28013231', // 环境id
      region: 'ap-shanghai', // 腾讯云地址，默认为上海
      limit: 10, // 每次加载的条数，默认为5
      avatar: 'https://fastly.jsdelivr.net/gh/wemsx/imgcdn1/img/rBAAdmFqR2WALtcrAAAz6TmJIso480.png',
      fromcolor:'rgb(245, 150, 170)'
    })
    .then(function() {
      console.log('ispeak 加载完成')
    })
</script>