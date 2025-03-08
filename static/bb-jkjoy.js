// Memos Start
const memo = {
    host: 'https://memos.wemsx.cn/',
    limit: 10,
    creatorId: '1',
    domId: '#bber',
};

if (typeof memos !== "undefined") {
    Object.assign(memo, memos);
}
function loadCssCode(code) {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.appendChild(document.createTextNode(code));
    let head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
}
const allCSS = `
  #bber{margin-top:1rem;width:auto!important;min-height:100vh;}
  .bb-timeline ul{margin:0;padding:0;}
  .bb-timeline ul li{margin-bottom:3rem;list-style-type:none;}
  .bb-timeline ul li .bb-cont ul li{margin-bottom:0;}
  .bb-timeline .bb-item,.bb-load button{border:1px solid #dcdcdc;border-radius:8px;box-shadow:3px 3px 5px rgba(0,0,0,.1);}
  .bb-timeline .bb-item{padding:.6rem 1rem .6rem;font-size:16px;}
  .bb-load button{padding:10px 30px;width:100%;background:0 0;letter-spacing:.8rem;font-style:italic;font-size:.8rem;}
  .bb-timeline .bb-info{position:relative;margin-top:.5rem;font-size:14px;}
  .bb-timeline .bb-info a{text-decoration:none;}
  .bb-timeline .datatime{font-size:15px;}
  .bb-timeline .bb-cont{overflow-x:hidden;overflow-y:scroll;margin-top:.5rem;max-height:50vh;}
  .bb-timeline .datacount{position:absolute;right:0;bottom:0;cursor:pointer;}
  .bb-timeline .datacount svg{margin:2px 5px;}
  .bb-timeline .bb-cont img[src*=emotion]{display:inline-block;width:auto;}
  .bb-timeline p{margin:0;margin:0;min-height:18px;color:#3b3d42;letter-spacing:1px;line-height:28px;}
  .bb-timeline pre{color:#aaa;}
  .bb-timeline pre p{display:inline-block;}
  .bb-timeline pre p:empty{display:none;}
  .bb-cont p{magin:0;}
  .bb-cont blockquote{position:relative;margin:0 0 0 1rem;padding:.25rem 2rem;border-left:0 none;font-family:KaiTi,STKaiti,STFangsong!important;}
  .bb-cont blockquote::before{position:absolute;top:5px;left:10px;content:'“';font-weight:700;font-size:28px;font-family:Georgia,serif;line-height:2rem;}
  .tag-span{color:#42b983;cursor:pointer;}
  #tag-list{font-size:1.8rem;}
  .bb-source a{margin:0 6px 0 0;padding:2px 8px;border-radius:5px;background:#3b3d42;color:#fafafa;font-weight:400;font-size:.9rem;}
  .bb-cont .img{border-radius:4px;cursor:pointer;}
  .bb-cont .img.square{width:180px;height:180px;object-fit:cover;}
  .resimg.grid{display:grid;box-sizing:border-box;margin:4px 0 0;width:calc(100%* 2 / 3);grid-template-columns:repeat(3,1fr);grid-template-rows:auto;gap:4px;}
  .resimg.grid-2{width:80%;grid-template-columns:repeat(2,1fr);}
  .resimg.grid-4{width:calc(80% * 2 / 3);grid-template-columns:repeat(2,1fr);}
  .resimg.grid figure.gallery-thumbnail{position:relative;padding-top:100%;width:100%;height:0;cursor:zoom-in;}
  .resimg figure{max-height:50%;text-align:left;}
  .resimg figure img{max-height:50vh;}
  .resimg.grid figure,figcaption{margin:0!important;}
  .resimg.grid figure.gallery-thumbnail>img.thumbnail-image{position:absolute;top:0;left:0;display:block;width:100%;height:100%;object-fit:cover;object-position:50% 50%;}
  #bb-footer{margin:5rem auto 1rem;text-align:center;}
  #bb-footer p{margin:0 0 .6rem;}
  .bb-allnums{letter-spacing:2px;}
  .bb-allpub{text-decoration:none;font-style:italic;}
  .bb-timeline ul li::before{content:none;}
  .memos__verify { margin-left: 2px; max-width: 20px; max-height: 20px; color: #1d9bf0; -moz-user-select: none; -ms-user-select: none; -webkit-user-select: none; user-select: none; vertical-align: text-bottom; position: relative; height: 1.25rem; fill: currentcolor; display: inline-block; flex-shrink: 1; margin-left: 4px; }
  /* db-card -------- start*/
  
  .db-card{border-bottom:1px solid #eaeaea;box-shadow: none;margin:-0.6rem -1rem .6rem;}
  .db-card-subject{display: flex;align-items:flex-start;line-height:1.6;padding:12px;position:relative;}
  .dark .db-card{background:#252627;border-bottom:1px solid #3b3d42;}
  .db-card-content {flex:1 1 auto;}
  .db-card-post {width: 96px;margin-right: 15px;display: flex;flex: 0 0 auto;}
  .db-card-title {margin-bottom: 5px;font-size: 18px;}
  .db-card-title a{text-decoration: none!important}
  .db-card-abstract,.db-card-comment{font-size:14px;overflow: hidden;max-height:3rem;}
  .db-card-cate{position: absolute;top:0;right:0;background:#f99b01;padding:1px 8px;font-size:small;font-style:italic;border-radius:0 8px 0 8px;text-transform:capitalize;}
  .db-card-post img{width: 96px!important;height: 96px!important;border-radius: 4px;-o-object-fit: cover;object-fit: cover;}
  
  .loader {position: relative;margin:3rem auto;width: 100px;}
  .loader::before {content: '';display: block;padding-top: 100%;}
  .circular {animation: rotate 2s linear infinite;height: 100%;transform-origin: center center;width: 100%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}
  .path {stroke-dasharray: 1, 200;stroke-dashoffset: 0;animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;stroke-linecap: round;}
  @keyframes rotate {100% {transform: rotate(360deg);}}
  @keyframes dash {
    0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}
    50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}
    100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}
  }
  @keyframes color {
    100%,0% {stroke: #d62d20;}40% {stroke: #0057e7;}66% {stroke: #008744;}80%,90% {stroke: #ffa700;}
  }
  
  .dark .bb-timeline .bb-load button,.dark .bb-timeline .bb-item{border:1px solid #3b3d42;}
  .dark .bb-timeline .bb-item p{color:#fafafa;}
  .dark .bb-timeline .bb-item p svg{fill:#fafafa;}
  .dark #tag-list .tag-span{background:rgba(238,238,238,.1);}
  `
