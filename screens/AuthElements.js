
export function initArrayInputs(mailInputOnChange,passInputOnChange) {
    let mailInput = { title: "Почта: ", secured: false, text: "example@mail.com", titleNewLined: true, onChange: mailInputOnChange };
    let passwordInput = { title: "Пароль: ", secured: true, text: "password", titleNewLined: true, onChange: passInputOnChange };
    return [mailInput, passwordInput]; 
  }

export function initArrayLoginButtons(reactionOne,reactionTwo) {
    let fromLogToSign = { text: "Нет аккаунта?",reaction: reactionTwo }
    let logInButton = { text: "Войти", reaction: reactionOne }

    return [logInButton, fromLogToSign]
  }

export function initArraySigninButtons(reactionOne,reactionTwo) {
    let fromSignToLog = { text: "Уже есть аккаунт?",reaction: reactionTwo }
    let signInButton = { text: "Регистрация", reaction: reactionOne }

    return [signInButton, fromSignToLog]
 
  }