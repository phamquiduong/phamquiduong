window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar')

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

const contractLink = document.getElementById('contract-link-facebook')
const isMobile = /Mobi|Android/i.test(navigator.userAgent)
if (isMobile) {
  contractLink.href = 'fb://profile/100050462980089'
}

function displayDiffTime(startDate, endTime, elementId) {
  const diffTime = Math.abs(endTime - startDate)
  let remainingDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  const years = Math.floor(remainingDays / 365)
  remainingDays = remainingDays % 365

  const months = Math.floor(remainingDays / 30)

  const element = document.getElementById(elementId)
  element.innerText = `${years} years ${months} months`
}

displayDiffTime(new Date('2021-07-21'), new Date('2024-11-15'), 'working-time-nal-solution')

document.querySelector('.close').onclick = function () {
  document.getElementById('modal').style.display = 'none'
}

window.onclick = function (event) {
  if (event.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none'
  }
}

function setOpenModalEvent(elementId, src) {
  document.getElementById(elementId).onclick = function () {
    document.getElementById('modal').style.display = 'flex'
    document.getElementById('modalImage').src = src
  }
}

setOpenModalEvent('openModalDUTCer1', 'assets/img/IMG_20230323_100040.jpg')
setOpenModalEvent('openModalTKPCer1', 'assets/img/IMG20221215182702.jpg')
setOpenModalEvent('openModalTKPCer2', 'assets/img/IMG20221215182743.jpg')
