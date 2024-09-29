function openCV() {
  window.open('https://www.topcv.vn/xem-cv/AgEODF9ZVgcKVVcEUVEFUgcOUgBSUlwHUQVSWA3bf5', '_blank')
}

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
  remainingDays = remainingDays % 30

  const element = document.getElementById(elementId)
  element.innerText = `${years} năm ${months} tháng ${remainingDays} ngày`
}

displayDiffTime(new Date('2021-07-21'), new Date(), 'working-time-nal-solution')
