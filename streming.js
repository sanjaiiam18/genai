class TextStreamer {
    constructor(text, interval) {
        this.text = text;
        this.interval = interval;
        this.index = 0;
    }

    stream() {
        const timer = setInterval(() => {
            process.stdout.write(this.text[this.index]);
            this.index++;
            if (this.index === this.text.length) {
                clearInterval(timer); // Stop when the text is fully printed
                process.stdout.write('\n'); // Move to the next line after completion
            }
        }, this.interval);
    }
}
 module.exports=TextStreamer;