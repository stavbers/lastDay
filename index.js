// const axios = require('axios').default;

// Make a request for a user with a given ID
// axios.get('https://fetch.reddev.com.ua/city.list.json')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
// axios.get('https://fetch.reddev.com.ua/city.list.json')
// .then(function (response) {
//   console.log(response.data);
//   console.log(response.status);
//   console.log(response.statusText);
//   console.log(response.headers);
//   console.log(response.config);
// });

const title = {
  'h1': 'Last Day',
  'h2Form': 'Первый и посл день'
};

// document.querySelector('.screen__title').textContent = title.h2Form





function declensionNum(num, words) {
  return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
}
// console.log(declensionNum(25, ['день', 'дня', 'дней']))




// fetch('https://fetch.reddev.com.ua/city.list.json')
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// });












function num_word(value, words) {
  // value = Math.abs(value) % 100; 
  value = value % 100;
  let num = value % 10;
  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
}
// console.log(num_word(34, ['день', 'дня', 'дней']));

let deadlineDate = new Date(2022, 02, 14)


// function countdownTimer() {
//   const diff = deadline - new Date();
//   if (diff <= 0) {
//     clearInterval(timerId);
//   }
//   const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
//   const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
//   const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
//   const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
//   $days.textContent = days < 10 ? '0' + days : days;
//   $hours.textContent = hours < 10 ? '0' + hours : hours;
//   $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
//   $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
//   $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
//   $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
//   $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
//   $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
// }
const timerId1 = null;
const constDay = 86400000;
function countTimer() {
  let milsTime = new Date() - deadlineDate;
  console.log(milsTime)
  if (milsTime <= 0) clearInterval(timerId1);
  let year = milsTime > 0 ? Math.round(milsTime / 1000 / 60 / 60 / 24 / 365) : 0;
  let month = milsTime > 0 ? Math.round(milsTime / 1000 / 60 / 60 / 24 / 30) : 0;

  let week = milsTime > 0 ? (milsTime / 1000 / 60 / 60 / 24 / 7) : 0;
  let weekend = milsTime > 0 ? (milsTime / 1000 / 60 / 60 / 24  / 7 * 2 ) : 0;
  let workDay = milsTime > 0 ? (milsTime  / 1000 / 60 / 60 / 24 / 7 * 5 ) : 0;
  
  let days = milsTime > 0 ? Math.round(milsTime / 1000 / 60 / 60 / 24) : 0;
  let hours = milsTime > 0 ? Math.floor(milsTime / 1000 / 60 / 60) % 24 : 0;
  let minutes = milsTime > 0 ? Math.floor(milsTime / 1000 / 60) % 60 : 0;
  let seconds = milsTime > 0 ? Math.floor(milsTime / 1000) % 60 : 0;




  console.log(days)
  console.log(week.toFixed(1))
  console.log(workDay.toFixed())
  console.log(weekend.toFixed())
}
// countTimer()
/**
 * countTimer();
   timerId1 = setInterval(countTimer, 1000);
 * 
 */
  //  2022, 02, 14
  
   let currentDay = new Date();
 // !!! год-месяц-день !!!
 let oldDay;


   let inp = document.querySelector('#last-date');
   let inp2 = document.querySelector('#now-date');
   inp.addEventListener('input', (e)=> {
      console.log(inp.value) 
      oldDay = new Date(inp.value);
      currentDay = new Date(inp2.value);
      var days1 = Math.ceil(Math.abs(oldDay.getTime() - currentDay.getTime()) / (1000 * 3600 * 24));
   console.log(days1)
   })
   
    // oldDay = new Date('2022-03-14');

    function getWeekDay(date) {
      let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    
      // return days[date.getDay()]
      console.log(days[date.getDay()])
    }
    
    // let dates = new Date(2014, 0, 3); // 3 января 2014 года
    // console.log( getWeekDay(dates) ); // ПТ
let out = document.querySelector('.out');
let dates;
    function checkDay(){
       dates = new Date(inp2.value); 
      console.log(inp2.value)
      // console.log( getWeekDay(dates) ); // ПТ
      getWeekDay(dates)

    }
