//  ******* Menu *******

((d) => {
  const $menuBtn = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $menuBtn.addEventListener("click", (e) => {
    $menuBtn.firstElementChild.classList.toggle("none");
    $menuBtn.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $menuBtn.firstElementChild.classList.remove("none");
    $menuBtn.lastElementChild.classList.toggle("none");
    $menu.classList.remove("is-active");
  });
})(document);


((d)=> {
  const $imgText = d.querySelectorAll('.none')

  d.addEventListener('mouseover', e => {
    if(!e.target.matches === $imgText)return false
    
    
  
   
    }
  )

  
})(document)

//  ******* Contact Form *******


// (() => {

const d = document,
 $form = d.querySelector('.contact-form'), 
$loader = d.querySelector('.contact-form-loader'),
$response = d.querySelector('.contact-form-response')


$form.addEventListener('submit',  e => {
  e.preventDefault()
  $loader.classList.remove('none')

  fetch('https://formsubmit.co/ajax/nicolas.vicencio.or@gmail.com', {
    method: 'POST',
    body: new FormData()
  })
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => {
    console.log(json)

    location.hash = '#gracias'
    setTimeout(() => {
      location.hash = '#close'
    }, 4000)


  })
  .catch(err => {
    let message = err.status || 'Ha ocurrido un error en el envio, por favor intenta nuevamente'
    $response.innerHTML = `<h3> ERROR ${err.status} : ${message}`

  })
  .finally(() => {
    $loader.classList.add('none')
  })
})
  
// })(document)