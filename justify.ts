const justify = (text:string,desiredLength:number) => {
    let lines = [];
    let index = 0;
    let words = text.split(' ');
    while(index < words.length) {
        let count = words[index].length;
        let last = index + 1;

        while(last < words.length) {
            if (words[last].length + count + 1 > desiredLength) break;
            count += words[last].length + 1;
            last++;
        }

        let line = "";
        let difference = last - index - 1;

        // if we're on the last line or the number of words in the line is
        // 1, we left justify
        if (last === words.length || difference === 0) {
            for (let i = index; i < last; i++) {
                line += words[i] + " ";
            }

            line = line.substring (0, line.length - 1);
            for (let i = line.length; i < desiredLength; i++) {
                line += " ";
            }
        } else {
            // now we need to middle justify, which is putting equal amount
            // of spaces between words
            let spaces = (desiredLength - count) / difference;
            let remainder = (desiredLength - count) % difference;

            for (let i = index; i < last; i++) {
                line += words[i];

                if( i < last - 1) {
                    let limit = spaces + ((i - index) < remainder ? 1 : 0)
                    for (let j = 0; j <= limit; j++) {
                        line += " ";
                    }
                }
            }
        }
        lines.push(line);
        index = last;
    }
    return lines.join()
}

export default justify