loadCssCode(allCSS);

const limit = memo.limit;
const memosHost = memo.host.replace(/\/$/, '');

const filter = `creator=='users/${memo.creatorId}'&&visibilities==['PUBLIC']`;
const memoUrl = `${memosHost}/api/v1/memos?filter=${encodeURIComponent(filter)}&pageSize=${limit}`;

let page = 1;
let nextPageToken = '';
let nextDom = '';
let btnRemove = 0;
const memoDom = document.querySelector(memo.domId);
const loadBtn = '<div class="bb-load"><button class="load-btn button-load">加载中……</button></div>';

let userInfo; // 定义全局变量 userInfo

if (memoDom) {
    memoDom.insertAdjacentHTML('afterend', loadBtn);
    fetchUserInfo().then(info => {
        userInfo = info; // 赋值给全局变量 userInfo
        // 更新 banner 信息
        const bannerSubinfo = document.querySelector('.info');
        if (bannerSubinfo) {
            bannerSubinfo.textContent = userInfo.description;
        }
        getFirstList();
    });

    const btn = document.querySelector("button.button-load");
    btn.addEventListener("click", () => {
        btn.textContent = '努力加载中……';
        updateHTML(nextDom, userInfo); // 传递 userInfo 参数
        if (nextDom.length < limit) {
            btn.remove();
            btnRemove = 1;
            return;
        }
        getNextList();
    });
}

function getFirstList() {
    fetch(`${memoUrl}&pageToken=${nextPageToken}`)
        .then(res => res.json())
        .then(resdata => {
            updateHTML(resdata.memos, userInfo);
            nextPageToken = resdata.nextPageToken;
            if (resdata.memos.length < limit) {
                document.querySelector("button.button-load").remove();
                btnRemove = 1;
                return;
            }
            page++;
            getNextList();
        })
        .catch(error => console.error('Error fetching first list:', error));
}

function getNextList() {
    fetch(`${memoUrl}&pageToken=${nextPageToken}`)
        .then(res => res.json())
        .then(resdata => {
            nextPageToken = resdata.nextPageToken;
            nextDom = resdata.memos;
            page++;
            if (nextDom.length < 1) {
                document.querySelector("button.button-load").remove();
                btnRemove = 1;
                return;
            }
        })
        .catch(error => console.error('Error fetching next list:', error));
}

function fetchUserInfo() {
    return fetch(`${memosHost}/api/v1/users/${memo.creatorId}`)
        .then(response => response.json())
        .then(userData => {
            return {
                avatarurl: `${memosHost}${userData.avatarUrl}`,
                memoname: userData.nickname,
                userurl: `${memosHost}/u/${userData.username}`,
                description: userData.description,
                memousername: userData.username
            };
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            return {};
        });
}

