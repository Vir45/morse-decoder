const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    /*расширяем встроенный прототип в JavaScript для того, чтобы
    метод replace заменял все вхождения, а не только первое, для этого разбиваем строку 
    по тому значению, которое нужно заменить, после объединяем посредстовом того значения, которое нужно оставить
    */
    
    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
    
        let arrOfWord = expr.split('**********');

        /*после того как из строки мы получили массив, каждый элемент массива arrOfWord разделяем на строки в 10 символов, после заменяем 
        все 10 и 11, убираем нули, и заменяем значения каждого элемента значениями из объекта MORSE_TABLE
        */

        let arrOfLetter = arrOfWord.map(function(item) {
            let result = [];
            for(let i = 0; item.length - i > 0; i +=10) {
                result.push(item.slice(i, (i + 10)));
            }
    
            let newresult = result.map(item => item.replaceAll('10', '.').replaceAll('11', '-').replaceAll('0', '')).map(item=> MORSE_TABLE[item]).join('');
    
            return newresult;
        });
    return arrOfLetter.join(' ');
}

module.exports = {
    decode
}