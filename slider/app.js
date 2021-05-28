const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

const colors = ['#ffe066', '#ffc078', '#4dabf7', '#bac8ff']

container.innerHTML = colors
  ?.map((color, idx) => {
    let position = 'next'

    // 맨 첫
    if (idx == 0) {
      position = 'active'
    }

    // 마지막
    if (idx == colors.length - 1) {
      position = 'last'
    }

    if (colors.length <= 1) {
      position = 'active'
    }

    return `<div style="background-color: ${color}" class="slide ${position}"></div>`
  })
  .join('')

const onClickSlider = (type) => {
  const active = document.querySelector('.active')
  const last = document.querySelector('.last')
  let next = active.nextElementSibling

  active.classList.remove(['active'])
  last.classList.remove(['last'])
  next.classList.remove(['next'])

  if (type === 'prev') {
    active.classList.add('next')
    last.classList.add('active')
    next = last.previousElementSibling
    if (!next) {
      next = container.lastElementChild
    }
    next.classList.remove(['next'])
    next.classList.add('last')
    return
  }
  active.classList.add('last')
  last.classList.add('next')
  next.classList.add('active')
}

nextBtn.addEventListener('click', () => {
  onClickSlider()
})
prevBtn.addEventListener('click', () => {
  onClickSlider('prev')
})
