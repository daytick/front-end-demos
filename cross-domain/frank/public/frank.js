function jsonp(url) {
  return new Promise((resolve, reject) => {
    const rand = 'JSONP_frank.com_' + Math.random()
    window[rand] = data => {
      resolve(data)
    }
    const script = document.createElement('script')
    script.src = `${url}?callback=${rand}`
    script.onload = () => {
      script.remove()
    }
    script.onerror = () => {
      reject()
    }
    document.body.append(script)
  })
}

jsonp('http://qq.com:8888/friends.js')
  .then(data => console.log(data))