var inputTime09 = document.getElementById('task-input-9')
var inputTime10 = document.getElementById('task-input-10')
var inputTime11 = document.getElementById('task-input-11')
var inputTime12 = document.getElementById('task-input-12')
var inputTime01 = document.getElementById('task-input-01')
var inputTime01 = document.getElementById('task-input-02')
var inputTime03 = document.getElementById('task-input-03')
var inputTime04 = document.getElementById('task-input-04')
var inputTime05 = document.getElementById('task-input-05')
var inputTime06 = document.getElementById('task-input-06')
var inputTime07 = document.getElementById('task-input-07')
var inputTime08 = document.getElementById('task-input-08')
var inputTime9 = document.getElementById('task-input-09')
var inputTime010 = document.getElementById('task-input-010')
var inputTime011 = document.getElementById('task-input-011')
var inputTime012 = document.getElementById('task-input-012')



var auditTime = function () {

    inputTime06.setAttribute("style", "background-color: green;");

}


$(this).click(function (event) {
    event.preventDefault();

    // 09:00
    var time09 = document.getElementById('time-input-9').value;
    localStorage.setItem('time09', JSON.stringify(time09));
    // 10:00
    var time10 = document.getElementById('time-input-10').value;
    localStorage.setItem('time10', JSON.stringify(time10));
    // 11:00
    var time11 = document.getElementById('time-input-11').value;
    localStorage.setItem('time11', JSON.stringify(time11));
    // 12:00
    var time12 = document.getElementById('time-input-12').value;
    localStorage.setItem('time12', JSON.stringify(time12));
    // 1:00
    var time01 = document.getElementById('time-input-10').value;
    localStorage.setItem('time01', JSON.stringify(time01));
    // 2:00
    var time02 = document.getElementById('time-input-11').value;
    localStorage.setItem('time02', JSON.stringify(time02));
    // 3:00
    var time03 = document.getElementById('time-input-12').value;
    localStorage.setItem('time03', JSON.stringify(time03));
    // 4:00
    var time03 = document.getElementById('time-input-13').value;
    localStorage.setItem('time03', JSON.stringify(time03));
    // 5:00
    var time05 = document.getElementById('time-input-14').value;
    localStorage.setItem('time05', JSON.stringify(time05));
    // 6:00
    var time06 = document.getElementById('time-input-15').value;
    localStorage.setItem('time06', JSON.stringify(time06));
    // 7:00
    var time07 = document.getElementById('time-input-16').value;
    localStorage.setItem('time07', JSON.stringify(time07));
    // 8:00
    var time08 = document.getElementById('time-input-17').value;
    localStorage.setItem('time08', JSON.stringify(time08));
    // 9:00
    var time09 = document.getElementById('time-input-18').value;
    localStorage.setItem('time09', JSON.stringify(time09));
    // 10:00
    var time10 = document.getElementById('time-input-19').value;
    localStorage.setItem('time10', JSON.stringify(time10));
    // 11:00
    var time011 = document.getElementById('time-input-20').value;
    localStorage.setItem('time011', JSON.stringify(time011));
    // 12:00
    var time012 = document.getElementById('time-input-21').value;
    localStorage.setItem('time012', JSON.stringify(time012));
});

var loadTimes = function () {

    // 9:00
    time9 = JSON.parse(localStorage.getItem('time9'))
    inputTime9.textContent = time9;
    // 10:00
    time10 = JSON.parse(localStorage.getItem('time10'))
    inputTime10.textContent = time10;
    // 11:00
    time11 = JSON.parse(localStorage.getItem('time11'))
    inputTime11.textContent = time11;
    // 12:00
    time12 = JSON.parse(localStorage.getItem('time12'))
    inputTime12.textContent = time12;
    // 1:00
    time01 = JSON.parse(localStorage.getItem('time01'))
    inputTime01.textContent = time01;
    // 2:00
    time02 = JSON.parse(localStorage.getItem('time02'))
    inputTime02.textContent = time02;
    // 3:00
    time03 = JSON.parse(localStorage.getItem('time03'))
    inputTime03.textContent = time03;
    // 4:00
    time04 = JSON.parse(localStorage.getItem('time04'))
    inputTime04.textContent = time04;
    // 5:00
    time05 = JSON.parse(localStorage.getItem('time05'))
    inputTime05.textContent = time05;
    // 6:00
    time06 = JSON.parse(localStorage.getItem('time06'))
    inputTime06.textContent = time06;
    // 7:00
    time07 = JSON.parse(localStorage.getItem('time07'))
    inputTime07.textContent = time07;
    //8:00
    time08 = JSON.parse(localStorage.getItem('time08'))
    inputTime08.textContent = time08;
    // 9:00
    time09 = JSON.parse(localStorage.getItem('time09'))
    inputTime09.textContent = time09;
    // 10:00
    time010 = JSON.parse(localStorage.getItem('time010'))
    inputTime010.textContent = time010;
    // 11:00
    time011 = JSON.parse(localStorage.getItem('time011'))
    inputTime011.textContent = time011;
    // 12:00
    time012 = JSON.parse(localStorage.getItem('time012'))
    inputTime012.textContent = time012;
}

loadTimes();

auditTime();

var inputTime06 = '06:00';
var convertedTime = moment(inputTime06);





