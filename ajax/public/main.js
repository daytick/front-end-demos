// 1. ajax 加载 css
getCSS.onclick = () => {
    // 第1步：创建请求对象
    const request  = new XMLHttpRequest();
    // 第2步：设置请求信息
    request.open('get', '/style.css');
    // 第3步：监听 readyState 值变化
    request.onreadystatechange = () => {
        if(request.readyState === 4 && 
            request.status >= 200 && request.status < 300){
                console.log(request.response);
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style);
            }
    }
    // 第4步：发送请求
    request.send();
}

// 2. ajax 加载 js
getJS.onclick = () => {
    // 第1步：创建请求对象
    const request  = new XMLHttpRequest();
    // 第2步：设置请求信息
    request.open('get', '/2.js');
    // 第3步：监听 readyState 值变化
    request.onreadystatechange = () => {
        if(request.readyState === 4 && 
            request.status >= 200 && request.status < 300){
                console.log(request.response);
                const script = document.createElement('script');
                script.innerHTML = request.response;
                document.head.appendChild(script);
            }
    }
    // 第4步：发送请求
    request.send();
}

// 3. ajax 加载 html
getHTML.onclick = () => {
    // 第1步：创建请求对象
    const request  = new XMLHttpRequest();
    // 第2步：设置请求信息
    request.open('get', '/3.html');
    // 第3步：监听 readyState 值变化
    request.onreadystatechange = () => {
        if(request.readyState === 4 && 
            request.status >= 200 && request.status < 300){
                console.log(request.response);
                const div = document.createElement('div');
                div.innerHTML = request.response;
                document.body.appendChild(div);
            }
    }
    // 第4步：发送请求
    request.send();
}

// 4. ajax 加载 xml
getXML.onclick = () => {
    // 第1步：创建请求对象
    const request  = new XMLHttpRequest();
    // 第2步：设置请求信息
    request.open('get', '/4.xml');
    // 第3步：监听 readyState 值变化
    request.onreadystatechange = () => {
        if(request.readyState === 4 && 
            request.status >= 200 && request.status < 300){
                console.log(request.responseXML);
                // dom分两种：html dom 和 xml dom
                const dom = request.responseXML;
                const name = dom.querySelector('name').textContent;
                const span = document.createElement('span');
                span.textContent = name;
                greet.appendChild(span);
            }
    }
    // 第4步：发送请求
    request.send();
}

// 5. ajax 加载 json
getJSON.onclick = () => {
    // 第1步：创建请求对象
    const request  = new XMLHttpRequest();
    // 第2步：设置请求信息
    request.open('get', '/5.json');
    // 第3步：监听 readyState 值变化
    request.onreadystatechange = () => {
        if(request.readyState === 4 && 
            request.status >= 200 && request.status < 300){
                console.log(request.response);
                const json = JSON.parse(request.response);
                json.map(item => {
                    const li = document.createElement('li');
                    li.textContent = item.id;
                    ids.appendChild(li);
                })
            }
    }
    // 第4步：发送请求
    request.send();
}

// ajax 模拟分页
let current = 1;
// 上一页
getPre.onclick = () => {
    // 第1步：创建请求对象
    const request  = new XMLHttpRequest();
    // 第2步：设置请求信息
    current = current - 1 <= 0 ? 1 : current - 1;
    request.open('get', `/page${current}`);
    // 第3步：监听 readyState 值变化
    request.onreadystatechange = () => {
        if(request.readyState === 4 && 
            request.status >= 200 && request.status < 300){
                console.log(request.response);
                const json = JSON.parse(request.response);
                ids.textContent = ''
                json.map(item => {
                    const li = document.createElement('li');
                    li.textContent = item.id;
                    ids.appendChild(li);
                })
            }
    }
    // 第4步：发送请求
    request.send();
}
// 下一页
getNext.onclick = () => {
    // 第1步：创建请求对象
    const request  = new XMLHttpRequest();
    // 第2步：设置请求信息
    current = current + 1 >= 3 ? 3 : current + 1;
    request.open('get', `/page${current}`);
    // 第3步：监听 readyState 值变化
    request.onreadystatechange = () => {
        if(request.readyState === 4 && 
            request.status >= 200 && request.status < 300){
                console.log(request.response);
                const json = JSON.parse(request.response);
                ids.textContent = ''
                json.map(item => {
                    const li = document.createElement('li');
                    li.textContent = item.id;
                    ids.appendChild(li);
                })
            }
    }
    // 第4步：发送请求
    request.send();
}