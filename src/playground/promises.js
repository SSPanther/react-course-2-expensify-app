const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    
    return 'some data'
}).then((data) => {
    console.log('This is promise chaining', data)
})
.catch((error) => {
    console.log('error', error);
});

console.log('after');