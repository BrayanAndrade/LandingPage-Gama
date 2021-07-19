const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    let date = {
        name,
        email,
    }

    let convertDate = JSON.stringify(date);

    localStorage.setItem("lead", convertDate)

    let content = document.getElementById("content")

    let carregando = `<p style="color:#fff; text-align:center;">Carregando...</p>`

    let pronto = `<p style="color:#fff; text-align:center;">Prontinho</p>`

    let obrigado = `<p style="color:#fff; text-align:center;">Muito Obrigdo!  <3</p>`
  
    content.innerHTML = carregando
  
  
    setTimeout(() => {
      content.innerHTML = pronto
    }, 1000)

    setTimeout(() => {
        content.innerHTML = obrigado
      }, 2000)
})