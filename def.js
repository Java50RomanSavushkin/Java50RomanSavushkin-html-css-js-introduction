// 1.Write marvels-field game application
// 1.1.Game logic
// 1.1.1.Start Game
// 1.1.1.1.A question appears at top of the screen
// 1.1.1.2.Squares with black background (close letters) with the answer word letters appear on the screen
// 1.1.1.3.Input field for entering word but in the state “readOnly”
// 1.1.1.4.Number of letters the gamer may enter appears on the screen under the 1.1.1.3
// 1.1.1.4.1.Number of letters is computed as 30% from the answer word
// 1.1.1.5.Input field for entering a letter (state write/read)
// 1.1.1.6.Button “guess”
// 1.1.2.The game process
// 1.1.2.1.The gamer may input a letter only if the letters number does not exceed
// 1.1.2.1.1.The application must “open” (white background) the letter in all positions of the answer word
// 1.1.2.1.2.If the number of the possible letters exceeds the limit
// 1.1.2.1.2.1.Field 1.1.1.3 changes state to “write/read”
// 1.1.2.1.2.2.Field 1.1.1.5 changes state to “readOnly”
// 1.1.2.2.The gamer may hit button “guess”
// 1.1.2.2.1.By hitting the button, the gamer expresses readiness of the word guess
// 1.1.2.2.1.1.Field 1.1.1.3 changes state to “write/read”
// 1.1.2.2.1.2.Field 1.1.1.5 changes state to “readOnly”
// 1.1.2.3.The gamer may type guess word if the 1.1.1.3 is not in the state “readOnly”
// 1.1.2.3.1.The game is over after inputting the guess word
// 1.1.3.Finishing game
// 1.1.3.1.If the typed word equals the answer guess the proper message should appear
// 1.1.3.2.If the typed word doesn’t equal the answer word the proper message should appear
// 1.1.3.3.The button “play again” appears
// 1.1.3.4.Field 1.1.1.3 changes state to “readOnly”

// 1. Напишите приложение для игры в поле чудес
// 1.1.Игровая логика
// 1.1.1.Начать игру
// 1.1.1.1.Вверху экрана появляется вопрос
// 1.1.1.2.На экране появляются квадратики с черным фоном (закрытые буквы) с буквами ответного слова
// 1.1.1.3.Поле ввода для ввода слова, но в состоянии «Только для чтения»
// 1.1.1.4.Количество букв, которые может ввести игрок, отображается на экране под 1.1.1.3.
// 1.1.1.4.1.Количество букв рассчитывается как 30% от слова ответа
// 1.1.1.5. Поле ввода для ввода буквы (состояние запись/чтение)
// -1.1.1.6.Кнопка «угадать»
// 1.1.2.Игровой процесс
// 1.1.2.1.Игрок может ввести букву только в том случае, если количество букв не превышает
// 1.1.2.1.1.Приложение должно «открывать» (белый фон) букву во всех позициях ответного слова
// 1.1.2.1.2.Если количество возможных букв превышает лимит
// 1.1.2.1.2.1.Поле 1.1.1.3 меняет состояние на «запись/чтение»
// 1.1.2.1.2.2.Поле 1.1.1.5 меняет состояние на «Только для чтения»
// 1.1.2.2.Игрок может нажать кнопку «угадать».
// 1.1.2.2.1.Нажатием кнопки игрок выражает готовность угадать слово
// 1.1.2.2.1.1.Поле 1.1.1.3 меняет состояние на «запись/чтение»
// 1.1.2.2.1.2.Поле 1.1.1.5 меняет состояние на «Только для чтения»
// 1.1.2.3.Игрок может ввести угадываемое слово, если 1.1.1.3 не находится в состоянии «Только для чтения».
// 1.1.2.3.1.Игра заканчивается после ввода угаданного слова
// 1.1.3.Завершение игры
// 1.1.3.1.Если набранное слово соответствует ответу, угадайте, должно появиться соответствующее сообщение
// 1.1.3.2.Если набранное слово не совпадает со словом ответа, должно появиться соответствующее сообщение
// 1.1.3.3.Появляется кнопка «воспроизвести снова»
// 1.1.3.4.Поле 1.1.1.3 меняет состояние на «Только для чтения»


  
  
  
  
