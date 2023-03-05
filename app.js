const initTypingAnimation = () => {
    const title = document.querySelector('#home .banner h1')
    const span = document.querySelector('#home .banner span')
    const paragraph = document.querySelector('#home .banner p')
  
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
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
         if (entry.isIntersecting) {
             entry.target.classList.add('show');
         } else {
             entry.target.classList.remove('show');
         }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));


initTypingAnimation()