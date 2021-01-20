const doSthAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did sth.'), 3000)
    });
};

const doSth = async () => {
    console.log(await doSthAsync());
};

// console.log('Before');
// doSth();
// console.log('之后');
const watchOverSomeoneDoingSth = async () => {
    const something = await doSthAsync();
    return something + '\nand I wathced';
};

const watchSomeoneWatchingSomeoneDoingSth = async () => {
    const something = await watchOverSomeoneDoingSth();
    return something + '\nand I watched as well';
};

watchSomeoneWatchingSomeoneDoingSth().then(res => {
    console.log(res);
});

