const fs = require('fs');

console.log("First print statement");

async function writingFile(){
    console.log("Before writing in the file");
    await fs.writeFile("a.txt", "writing in the file a.txt", "utf8", (err)=>{
        if(err)console.log(err);
        else console.log('writing done');
    });
    console.log("After writing in the file");
    console.log("testing");
    for(let i = 0;i<10;i++){
        console.log(i);
    }
}

writingFile();

let sum = 0;
for(let i = 0;i<10000;i++){
    sum+=i;
}