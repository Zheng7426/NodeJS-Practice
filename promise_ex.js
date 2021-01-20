
let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here we go.';
        resolve(workDone);
    } else {
        const why = 'Still working on something else.';
        reject(resolve);
    }
});

const checkIfItsDone = () => {
    isItDoneYet.then(ok => {
        console.log(ok);
    }).catch(err => {
        console.log(err);
    });
};

checkIfItsDone();
