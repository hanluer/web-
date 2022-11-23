function now_time(){
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var day = time.getDay()-1;
    var Day = new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日');
    if(hours<10){
        hours = '0' + hours;
    }
    if(minutes<10){
        minutes = '0' + minutes;
    }
    if(seconds<10){
        seconds = '0' + seconds;
    }

    var now_time = year + '年' + month + '月' + date + '日' + '  ' + hours + ':' + minutes + ':' +seconds + '  ' +Day[day];
    document.getElementById("now_time").innerHTML = now_time;   
}
setInterval(now_time,1000);
