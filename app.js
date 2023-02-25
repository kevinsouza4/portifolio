const initTypingAnimation = () => {
    const title = document.querySelector('h1')
    const span = document.querySelector('span')
    const paragraph = document.querySelector('p')
  
    const typingAnimation = (element) => {
  
      if (element == title) {
        element.innerHTML = 'Olá, eu sou o '
        const textToArray = element.innerHTML.split('')
        element.innerHTML = ''
  
        textToArray.forEach((item, index) => {
          setTimeout(() => element.innerHTML += item, 120 * index)
        })
  
      } else if (element == span) {
        element.innerHTML = 'Kevin Souza :)'
        const textToArray = element.innerHTML.split('')
        element.innerHTML = ''
  
        textToArray.forEach((item, index) => {
          setTimeout(() => element.innerHTML += item, 150 * index)
        })
  
      } else {
        element.innerHTML = 'Desenvolvedor Front-End'
        const textToArray = element.innerHTML.split('')
        element.innerHTML = ''
  
        textToArray.forEach((item, index) => {
          setTimeout(() => element.innerHTML += item, 75 * index)
        })
  
      }
  
    }
  
    typingAnimation(title)
    setTimeout(() => typingAnimation(span), 1600)
    setTimeout(() => typingAnimation(paragraph), 3700)
  
  }

initTypingAnimation()