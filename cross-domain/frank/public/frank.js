const rand = 'JSONP_frank.com_' + Math.random()
window[rand] = (data) => {
  console.log(data)
}

const script = document.createElement('script')
script.src = `http://qq.com:8888/friends.js?callback=${rand}`
script.onload = () =>{
  script.remove()
}
document.body.append(script)