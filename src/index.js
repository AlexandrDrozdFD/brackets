module.exports = function check(str, bracketsConfig) {
    const openBracket = bracketsConfig.map(item => item[0]);
  
    const closeBracket = bracketsConfig.map(item => item[1]);

    const stack = [];
    const strIn = str.split('');
 
    if (strIn.length % 2 !== 0) {
        return false;                 
    }
    
    for (let i = 0; i <= strIn.length - 1; i++) {
        
        if (openBracket.includes(strIn[i])) {
            stack.push(strIn[i]);
        } 
        if (closeBracket.indexOf(strIn[i]) === openBracket.indexOf(stack[stack.length - 1])) {
           stack.pop();
        }
    }
    return stack.length === 0;
    
}
