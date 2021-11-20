"use strict"

document.addEventListener('DOMContentLoaded', function (){
  const form = document.getElementById('form_req');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
      let error = 0;
      var regEx = /^(?:\+38)?(0[5-9][0-9]\d{7})$/gm;
      var regex = /^[а-яёА-ЯЁ a-zA-zЇІ]{2,60}$/;
      let phoneNumber = document.getElementById("phone");
      let nameVal = document.getElementById("fio");
      if(!phoneNumber.value.match(regEx)){
        error++;
      }
      if(!nameVal.value.match(regex)){
        error++;
      }
    let formData = new FormData(form);

    if (error === 0){
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      }).then(() => alert('Форма успешно отправлена!'));
    } else {
      alert("Пожалуйста введите правильный номер телефона и/или ФИО");
    }
  }
});

function myFunction(a) {
    a.parentNode.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }