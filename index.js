// async & await
// javascript callback 지옥

function resolvePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!!');
        }, 2000)
    })
}


//앞의 함수 실행이 모두 끝나야만 뒤를 실행하는 기다림을 아는 멋진 함수
async function getPromise1() {
    const result = await resolvePromise();
    console.log(result);
    await resolvePromise();
    console.log(result);
    await resolvePromise();
    console.log(result);
    await resolvePromise();
    console.log(result);
    await resolvePromise();
    console.log(result);
    await resolvePromise();
    console.log(result);
}

getPromise1();