function updateHTML(data, userInfo) {
    const TAG_REG = /#([^\s#]+?) /g;
    const BILIBILI_REG = /<a\shref="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?">.*<\/a>/g;
    const NETEASE_MUSIC_REG = /<a\shref="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g;
    const QQMUSIC_REG = /<a\shref="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g;
    const QQVIDEO_REG = /<a\shref="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g;
    const SPOTIFY_REG = /<a\shref="https:\/\/open\.spotify\.com\/(track|album)\/([\s\S]+)".*?>.*<\/a>/g;
    const YOUKU_REG = /<a\shref="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g;
    const YOUTUBE_REG = /<a\shref="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;

    let memoResult = '';
    for (const item of data) {
        let memoContREG = item.content
            .replace(TAG_REG, "<span class='tag-span primary'><a rel='noopener noreferrer' href='#$1'>#$1</a></span>");

        memoContREG = marked.parse(memoContREG)
            .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true' style='position:absolute;height:100%;width:100%;'></iframe></div>")
            .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
            .replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>")
            .replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>")
            .replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
            .replace(SPOTIFY_REG, "<div class='spotify-wrapper'><iframe style='border-radius:12px' src='https://open.spotify.com/embed/$1/$2?utm_source=generator&theme=0' width='100%' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe></div>")
            .replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>");

        if (item.resources && item.resources.length > 0) {
            const resourceList = item.resources;
            let imgUrl = '<div class="resource-wrapper"><div class="images-wrapper">';
            let resUrl = '';

            for (const res of resourceList) {
                const resType = res.type.slice(0, 5);
                const resexlink = res.externalLink;
                const resLink = resexlink ? resexlink : `${memosHost}/file/${res.name}/${res.filename}`;

                if (resType === 'image') {
                    imgUrl += `<div class="resimg">
                        <img loading="lazy" src="${resLink}"/>
                    </div>`;
                } else {
                    resUrl += `<a target="_blank" rel="noreferrer" href="${resLink}">${res.filename}</a>`;
                }
            }

            imgUrl += '</div></div>';

            if (imgUrl) {
                memoContREG += imgUrl;
            }
            if (resUrl) {
                memoContREG += `<div class="resource-wrapper"><p class="datasource">${resUrl}</p></div>`;
            }
        }

        const relativeTime = getRelativeTime(new Date(item.createTime));

        memoResult += `<li class="memo-${item.uid}">
        <div class="bb-item">
          <div class="bb-cont">
            <p>${memoContREG}</p>
          </div>
          <div class="bb-info">
            ${relativeTime} · From <a href="${memosHost}/m/${item.uid}" target="_blank"><span class="datatime">${userInfo.memousername}</span></a>
          </div>
        </div>
      </li>`
    }

    const resultAll = `<section class='bb-timeline'><ul class='bb-list-ul'>${memoResult}</ul></section>`;
    memoDom.insertAdjacentHTML('beforeend', resultAll);
    document.querySelector('button.button-load').textContent = '加载更多';

    //DB
    fetchDB();

    // Images lightbox
    window.ViewImage && ViewImage.init('.container img');

}
// Memos End

// Relative Time Start
function getRelativeTime(date) {
    const rtf = new Intl.RelativeTimeFormat(memo.language, { numeric: "auto", style: 'short' });
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return rtf.format(-years, 'year');
    } else if (months > 0) {
        return rtf.format(-months, 'month');
    } else if (days > 0) {
        return rtf.format(-days, 'day');
    } else if (hours > 0) {
        return rtf.format(-hours, 'hour');
    } else if (minutes > 0) {
        return rtf.format(-minutes, 'minute');
    } else {
        return rtf.format(-seconds, 'second');
    }
}
// Relative Time End

