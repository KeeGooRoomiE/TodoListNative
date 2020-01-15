
export function initArrayInputs(mailInputOnChange,passInputOnChange) {
    let mailInput = { title: "Почта: ", secured: false, text: "example@mail.com", titleNewLined: true, onChange: mailInputOnChange };
    let passwordInput = { title: "Пароль: ", secured: true, text: "password", titleNewLined: true, onChange: passInputOnChange };
    return [mailInput, passwordInput]; 
  }

export function initArrayLoginButtons(reaction) {
    let fromLogToSign = { text: "Нет аккаунта?", link: "/register" }
    let logInButton = { text: "Войти", reaction: reaction, link: "/home" }

    return [logInButton, fromLogToSign]
  }

export function initArraySigninButtons(reaction) {
    let fromSignToLog = { text: "Уже есть аккаунт?", link: "/login" }
    let signInButton = { text: "Регистрация", reaction: reaction, link: "/home" }

    return [signInButton, fromSignToLog]

  }