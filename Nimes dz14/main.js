const 
    modalButton = document.querySelector(".User_login"), /* создаем переменную - ищет во всем документе ссылку с назв юзер логин */
    modalWindow = document.querySelector(".modal"), /* само модальное окно */
    modalFon = document.querySelector(".modal_fon"), /* модальный фон */
    escButton = modalWindow.querySelector(".modal_ecs"), /* кнопка эскейп */
    loginInput = modalWindow.querySelector(".modal_login"), 
    loginPass = modalWindow.querySelector(".modal_password"),
    authButton = modalWindow.querySelector(".modal_auth"),
    errorPass= modalWindow.querySelector(".error_pass"),
    errorLog = modalWindow.querySelector(".error_log");



function toggleModal() {
    modalWindow.classList.toggle("hidden"); /* класс  указываем без точки */
    modalFon.classList.toggle("hidden");
    loginInput.classList.remove("invalid"); /* убрать класс */
    loginPass.classList.remove("invalid");
    errorPass.classList.add("hidden");  /* добавить класс */
    errorLog.classList.add("hidden");
    loginInput.value = ""; /* каждый раз при откртии модального окна поля пустые  */
    loginPass.value = "";
}

function submitForm(evt) {
    const loginPassRegEx =         /*  RegEx регулярные выражения */
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g; /* g-джава пройдется по всей строчке до конца */

    const isLoginValid =
        loginInput.value.length > 3 && loginInput.value.trim() !== ""; /* trim убирает пробелы */
    const isPasswordValid = loginPassRegEx.test(loginPass.value);
    // const isFormValid = isLoginValid && isPasswordValid;
        if (isLoginValid) {
          loginInput.classList.remove("invalid");
          errorLog.classList.add("hidden");
        } else {
            evt.preventDefault();  
            loginInput.classList.add("invalid");
            errorLog.classList.remove("hidden");
          }
        if (isPasswordValid) {
          loginPass.classList.remove("invalid");
          errorPass.classList.add("hidden");
        } else {
          evt.preventDefault(); 
          loginPass.classList.add("invalid");
          errorPass.classList.remove("hidden");
      }
    }
/*     if (isFormValid) {
    loginInput.classList.remove("invalid");
    loginPass.classList.remove("invalid");
    } else {    
        evt.preventDefault();  
        loginInput.classList.add("invalid");
        loginPass.classList.add("invalid");
        errorPass.classList.remove("hidden");
        errorLog.classList.remove("hidden");
        }
    }
 */


modalButton.addEventListener("click", toggleModal);
escButton.addEventListener("click",toggleModal);
authButton.addEventListener("click",submitForm);
modalFon.addEventListener("click",toggleModal); 
document.addEventListener('keydown', function(evt) {
  // Проверяем, что код клавиши равен 27
  if (evt.keyCode === 27) {
    console.log("12345");
    modalWindow.classList.toggle("hidden");
    modalFon.classList.toggle("hidden");
    }
  });
  





/* modalButton.addEventListener("click", alertMess); */


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});