import greeting from './x'
import img from './assets/webpack.png'

console.log(greeting)
console.log(img)

// 加载图片
const div = document.querySelector("#app")
div.innerHTML = `<img src='${img}'>`

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
  // 懒加载
  const promise = import('./lazy')
  promise.then(
    (module) => {
      const fn = module.default
      fn()
    },
    () => {
      console.log('模块加载出错！')
    })
}
div.appendChild(button)