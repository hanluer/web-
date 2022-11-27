function now_time(){
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var day = time.getDay();
    var Day = new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
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

var product = {
    p1:{
        p_name:'雀巢橙C(袋装 500g)',
        p_price:10,
        p_number:1
    },
    p2:{
        p_name:'澳大利亚儿童饼干(袋装 250g)',
        p_price:10,
        p_number:1
    },
    p3:{
        p_name:'一品玉新疆巴旦木(袋装 400g)',
        p_price:10,
        p_number:1
    },
    p4:{
        p_name:'美滋滋酸橙味夹心果汁软糖(罐装 200g)',
        p_price: 10,
        p_number:1
    },
    p5:{
        p_name:'博斯特珍藏干红葡萄酒2007(Chevalier Jouto…',
        p_price: 10,
        p_number:1
    },
    p6:{
        p_name:'露菲尔奇峰美乐干红葡萄酒2007(Mont Jerome…',
        p_price: 10,
        p_number:1
    },
    p7:{
        p_name:'优之良品五粮素食元气100%棒（蛋黄 袋装 180g）',
        p_price: 10,
        p_number:1
    },
    p8:{
        p_name:'利乐多卡尔麦里新疆珍珠枣（佳品装400g）',
        p_price: 10,
        p_number:1
    },
    p9:{
        p_name:'越南Tipo鸡蛋奶油面包干（超大装 300g）',
        p_price: 10,
        p_number:1
    },
    p10:{
        p_name:'威特马凯解百纳特选干红（Custer Weitmamkal,VDT）（瓶装750ml）',
        p_price: 10,
        p_number:1
    },
    p11:{
        p_name:'悦活缤纷随行果蔬燕麦片（纯净白 单杯装 40g）',
        p_price: 10,
        p_number:1
    },
    p12:{
        p_name:'奇诺五谷糙米饼（袋装 150g）',
        p_price: 10,
        p_number:1
    },
    p13:{
        p_name:'可康芒果味果冻（碗装 420g）',
        p_price: 10,
        p_number:1
    },
    p14:{
        p_name:'哇哈哈奶味茶（茉莉味 500ml）',
        p_price: 10,
        p_number:1
    },
    p15:{
        p_name:'盛香珍蒜香青豆(袋装 240g)',
        p_price: 10,
        p_number:1
    },
    p16:{
        p_name:'7D芒果干(进口食品 袋装 100g)',
        p_price: 10,
        p_number:1
    },
    p17:{
        p_name:'越南Tipo鸡蛋奶油面包干(超大装 300g)',
        p_price: 10,
        p_number:1
    },
    p18:{
        p_name:'雀巢(42+6)条特惠装咖啡(盒装 13g*48)',
        p_price: 10,
        p_number:1
    },
    p19:{
        p_name:'黄飞红麻辣花生(袋装 210g)',
        p_price: 10,
        p_number:1
    },
    p20:{
        p_name:'韩国海牌海苔(袋装 20g)',
        p_price: 10,
        p_number:1
    },
    p21:{
        p_name:'国宾朵朵舞日式什锦珍菌滋养汤(杯装 10g)',
        p_price: 10,
        p_number:1
    },
    p22:{
        p_name:'六必居甜酱八宝菜(瓶装 290g)',
        p_price: 10,
        p_number:1
    },
    p23:{
        p_name:'华鹏珍豆真逗(盒装 225g)',
        p_price: 10,
        p_number:1
    },
    p24:{
        p_name:'万味轩脆口肉干辣味(袋装 35g)',
        p_price: 10,
        p_number:1
    },
    p25:{
        p_name:'鸿津元气100自然烘焙五谷棒(牛乳袋装 185g)',
        p_price: 10,
        p_number:1
    },
    p26:{
        p_name:'好沃德脱脂牛奶(盒装 1L)',
        p_price:10,
        p_number:1
    },
    p27:{
        p_name:'华鹏红豆沙(袋装 500g)',
        p_price: 10,
        p_number:1
    },
    p28:{
        p_name:'进口红酒',
        p_price: 10,
        p_number:1
    },
    p29:{
        p_name:'明治熊猫奶油夹心饼干(进口食品 盒装 260g)',
        p_price: 10,
        p_number:1
    },
    p30:{
        p_name:'澳大利亚小马宝莉饼干(袋装 250g)',
        p_price: 10,
        p_number:1
    },
    p31:{
        p_name:'可比克烧烤薯片(罐装 110g)',
        p_price:10,
        p_number:1
    },
    p32:{
        p_name:'优之良品五粮素食元',
        p_price:10,
        p_number:1
    },
    p33:{
        p_name:'米老头蛋黄煎饼(牛奶',
        p_price:10,
        p_number:1
    },
    p34:{
        p_name:'盛香珍蒜香青豆(袋装 240g)',
        p_price:10,
        p_number:1
    },
    p35:{
        p_name:'可康大杯芒果味果冻(进口食品 碗装 420g)',
        p_price:10,
        p_number:1
    },
    p36:{
        p_name:'汉波无核贡枣(装装 280g)',
        p_price:10,
        p_number:1
    },
    p37:{
        p_name:'黄飞红麻辣花生(袋装 210g)',
        p_price:10,
        p_number:1
    },
    p38:{
        p_name:'马来西亚Aji惊奇脆饼(优格洋葱味 袋装',
        p_price:10,
        p_number:1
    },
    p39:{
        p_name:'马来西亚品味本铺五谷黑麻银杏饼(进口',
        p_price:10,
        p_number:1
    },
    p40:{
        p_name:'越南Tipo鸡蛋奶油面包干(超大装 300g)',
        p_price:10,
        p_number:1
    },
    p41:{
        p_name:'特鲜加钙炼奶起士(袋装 600g)',
        p_price:10,
        p_number:1
    },
    p42:{
        p_name:'福临门一级小磨香油(罐装 250ml)',
        p_price:10,
        p_number:1
    },
    p43:{
        p_name:'中粮五湖优质大米(袋装 5kg)【每',
        p_price:10,
        p_number:1
    },
    p44:{
        p_name:'香雪鸡蛋面(袋装 800g)',
        p_price:10,
        p_number:1
    },
    p45:{
        p_name:'香雪尚品雪花粉(袋装 2.5kg)',
        p_price:10,
        p_number:1
    },
    p46:{
        p_name:'香雪爽滑面(袋装 800g)',
        p_price:10,
        p_number:1
    },
    p47:{
        p_name:'福临门一级小磨香油(瓶装 250ml)',
        p_price:10,
        p_number:1
    },
    p48:{
        p_name:'沁州黄充氮装小米(袋装 1.6kg)',
        p_price:10,
        p_number:1
    },
    p49:{
        p_name:'福临门天然谷物调和油(瓶装 900ml)',
        p_price:10,
        p_number:1
    },
    p50:{
        p_name:'卡斯特意大利面条(进',
        p_price:10,
        p_number:1
    },
    p51:{
        p_name:'卡斯特意大利面条(进',
        p_price:10,
        p_number:1
    },
    p52:{
        p_name:'香谷坊一级大豆油(中粮出品 桶装 5L)',
        p_price:10,
        p_number:1
    },
    p53:{
        p_name:'古船富强粉(袋装 5kg)',
        p_price:10,
        p_number:1
    },
    p54:{
        p_name:'资采青仁乌黑豆(袋装 500g)',
        p_price:10,
        p_number:1
    },
    p55:{
        p_name:'韩国柚子茶(瓶装 1000g)',
        p_price:10,
        p_number:1
    },
    p56:{
        p_name:'雀巢(42+6)条特惠装咖啡(盒装 13g*48)',
        p_price:10,
        p_number:1
    },
    p57:{
        p_name:'吉意欧滤泡式咖啡(8袋装 8*8g)',
        p_price:10,
        p_number:1
    },
    p58:{
        p_name:'甘汁园特浓姜汤(盒装 240g)',
        p_price:10,
        p_number:1
    },
    p59:{
        p_name:'立顿香浓原味奶茶50s(袋装 15g*50)',
        p_price:10,
        p_number:1
    },
    p60:{
        p_name:'维维果蔬豆浆粉(袋装 500g)',
        p_price:10,
        p_number:1
    },
    p61:{
        p_name:'百花洋槐蜂蜜(瓶装 700g)',
        p_price:10,
        p_number:1
    },
    p62:{
        p_name:'雅士利早餐豆奶粉(袋装 500g)',
        p_price:10,
        p_number:1
    },
    p63:{
        p_name:'雀巢C(袋装 500g)',
        p_price:10,
        p_number:1
    },
    p64:{
        p_name:'台湾3点1刻 经典玫瑰花果奶茶',
        p_price:10,
        p_number:1
    },
    p65:{
        p_name:'哈尔滨小麦王(听装 330ml)',
        p_price:10,
        p_number:1
    },
    p66:{
        p_name:'康比特运动美人左旋360',
        p_price:10,
        p_number:1
    }
}
var price_sum = 0;
var product_sum = 0;
function result(name){
    var product_number = document.getElementById("product_number");
    var price = document.getElementById("price");
    product_sum += product[name].p_number;  // 计算商品总数
    product_number.innerHTML = "购物车有"+product_sum+"件商品"; 
    price_sum += product[name].p_price*product[name].p_number;  // 计算总价
    price.innerHTML = "商品总价为："+price_sum+"元";

    var product_text = document.getElementById("product_text");  // 获取购物车信息节点
    var list = product[name].p_name;
    var opt = document.createElement("option");    
    var temp = document.createTextNode(list);
    opt.appendChild(temp);
    product_text.appendChild(opt);
}
function del(){
    var product_text = document.getElementById("product_text");
    var now_opt = product_text.selectedIndex;
    if(now_opt != -1){
        var product_number = document.getElementById("product_number");
        var price = document.getElementById("price");
        
        for(var i=1;i<=66;i++){
            var temp = "p"+i;
            if(product[temp].p_name == product_text[now_opt].textContent){
                price_sum -= product[temp].p_price;  // 计算总价
                break;
            }
            if(i == 66 ){
                alert("删除商品失败！");
            }
        }

        product_sum--;  // 计算商品总数
        product_number.innerHTML = "购物车有"+product_sum+"件商品"; 
        price.innerHTML = "商品总价为："+price_sum+"元";
        product_text.options.remove(now_opt);
    }
}
function del_all(){
    var product_text = document.getElementById("product_text");
    var product_number = document.getElementById("product_number");
    var price = document.getElementById("price");
    var opt_length = product_text.options.length;
    for(var i=0;i<opt_length;i++){
        product_text.options.remove(0);
    }
    product_sum = 0;
    product_number.innerHTML = "购物车有"+product_sum+"件商品"; 
    price_sum = 0;
    price.innerHTML = "商品总价为："+price_sum+"元";
}


function change_img(){
    var div1 = document.getElementById("middle_2_top_1");
    var div2 = document.getElementById("middle_2_top_2");
    var div3 = document.getElementById("middle_2_top_3");
    var div4 = document.getElementById("middle_2_top_4");
    var child = div1.childNodes;
    for(var i=0;i<child.length;i++){
        document.write(child[i].nodeValue);
    }
    
}


function $(id){
    return document.getElementById(id);
}
function change1(){
    $("middle_2_top_1").style.backgroundImage = "url('../中粮网/img/index_bg5_2.png')";
    $("middle_2_top_2").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
    $("middle_2_top_3").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
    $("middle_2_top_4").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
}
function change2(){
    $("middle_2_top_1").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
    $("middle_2_top_2").style.backgroundImage = "url('../中粮网/img/index_bg5_2.png')";
    $("middle_2_top_3").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
    $("middle_2_top_4").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
}
function change3(){
    $("middle_2_top_1").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
    $("middle_2_top_2").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
    $("middle_2_top_3").style.backgroundImage = "url('../中粮网/img/index_bg5_2.png')";
    $("middle_2_top_4").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
}
function change4(){
    $("middle_2_top_1").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
    $("middle_2_top_2").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
    $("middle_2_top_3").style.backgroundImage = "url('../中粮网/img/index_bg5_1.png')";
    $("middle_2_top_4").style.backgroundImage = "url('../中粮网/img/index_bg5_2.png')";
}
function openlogin1(){
    document.getElementById("login1").style.display="block";
    document.getElementById("loginbg").style.display="block";
}
function closelogin1(){
    document.getElementById("login1").style.display="none";
    document.getElementById("loginbg").style.display="none";
}
function test1(){
    var str1 = $("login1_input1").value;
    var str2 = $("login1_input2").value;
    if(str1.length != 11){
        alert("账号长度必须为11！")
    }else if(isNaN(str1)){
        alert("账号只能出现数字！")
    }else if(str2.length > 12){
        alert("密码不能超过12位，请重新输入！")
    }else{
        closelogin1();
        alert("登陆成功！");
    }
}
function openlogin2(){
    document.getElementById("login2").style.display="block";
    document.getElementById("loginbg").style.display="block";
}
function closelogin2(){
    document.getElementById("login2").style.display="none";
    document.getElementById("loginbg").style.display="none";
}
var a = 1;
function openbox(){
    a = -a;
    if(a == -1){
        document.getElementById("showbox").style.visibility="visible";
    }else{
        document.getElementById("showbox").style.visibility="hidden";
    }
}
function test2(){
    var str4 = $("login2_input1").value;
    var str5 = $("login2_input2").value;
    var str6 = $("login2_input3").value;
    if(str4.length != 11){
        alert("账号长度必须为11！")
    }else if(isNaN(str4)){
        alert("账号只能出现数字！")
    }else if(str5.length > 12){
        alert("密码不能超过12位，请重新输入！")
    }else if(str5 != str6){
        alert("密码不一致！")
    }else{
        closelogin2();
        alert("注册成功，返回首页登陆！");
    }
}
