let input = document.querySelectorAll('input')[0];
let Tittle = document.getElementsByClassName('details')[0];
let notify = document.getElementsByClassName('error')[0];

function getvalue_NAME(event) {
    if (event.target.value === '') {
        notify.style.color = 'red';
        notify.style.display = 'inline';
        notify.innerHTML = '👎 Kuch To HOGA';
        let promises = new Promise
(fun);
promises.then((result) => {
    console.log(result);
}).catch((error) => {
    notify.style.display = 
    error;
    
});
    } else if (event.target.value.length < 4) {
        notify.style.color = 'blue';
        notify.style.display = 'inline';
        notify.innerHTML = 'bhut chhota name ';
    } else {
        notify.style.color = 'green';
        notify.style.display = 'inline-block';
        notify.innerHTML = '👍';
        return 0;
    }
}

function fun(resolve, reject) {
    input.addEventListener('click', () => {
        notify.style.display = 
        'none';
        resolve('Click event fired');
    });
    input.addEventListener('keyup',()=>{
        Tittle.style.flex='1'

        notify.innerHTML = 'Kya sharam arhi hai name batane me';
        reject('none')


    })
}
input.addEventListener('change', (e) => {
    getvalue_NAME(e);
});

input.addEventListener('keyup', (e_new) => {
    if (e_new.key === "Enter") {
        getvalue_NAME(e_new);
    }
});
