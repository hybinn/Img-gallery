// const current = document.getElementById('current') //아래줄과 동일
const current = document.querySelector('#current')
const imgs = document.querySelectorAll('.imgs img') //.imgs라고 영역 안에 있는 img를 넣는단뜻

imgs.forEach((img) => img.addEventListener('mouseover', imgClick))

function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 1))
  current.src = e.target.src
  current.classList.add('fade-in')
  setTimeout(() => current.classList.remove('fade-in'), 500)
  e.target.style.opacity = 0.4
}
