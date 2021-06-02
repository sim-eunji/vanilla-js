const wrapper = document.querySelector('.wrapper')
const items = document.querySelectorAll('.item')

document.body.addEventListener('click', function (e) {
  const targetClassList = e.target.classList
  if (targetClassList.contains('context')) return
  if (targetClassList.contains('item')) {
    targetClassList.toggle('open')
    items.forEach(function (elem) {
      if (elem !== e.target) elem.classList.remove('open')
    })
    return
  }
  items.forEach(function (elem) {
    elem.classList.remove('open')
  })
})