// Memos Total Start
// Get Memos total count
function getTotal() {
    let pageUrl;
    let totalUrl;
    const filter = `creator=='users/${memo.creatorId}'&&visibilities==['PUBLIC']`;

    // 第一次请求：获取 pageSize
    pageUrl = `${memosHost}/api/v1/memos?pageSize=1&pageToken=&&filter=${encodeURIComponent(filter)}`;
    fetch(pageUrl)
        .then(res => res.json())
        .then(resdata => {
            if (resdata && resdata.memos) {
                // 从返回的数据中提取 pageSize
                const pageSize = resdata.memos.map(memo => {
                    const match = memo.name.match(/\d+/);
                    return match ? parseInt(match[0], 10) : null;
                }).filter(num => num !== null)[0]; // 取第一个匹配到的数字

                if (pageSize) {
                    // 第二次请求：使用获取到的 pageSize
                    totalUrl = `${memosHost}/api/v1/memos?pageSize=${pageSize}&filter=${encodeURIComponent(filter)}`;
                    return fetch(totalUrl);
                } else {
                    throw new Error('No valid pageSize found');
                }
            }
        })
        .then(res => res.json())
        .then(resdata => {
            if (resdata && resdata.memos) {
                var allnums = resdata.memos.length;
                var memosCount = document.getElementById('total');
                if (memosCount) {
                    memosCount.innerHTML = allnums;
                }
            }
        })
        .catch(err => {
            console.error('Error fetching memos:', err);
        });
}

window.onload = getTotal;
// Memos Total End

// 解析豆瓣 Start
function fetchDB() {
    var dbAPI = 'https://cors.ima.cm/https://api.loliko.cn/';
    var dbA = document.querySelectorAll(".timeline a[href*='douban.com/subject/']:not([rel='noreferrer'])") || '';
    if (dbA) {
        const promises = [];
        for (var i = 0; i < dbA.length; i++) {
            _this = dbA[i];
            var dbHref = _this.href;
            var db_reg = /^https\:\/\/(movie|book)\.douban\.com\/subject\/([0-9]+)\/?/;
            var db_type = dbHref.replace(db_reg, "$1");
            var db_id = dbHref.replace(db_reg, "$2").toString();
            if (db_type == 'movie') {
                var this_item = 'movie' + db_id;
                var url = dbAPI + "movies/" + db_id;
                if (localStorage.getItem(this_item) == null) {
                    promises.push(fetch(url).then(res => res.json()).then(data => {
                        let fetch_item = 'movies' + data.sid;
                        let fetch_href = "https://movie.douban.com/subject/" + data.sid + "/";
                        localStorage.setItem(fetch_item, JSON.stringify(data));
                        movieShow(fetch_href, fetch_item);
                    }).catch(error => {
                        console.error('Error fetching movie data:', error);
                    }));
                } else {
                    movieShow(dbHref, this_item);
                }
            } else if (db_type == 'book') {
                var this_item = 'book' + db_id;
                var url = dbAPI + "v2/book/id/" + db_id;
                if (localStorage.getItem(this_item) == null) {
                    promises.push(fetch(url).then(res => res.json()).then(data => {
                        let fetch_item = 'book' + data.id;
                        let fetch_href = "https://book.douban.com/subject/" + data.id + "/";
                        localStorage.setItem(fetch_item, JSON.stringify(data));
                        bookShow(fetch_href, fetch_item);
                    }).catch(error => {
                        console.error('Error fetching book data:', error);
                    }));
                } else {
                    bookShow(dbHref, this_item);
                }
            }
        }// for end
        Promise.all(promises).then(() => {
            console.log('All fetch operations completed');
        });
    }
}

function movieShow(fetch_href, fetch_item) {
    var storage = localStorage.getItem(fetch_item);
    var data = JSON.parse(storage);
    var db_star = Math.ceil(data.rating);
    var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>《" + data.name + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating + "</div></div><time class='post-preview--date'>导演：" + data.director + " / 类型：" + data.genre + " / " + data.year + "</time><section class='post-preview--excerpt'>" + data.intro.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.img + "></div>";
    var db_div = document.createElement("div");
    var qs_href = ".timeline a[href='" + fetch_href + "']";
    var qs_dom = document.querySelector(qs_href);
    if (qs_dom) {
        qs_dom.parentNode.replaceChild(db_div, qs_dom);
        db_div.innerHTML = db_html;
    }
}

function bookShow(fetch_href, fetch_item) {
    var storage = localStorage.getItem(fetch_item);
    var data = JSON.parse(storage);
    var db_star = Math.ceil(data.rating.average);
    var db_html = "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" + fetch_href + "'>《" + data.title + "》</a></h4><div class='rating'><div class='rating-star allstar" + db_star + "'></div><div class='rating-average'>" + data.rating.average + "</div></div><time class='post-preview--date'>作者：" + data.author + " </time><section class='post-preview--excerpt'>" + data.summary.replace(/\s*/g, "") + "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" + data.images.medium + "></div>";
    var db_div = document.createElement("div");
    var qs_href = ".timeline a[href='" + fetch_href + "']";
    var qs_dom = document.querySelector(qs_href);
    if (qs_dom) {
        qs_dom.parentNode.replaceChild(db_div, qs_dom);
        db_div.innerHTML = db_html;
    }
}
// 解析豆瓣 End
