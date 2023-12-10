const fs = require('fs');

function writingFn(data){
    return new Promise((res, rej)=>{
        fs.writeFile('a.txt', data, 'utf8', (err)=>{
            if(!err) res();
            else rej();
        })
    })
}

function fileRead(){
    return new Promise((resolve, rejects)=>{
        fs.readFile('a.txt', 'utf-8', (err, data)=>{
            if(!err) resolve(data);
            else rejects(err);
        })
    })
}

function cleanContent(data){
    let bag = '';
    data = data.split(' ');
    for(let i = 0;i<data.length;i++){
        if(data[i]) bag+=data[i]+' ';
    }
    return bag;
}

function cleaner(){
    fileRead().then((res)=> cleanContent(res)).then((res)=>writingFn(res)).then((res)=> console.log('Cleaning done')).catch((err)=>{
        console.log(err);
    })
}

cleaner();