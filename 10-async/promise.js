function call(name) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function back() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('back');
            resolve('back');
        }, 1000)
    })
}

function hell() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('callback hell');
        }, 1000);
    })
}

// call('kim')
//     .then (function(name) {
//         console.log(name  + '반가워');

//         return back();
//     })
//     .then (function(txt) {
//         console.log(txt + '을 실행시켰구나');
//         return hell();
//     })
//     .then (function(msg){
//         console.log('여기는 ' + msg);
//     })


async function exec() {
    try {
        let name = await call('kim');
        console.log(name + '반가워');
        let txt = await back();
        console.log(txt + '을 실행시켰구나');
        let msg = await hell();
        console.log('여기는 ' + msg);
    } catch (err) {
        console.log(err);
    }
}

// exec();


function setColor(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // document.body.style.backgroundColor = color;
            console.log(color);
            resolve();
        }, 1000)
    })
}

async function selectColor() {
    try {
        await setColor('red');
        await setColor('orange');
        await setColor('yellow');
        await setColor('green');
        await setColor('blue');
    } catch (err) {
        console.log('err');
    }
}


selectColor();