const accordions = document.querySelectorAll('.accordion__header')

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    accordions.forEach((item) => {
      if (item !== accordion) {
        item.parentElement.classList.remove('open')
      }
    })

    accordion.parentElement.classList.toggle('open')
  })
})

document.getElementById('1').onclick = function () {
  document.querySelector('model-viewer').src =
    'blender-home-design/exterior/luxury-home/luxury-home.glb'
}
document.getElementById('2').onclick = function () {
  document.querySelector('model-viewer').src =
    'blender-home-design/interior/bedroom/bedroom.glb'
}
document.getElementById('3').onclick = function () {
  document.querySelector('model-viewer').src = 'objects/pergola/pergola.glb'
}
