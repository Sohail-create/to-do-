let btn = document.getElementById('add');
let count = 0;
btn.addEventListener('click', () => {
    let inp = document.getElementById('inp');

    if (inp.value !== '') {
        let list = document.createElement('li');
        let ol = document.querySelector("#ol");
        let li_content = document.createTextNode(inp.value);
        list.append(li_content);
        ol.append(list);
        document.getElementById('inp').value = '';
        count++;
        document.getElementById('count').textContent = count;

        let demo = document.getElementById('demo').textContent = '';

        list.addEventListener('dblclick', () => {
            list.remove();
            count--;
            document.getElementById('count').textContent = count;
        });
    }
});

let mode = document.getElementById('mode');
let body = document.querySelector('body');
let head1 = document.getElementById('head1');
let box = document.getElementById('box');
let inp = document.getElementById('inp');
let count_btn = document.getElementById('count');

let color = 'Dark';
mode.addEventListener('click', () => {
    if (color === 'Dark') {
        mode.classList.add('class', 'mode_light');
        box.classList.add('class', 'box_light');
        btn.classList.add('class', 'add_light');
        inp.classList.add('class', 'inp_light');
        count_btn.classList.add('class', 'count_light');
        body.style.background = '#eee5e5';
        mode.innerText = 'Dark';
        head1.classList.add('class', 'heading');
        color = 'Light';
    } else if(color === 'Light') {
        mode.classList.remove('class', 'mode_light');
        box.classList.remove('class', 'box_light');
        btn.classList.remove('class', 'add_light');
        inp.classList.remove('class', 'inp_light');
        count_btn.classList.remove('class', 'count_light');
        body.style.background = '#091d1d';
        mode.innerText = 'Light';
        head1.classList.remove('class', 'heading');
        color = 'Dark';
    }
});

let head_change = document.getElementById('myt');
head_change.addEventListener('dblclick', () => {
    let user = prompt('Enter Your List Title');
    if(user !== '') {
        head_change.textContent = user;
    }
});

let time = new Date();
let curr_date = time.toDateString();
let showdate = document.getElementById('p');
showdate.textContent = curr_date;
