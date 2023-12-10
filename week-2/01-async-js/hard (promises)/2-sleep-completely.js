/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

console.log("Before");

function sleep (seconds) {
    let curr = Date.now();
    let sum = 0;
    console.log("sleep");
    while(Date.now()-curr<seconds){
        sum++;
    }
}

sleep(10000);

console.log('After');