document.getElementById("newsletterForm").addEventListener("submit", function (evt) {
  evt.preventDefault();
  saveData();
});

const saveData = () => { 

  let userName  = document.getElementById('newsletterUserName').value;
  let userEmail = document.getElementById('newsletterUserEmail').value;
  let mensagem  = document.getElementById('mensagem');

  if (userName == '' || userEmail == '') {
    mensagem.className = "";
    mensagem.classList.add("display-element", "text-error");
    mensagem.innerHTML = "Todos os campos são obrigatórios!";

    setTimeout(() => {
      mensagem.className = '';
      mensagem.classList.add("hide-element");
    }, 2000);

    return;
  }

  let existsData = JSON.parse(localStorage.getItem('barberBlackFriday')) || [];

  let barberBlackFriday = {
    name: userName,
    email: userEmail
  };

  existsData.push(barberBlackFriday);
  localStorage.setItem('barberBlackFriday', JSON.stringify(existsData));
 
  mensagem.className = "";
  mensagem.classList.add("display-element", "text-success");
  mensagem.innerHTML = `Obrigado <strong>${userName}</strong>! <br>Agora você estará recebendo nossas promoções em seu e-mail!`;

  setTimeout(() => {
    mensagem.className = "";
    mensagem.classList.add("hide-element");
  }, 5000);

}
