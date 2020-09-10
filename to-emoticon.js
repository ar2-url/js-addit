const toEmoticon = meaning => {
switch(meaning) {
  case 'shrug' 
    return '|_{"}_|' 
  case 'smiley face' 
    return ':)'
  case 'frowny face' 
    return':('
  case 'winky face' 
    return ';)'
  case 'heart'
    return '<3'
  default 
    return '|_(* ~ *)_|'
  }
}

//correct solution
const toEmoticon = meaning => {
    switch (meaning) {
        case 'shrug':
            return '|_{"}_|'
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}
/*
// As a function declaration: 
function toEmoticon(meaning) {
    switch (meaning) {
        case 'shrug':
            return '|_{"}_|'
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}
*/
console.log(toEmoticon("whatever"))

// or console.log(toEmoticon("heart"))
//should return <3