let sty = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(Math.random() * sty.length)
    document.querySelector('.date__btn').addEventListener('click', checkDay);


// toggle browser panel
let tabs = document.querySelectorAll('.tab');
let panel = document.querySelectorAll('.panel');

tabs.forEach((item, index)=> {
  item.addEventListener('click', (e)=> {
    hideTab();
    showTab(e, index);
  })
})

function hideTab(){
  tabs.forEach((item)=> {
    item.classList.remove('tab_active');
  })
  panel.forEach((item)=> {
    item.classList.remove('panel_active');
  })
}
function showTab(e, index){
  e.target.parentNode.classList.add('tab_active');
  panel[index].classList.add('panel_active')
}

// create todo and engl && favlink



let inps = document.querySelectorAll('.inp');
let menuLists = document.querySelectorAll('.menu-list');
let blocks = document.querySelectorAll('.block');
let ths;
let pernt;
tabs.forEach((item, index)=> {
    item.addEventListener('click', function(){
        switchBtn(item, index);
     });
});

function switchBtn(item, index){
    //item нажатая кнопка open/close

    inps.forEach((inp)=> {
        inp.classList.remove('display');
    });
    menuLists.forEach((ul)=> {
        ul.classList.remove('display');
    });
    blocks[index-1].children[1].classList.add('display');
    blocks[index-1].children[2].classList.add('display');
    ths = index-1;
    getBd();
    closeTabs();
}
function closeTabs(){
    document.addEventListener('keydown', function(e) {
        if( e.keyCode == 27 ){ // код клавиши Escape, но можно использовать e.key
            ths.parentNode.children[2].classList.remove('display');
            ths.parentNode.children[3].classList.remove('display');
        }
    });
    // document.addEventListener( 'click', (e) => {
    //     let withinBoundaries;
    //     blocks.forEach((item)=>{
    //         withinBoundaries = e.composedPath().includes(item);
    //     });
    //     console.log(withinBoundaries)
    //     if (! withinBoundaries ) {
    //         ths.parentNode.children[2].classList.remove('display');
    //         ths.parentNode.children[3].classList.remove('display');
    //     }
    // })
}

// function switchBtn(item){
//     item.parentNode.children[2].classList.toggle('display');
//     item.parentNode.children[3].classList.toggle('display');
//     ths = item;
//     getBd()
// }

inps.forEach((item)=> {
    // console.log(item.value)
    item.addEventListener('keypress',getWord);
});
// inp.addEventListener('keypress', getWord);
function getWord(event){
    let t = event.which;
    if(t == 13){
      // blocks[ths]
      console.log(this)
      // console.log(ths)
      //   ths = this;
        createElemts(this.value, this);
        // console.log(this)
        this.value = '';
    }
}

function createElemts(word, parent){
    let wd = document.createElement('li');
    wd.classList.add('list-item');
    wd.innerHTML = `<span></span>${word}`;
    parent.parentNode.children[2].append(wd)
    adBd();
    removeTodo()
    checkToDo()
}

function removeTodo(){
    let trash = document.querySelectorAll('.list-item > span');
    trash.forEach((item)=> {
        item.addEventListener('click', function(){
            item.parentNode.remove()
            adBd();
        })
    })
}

function checkToDo(){ // не стабильна не сохраняет данные в локал
    let li = document.querySelectorAll('.list-item');  
    li.forEach((item)=> {
        item.addEventListener('click', function(){
            item.classList.toggle('checked');
            adBd();
        })
    })
}

function adBd(){
    pernt = blocks[ths].getAttribute('data-parent');
    // console.log(ths.parentNode)
    menuLists.forEach((item)=> {
        // console.log(item)
        if(item.classList.contains('display')){
            localStorage.setItem(pernt, item.innerHTML);   
        }
    })

}
function getBd(){

    let parentElement = blocks[ths].getAttribute('data-parent');    
if(localStorage.getItem(parentElement)){
    if(localStorage.getItem(parentElement).length == 0){
        localStorage.removeItem(parentElement)
    }
}
blocks[ths].children[2].innerHTML = localStorage.getItem(parentElement); 
    removeTodo()
    checkToDo()

// removeTodo()
// checkToDo()
}

