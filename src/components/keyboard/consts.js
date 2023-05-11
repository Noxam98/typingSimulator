const codeToData = {
    Escape:       [{lang: 'en', value: '',  shift: '', label: 'Esc'},  {lang: 'ua', value: "",  shift: '', label: 'Esc'},  {lang: 'ru', value: '',  shift: '', label: 'Esc'}],
    F1:           [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F2:           [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F3:           [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F4:           [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F5:           [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F6:           [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F7:           [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F8:           [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F9:           [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F10:          [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F11:          [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    F12:          [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    Tab:          [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    Delete:       [{lang: 'en', value: '',  shift: '', label: 'Del'},  {lang: 'ua', value: "",  shift: '', label: 'Del'},  {lang: 'ru', value: '',  shift: '', label: 'Del'}],
    Digit1:       [{lang: 'en', value: '1', shift: '!'}, {lang: 'ua', value: '1', shift: '!'}, {lang: 'ru', value: '1', shift: '!'}],
    Digit2:       [{lang: 'en', value: '2', shift: '@'}, {lang: 'ua', value: '2', shift: '"'}, {lang: 'ru', value: '2', shift: '"'}],
    Digit3:       [{lang: 'en', value: '3', shift: '#'}, {lang: 'ua', value: '3', shift: '№'}, {lang: 'ru', value: '3', shift: '№'}],
    Digit4:       [{lang: 'en', value: '4', shift: '$'}, {lang: 'ua', value: '4', shift: ';'}, {lang: 'ru', value: '4', shift: ';'}],
    Digit5:       [{lang: 'en', value: '5', shift: '%'}, {lang: 'ua', value: '5', shift: '%'}, {lang: 'ru', value: '5', shift: '%'}],
    Digit6:       [{lang: 'en', value: '6', shift: '^'}, {lang: 'ua', value: '6', shift: ':'}, {lang: 'ru', value: '6', shift: ':'}],
    Digit7:       [{lang: 'en', value: '7', shift: '&'}, {lang: 'ua', value: '7', shift: '?'}, {lang: 'ru', value: '7', shift: '?'}],
    Digit8:       [{lang: 'en', value: '8', shift: '*'}, {lang: 'ua', value: '8', shift: '*'}, {lang: 'ru', value: '8', shift: '*'}],
    Digit9:       [{lang: 'en', value: '9', shift: '('}, {lang: 'ua', value: '9', shift: '('}, {lang: 'ru', value: '9', shift: '('}],
    Digit0:       [{lang: 'en', value: '0', shift: ')'}, {lang: 'ua', value: '0', shift: ')'}, {lang: 'ru', value: '0', shift: ')'}],
    KeyQ:         [{lang: 'en', value: 'q', shift: 'Q'}, {lang: 'ua', value: "й", shift: 'Й'}, {lang: 'ru', value: 'й', shift: 'Й'}],
    KeyW:         [{lang: 'en', value: 'w', shift: 'W'}, {lang: 'ua', value: "ц", shift: 'Ц'}, {lang: 'ru', value: 'ц', shift: 'Ц'}],
    KeyE:         [{lang: 'en', value: 'e', shift: 'E'}, {lang: 'ua', value: "у", shift: 'У'}, {lang: 'ru', value: 'у', shift: 'У'}],
    KeyR:         [{lang: 'en', value: 'r', shift: 'R'}, {lang: 'ua', value: "к", shift: 'К'}, {lang: 'ru', value: 'к', shift: 'К'}],
    KeyT:         [{lang: 'en', value: 't', shift: 'T'}, {lang: 'ua', value: "е", shift: 'Е'}, {lang: 'ru', value: 'е', shift: 'Е'}],
    KeyY:         [{lang: 'en', value: 'y', shift: 'Y'}, {lang: 'ua', value: "н", shift: 'Н'}, {lang: 'ru', value: 'н', shift: 'Н'}],
    KeyU:         [{lang: 'en', value: 'u', shift: 'U'}, {lang: 'ua', value: "г", shift: 'Г'}, {lang: 'ru', value: 'г', shift: 'Г'}],
    KeyI:         [{lang: 'en', value: 'i', shift: 'I'}, {lang: 'ua', value: "ш", shift: 'Ш'}, {lang: 'ru', value: 'ш', shift: 'Ш'}],
    KeyO:         [{lang: 'en', value: 'o', shift: 'O'}, {lang: 'ua', value: "щ", shift: 'Щ'}, {lang: 'ru', value: 'щ', shift: 'Щ'}],
    KeyP:         [{lang: 'en', value: 'p', shift: 'P'}, {lang: 'ua', value: "з", shift: 'З'}, {lang: 'ru', value: 'з', shift: 'З'}],
    KeyA:         [{lang: 'en', value: 'a', shift: 'A'}, {lang: 'ua', value: "ф", shift: 'Ф'}, {lang: 'ru', value: 'ф', shift: 'Ф'}],
    KeyS:         [{lang: 'en', value: 's', shift: 'S'}, {lang: 'ua', value: "ы", shift: 'Ы'}, {lang: 'ru', value: 'і', shift: 'І'}],
    KeyD:         [{lang: 'en', value: 'd', shift: 'D'}, {lang: 'ua', value: "в", shift: 'В'}, {lang: 'ru', value: 'в', shift: 'В'}],
    KeyF:         [{lang: 'en', value: 'f', shift: 'F'}, {lang: 'ua', value: "а", shift: 'А'}, {lang: 'ru', value: 'а', shift: 'А'}],
    KeyG:         [{lang: 'en', value: 'g', shift: 'G'}, {lang: 'ua', value: "п", shift: 'П'}, {lang: 'ru', value: 'п', shift: 'П'}],
    KeyH:         [{lang: 'en', value: 'h', shift: 'H'}, {lang: 'ua', value: "р", shift: 'Р'}, {lang: 'ru', value: 'р', shift: 'Р'}],
    KeyJ:         [{lang: 'en', value: 'j', shift: 'J'}, {lang: 'ua', value: "о", shift: 'О'}, {lang: 'ru', value: 'о', shift: 'О'}],
    KeyK:         [{lang: 'en', value: 'k', shift: 'K'}, {lang: 'ua', value: "л", shift: 'Л'}, {lang: 'ru', value: 'л', shift: 'Л'}],
    KeyL:         [{lang: 'en', value: 'l', shift: 'L'}, {lang: 'ua', value: "д", shift: 'Д'}, {lang: 'ru', value: 'д', shift: 'Д'}],
    KeyZ:         [{lang: 'en', value: 'z', shift: 'Z'}, {lang: 'ua', value: "я", shift: 'Я'}, {lang: 'ru', value: 'я', shift: 'Я'}],
    KeyX:         [{lang: 'en', value: 'x', shift: 'X'}, {lang: 'ua', value: "ч", shift: 'Ч'}, {lang: 'ru', value: 'ч', shift: 'Ч'}],
    KeyC:         [{lang: 'en', value: 'c', shift: 'C'}, {lang: 'ua', value: "с", shift: 'С'}, {lang: 'ru', value: 'с', shift: 'С'}],
    KeyV:         [{lang: 'en', value: 'v', shift: 'V'}, {lang: 'ua', value: "м", shift: 'М'}, {lang: 'ru', value: 'м', shift: 'М'}],
    KeyB:         [{lang: 'en', value: 'b', shift: 'B'}, {lang: 'ua', value: "и", shift: 'И'}, {lang: 'ru', value: 'и', shift: 'И'}],
    KeyN:         [{lang: 'en', value: 'n', shift: 'N'}, {lang: 'ua', value: "т", shift: 'Т'}, {lang: 'ru', value: 'т', shift: 'Т'}],
    KeyM:         [{lang: 'en', value: 'm', shift: 'M'}, {lang: 'ua', value: "ь", shift: 'Ь'}, {lang: 'ru', value: 'ь', shift: 'Ь'}],
    ControlRight: [{lang: 'en', value: '',  shift: '', label: 'Crtl'},  {lang: 'ua', value: "",  shift: '', label: 'Crtl'},  {lang: 'ru', value: '',  shift: '', label: 'Crtl'}],
    BracketRight: [{lang: 'en', value: ']', shift: '}'}, {lang: 'ua', value: "ї", shift: 'Ї'}, {lang: 'ru', value: 'ъ', shift: 'Ъ'}],
    BracketLeft:  [{lang: 'en', value: '[', shift: '{'}, {lang: 'ua', value: "х", shift: 'Х'}, {lang: 'ru', value: 'х', shift: 'Х'}],
    ShiftRight:   [{lang: 'en', value: '',  shift: '', label: 'Shift'},  {lang: 'ua', value: "",  shift: '', label: 'Shift'},  {lang: 'ru', value: '',  shift: '', label: 'Shift'}],
    ArrowRight:   [{lang: 'en', value: '',  shift: '', label: '⇒'},  {lang: 'ua', value: "",  shift: '', label: '⇒'},  {lang: 'ru', value: '',  shift: '', label: '⇒'}],
    Backslash:    [{lang: 'en', value: "\\",shift: '|'}, {lang: 'ua', value: "ґ", shift: 'Ґ'}, {lang: 'ru', value: '\\',shift: '/'}],
    ShiftLeft:    [{lang: 'en', value: '',  shift: '', label: 'Shift'},  {lang: 'ua', value: "",  shift: '', label: 'Shift'},  {lang: 'ru', value: '',  shift: '', label: 'Shift'}],
    ArrowLeft:    [{lang: 'en', value: '',  shift: '', label: '⇐'},  {lang: 'ua', value: "",  shift: '', label: '⇐'},  {lang: 'ru', value: '',  shift: '', label: '⇐'}],
    Semicolon:    [{lang: 'en', value: ';', shift: ':'}, {lang: 'ua', value: "ж", shift: 'Ж'}, {lang: 'ru', value: 'ж', shift: 'Ж'}],
    Backquote:    [{lang: 'en', value: '`', shift: '~'}, {lang: 'ua', value: "'", shift: '~'}, {lang: 'ru', value: 'ё', shift: 'Ё'}],
    Backspace:    [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    ArrowDown:    [{lang: 'en', value: '',  shift: '', label: '⇓'},  {lang: 'ua', value: "",  shift: '', label: '⇓'},  {lang: 'ru', value: '',  shift: '', label: '⇓'}],
    AltRight:     [{lang: 'en', value: '',  shift: '', label: 'Alt'},  {lang: 'ua', value: "",  shift: '', label: 'Alt'},  {lang: 'ru', value: '',  shift: '', label: 'Alt'}],
    CapsLock:     [{lang: 'en', value: '',  shift: '', label: 'Caps'},  {lang: 'ua', value: "",  shift: '', label: 'Caps'},  {lang: 'ru', value: '',  shift: '', label: 'Caps'}],
    ArrowUp:      [{lang: 'en', value: '',  shift: '', label: '⇑'},  {lang: 'ua', value: "",  shift: '', label: '⇑'},  {lang: 'ru', value: '',  shift: '', label: '⇑'}],
    AltLeft:      [{lang: 'en', value: '',  shift: '', label: 'Alt'},  {lang: 'ua', value: "",  shift: '', label: 'Alt'},  {lang: 'ru', value: '',  shift: '', label: 'Alt'}],
    ControlLeft:  [{lang: 'en', value: '',  shift: '', label: 'Crtl'},  {lang: 'ua', value: "",  shift: '', label: 'Crtl'},  {lang: 'ru', value: '',  shift: '', label: 'Crtl'}],
    Period:       [{lang: 'en', value: '.', shift: '>'}, {lang: 'ua', value: "ю", shift: 'Ю'}, {lang: 'ru', value: 'ю', shift: 'Ю'}],
    Quote:        [{lang: 'en', value: "'", shift: '"'}, {lang: 'ua', value: "є", shift: 'Є'}, {lang: 'ru', value: 'э', shift: 'Э'}],
    Enter:        [{lang: 'en', value: '',  shift: ''},  {lang: 'ua', value: "",  shift: ''},  {lang: 'ru', value: '',  shift: ''}],
    Slash:        [{lang: 'en', value: '/', shift: '?'}, {lang: 'ua', value: ".", shift: ','}, {lang: 'ru', value: '.', shift: ','}],
    Space:        [{lang: 'en', value: ' ', shift: ' ', label: 'Space'}, {lang: 'ua', value: " ", shift: ' ', label: 'Space'}, {lang: 'ru', value: ' ', shift: ' ', label: 'Space'}],
    Minus:        [{lang: 'en', value: '-', shift: '_'}, {lang: 'ua', value: "-", shift: '_'}, {lang: 'ru', value: '-', shift: '_'}],
    Comma:        [{lang: 'en', value: ',', shift: '<'}, {lang: 'ua', value: "б", shift: 'Б'}, {lang: 'ru', value: 'б', shift: 'Б'}],
    Equal:        [{lang: 'en', value: '=', shift: '+'}, {lang: 'ua', value: "=", shift: '+'}, {lang: 'ru', value: '=', shift: '+'}],
    Windows:      [{lang: 'en', value: '', shift: '', label: 'Win'},   {lang: 'ua', value: "", shift: '', label: 'Win'},   {lang: 'ru', value: '', shift: '', label: 'Win'}],
    Fn:           [{lang: 'en', value: '', shift: ''}, {lang: 'ua', value: "", shift: ''}, {lang: 'ru', value: '', shift: ''}],
}

const keyboards = {

    types: {

        laptop: [
            [{code: 'Escape', width: 1.024}, {code: 'F1', width: 1.024}, {code: 'F2', width: 1.024}, {code: 'F3', width: 1.024}, {code: 'F4', width: 1.024}, {code: 'F5', width: 1.024}, {code: 'F6', width: 1.024}, {code: 'F7', width: 1.024}, {code: 'F8', width: 1.024}, {code: 'F9', width: 1.024}, {code: 'F10', width: 1.024}, {code: 'F11', width: 1.024}, {code: 'F12', width: 1.024}, {code: 'Delete', width: 1.68}],
            [{code: 'Backquote', width: .7}, {code: 'Digit1'}, {code: 'Digit2'}, {code: 'Digit3'}, {code: 'Digit4'}, {code: 'Digit5'}, {code: 'Digit6'}, {code: 'Digit7'}, {code: 'Digit8'}, {code: 'Digit9'}, {code: 'Digit0'}, {code: 'Minus'}, {code: 'Equal'}, {code: 'Backspace', width: 2.3}],
            [{code: 'Tab', width: 1.13}, {code: 'KeyQ'}, {code: 'KeyW'}, {code: 'KeyE'}, {code: 'KeyR'}, {code: 'KeyT'}, {code: 'KeyY'}, {code: 'KeyU'}, {code: 'KeyI'}, {code: 'KeyO'}, {code: 'KeyP'}, {code: 'BracketLeft'}, {code: 'BracketRight'}, {code: 'Backslash', width: 1.5}],
            [{code: 'CapsLock', width: 1.63}, {code: 'KeyA'}, {code: 'KeyS'}, {code: 'KeyD'}, {code: 'KeyF'}, {code: 'KeyG'}, {code: 'KeyH'}, {code: 'KeyJ'}, {code: 'KeyK'}, {code: 'KeyL'}, {code: 'Semicolon'}, {code: 'Quote'}, {code: 'Enter', width: 2.14}],
            [{code: 'ShiftLeft', width: 2.13}, {code: 'KeyZ'}, {code: 'KeyX'}, {code: 'KeyC'}, {code: 'KeyV'}, {code: 'KeyB'}, {code: 'KeyN'}, {code: 'KeyM'}, {code: 'Comma'}, {code: 'Period'}, {code: 'Slash'}, {code: 'ShiftRight', width: 2.77}],
            [{code: 'ControlLeft'}, {code: 'Fn', disable: true}, {code: 'Windows', disable: true}, {code: 'AltLeft'}, {code: 'Space', width: 5.2} , {code: 'AltRight'}, {code: 'ControlRight'}, {code: 'ArrowLeft'}, [{code: 'ArrowUp', style: {}}, {code: 'ArrowDown'}], {code: 'ArrowRight'}, ],
        ]
    }

}

export function getAvailableInputLangs(){
    return codeToData.KeyA.map(data => data.lang)
}
export function getKeyboardRaw(keyboardType, theme){
    return keyboards.types[keyboardType].map(line => line.map(key => {
        if (Array.isArray(key))
            return key.map(key => {
                return({...key, keyData: codeToData[key.code]})
            })
        return({...key, keyData: codeToData[key.code]})
    }))
}

