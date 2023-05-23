const justify = (text:string,desiredLength:number) => {
    let lines = [];
    let index = 0;
    let words = text.split(' ');
    while (index<words.length){

        let count = words[index].length;
        let last = index + 1;
        if(words[last].length + count + 1 > desiredLength) break;

        // otherwise increase the amount of chars, and go   // to the next word
        count += words[last].length + 1;
        last++;
        index++;
    }

    return text;
}

export default justify