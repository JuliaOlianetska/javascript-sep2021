/*
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі
*/


function wakeup (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 7.00) {
                console.log("You are still sleeping");
                reject("You will take a shower after you woke up");
            } else {
                console.log("You woke up already");
                resolve("You should go to shower");
            }
        }, 1000)
    })
};

function takeShower (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 7.25) {
                resolve('Taking shower in progress');
            } else {
                reject('Go to shower NOW');
            }

        }, 500);
    });

}

function haveBreakfast () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bon Apetit!");
        }, 300);
    });
}

function brushTeeth () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Now you are brushing your teeth')
        }, 2000);
    });
}

function makeUp () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Make-up time!')
            resolve('Doing make-up....')
        }, 500);
    });
}

function dressUp () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('Nice dress');
        }, 400)   ;
    })
}

function workingTime (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 9.00) {
                reject ('You are late. Be ready for a fine');
            } else {
                console.log('You are it time');
                resolve('Time to work hard');
            }
        }, 100);
    })
}

function lunchTime (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 13.00 || time > 14.00) {
                reject ('Not eating. Working now!')
            } else {
                resolve ('You have an hour for lunch')

            }
        }, 45);
    })
}

function wayToHome (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time>= 18.00) {
                console.log('Working day is finished');
                resolve('Go home');
            } else {
                console.log('Working day is NOT finished yet');
                reject('You have to work till 18.00')
            }
        },1000);
    })
}

function homeTime () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ('Have a good time with your familly');
        }, 2000) ;
    })
}

async function myDay () {
    try {

        const action1 = await wakeup(7.10);
        console.log(action1, ' after wake up action');
        await takeShower(7.20);
        console.log('take a shower  - action');
        const action3 = await haveBreakfast();
        console.log('breakfast time');
        console.log(action3);
        const action4 = await brushTeeth();
        console.log(action4, ' - teeth brushing action');
        const action5 = await makeUp();
        console.log(action5);
        const action6 = await dressUp();
        console.log('Choosing some clothes', action6);
        const action7 = await workingTime();
        console.log('Do not be late to office', action7);
        const action8 = await lunchTime();
        console.log('13-14 hours', action8);
        const action9 = await wayToHome(17.44);
        console.log('after hard day', action9);
        const action10 = await homeTime();
        console.log('leasure time', action10);
    }
    catch (reason) {
        console.warn('ERORRRRR')
        console.warn(reason)
    };
};

myDay();