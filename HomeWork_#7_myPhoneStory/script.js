const getId = x => document.getElementById(x);

function Phone() {}
Phone.prototype.name = function () {
    getId('info').innerHTML += '<p><b>Модель:</b> Nokia 8210</p>'
}
Phone.prototype.date = function () {
    getId('info').innerHTML += '<p><b>Дата виходу:</b> 1999 рік</p>'
}
Phone.prototype.screen = function () {
    getId('info').innerHTML += '<p><b>Дисплей:</b> монохромний</p>'
}

function nokia8210() {}
nokia8210.prototype = Phone.prototype;
let n8210 = new nokia8210()

function nokia6100() {
    this.name = function () {
        getId('info').innerHTML += '<p><b>Модель:</b> Nokia 6100</p>'
    }
    this.date = function () {
        getId('info').innerHTML += '<p><b>Дата виходу:</b> 2002 рік</p>'
    }
    this.screen = function () {
        getId('info').innerHTML += '<p><b>Дисплей:</b> 4096тис. кольорів</p>'
    }
    this.data = function () {
        getId('info').innerHTML += '<p><b>Передача даних:</b> WAP, GPRS</p>'
    }

}
nokia6100.prototype = Phone.prototype;
let n6100 = new nokia6100();

function nokia6230i() {
    this.name = function () {
        getId('info').innerHTML += '<p><b>Модель:</b> Nokia 6230i</p>'
    }
    this.date = function () {
        getId('info').innerHTML += '<p><b>Дата виходу:</b> 2005 рік</p>'
    }
    this.screen = function () {
        getId('info').innerHTML += '<p><b>Дисплей:</b> 65тис. кольорів</p>'
    }
    this.data = function () {
        getId('info').innerHTML += '<p><b>Передача даних:</b> WAP 2.0, GPRS, EDGE</p>'
    }
    this.bluetooth = function () {
        getId('info').innerHTML += '<p><b>Bluetooth:</b> Є</p>'
    }
    this.camera = function () {
        getId('info').innerHTML += '<p><b>Камера:</b> 1.3 Mpx</p>'
    }
}
nokia6230i.prototype = Phone.prototype;
let n6230i = new nokia6230i();

function nokia3250() {
    this.name = function () {
        getId('info').innerHTML += '<p><b>Модель:</b> Nokia 3250</p>'
    }
    this.date = function () {
        getId('info').innerHTML += '<p><b>Дата виходу:</b> 2006 рік</p>'
    }
    this.screen = function () {
        getId('info').innerHTML += '<p><b>Дисплей:</b> 262тис. кольорів</p>'
    }
    this.data = function () {
        getId('info').innerHTML += '<p><b>Передача даних:</b> WAP 2.0, GPRS, EDGE</p>'
    }
    this.bluetooth = function () {
        getId('info').innerHTML += '<p><b>Bluetooth:</b> 2.0</p>'
    }
    this.camera = function () {
        getId('info').innerHTML += '<p><b>Камера:</b> 2 Mpx</p>'
    }
}
nokia3250.prototype = Phone.prototype;
let n3250 = new nokia3250();

function nokia5800() {
    this.name = function () {
        getId('info').innerHTML += '<p><b>Модель:</b> Nokia 5800</p>'
    }
    this.date = function () {
        getId('info').innerHTML += '<p><b>Дата виходу:</b> 2008 рік</p>'
    }
    this.screen = function () {
        getId('info').innerHTML += '<p><b>Дисплей:</b> 16млн. кольорів</p>'
    }
    this.data = function () {
        getId('info').innerHTML += '<p><b>Передача даних:</b> WAP 2.0, GPRS, EDGE, WiFi 802.11b, 802.11g</p>'
    }
    this.bluetooth = function () {
        getId('info').innerHTML += '<p><b>Bluetooth:</b> 2.0</p>'
    }
    this.camera = function () {
        getId('info').innerHTML += '<p><b>Камера:</b> 3.2 Mpx</p>'
    }
}
nokia5800.prototype = Phone.prototype;
let n5800 = new nokia5800();

function samsungS1() {
    this.name = function () {
        getId('info').innerHTML += '<p><b>Модель:</b> Samsung Galaxy S GT-I9000</p>'
    }
    this.date = function () {
        getId('info').innerHTML += '<p><b>Дата виходу:</b> 2010 рік</p>'
    }
    this.os = function () {
        getId('info').innerHTML += '<p><b>Операційна система:</b> Android 2.1</p>'
    }
    this.screen = function () {
        getId('info').innerHTML += '<p><b>Дисплей:</b> Super AMOLED 16млн. кольорів</p>'
    }
    this.data = function () {
        getId('info').innerHTML += '<p><b>Передача даних:</b>GPRS сlass 12, EDGE, WiFi 802.11b, 802.11g, 802.11n</p>'
    }
    this.bluetooth = function () {
        getId('info').innerHTML += '<p><b>Bluetooth:</b> 3.0</p>'
    }
    this.camera = function () {
        getId('info').innerHTML += '<p><b>Камера:</b> 5 Mpx</p>'
    }
}
samsungS1.prototype = Phone.prototype;
let s1 = new samsungS1();

function samsungS2() {
    this.name = function () {
        getId('info').innerHTML += '<p><b>Модель:</b> Samsung i9100 Galaxy S II</p>'
    }
    this.date = function () {
        getId('info').innerHTML += '<p><b>Дата виходу:</b> 2011 рік</p>'
    }
    this.os = function () {
        getId('info').innerHTML += '<p><b>Операційна система:</b> Android 2.3</p>'
    }
    this.screen = function () {
        getId('info').innerHTML += '<p><b>Дисплей:</b> Super AMOLED Plus 16млн. кольорів</p>'
    }
    this.data = function () {
        getId('info').innerHTML += '<p><b>Передача даних:</b>GPRS сlass 12, EDGE, WiFi 802.11b, 802.11g, 802.11n</p>'
    }
    this.bluetooth = function () {
        getId('info').innerHTML += '<p><b>Bluetooth:</b> 3.0(+HS)</p>'
    }
    this.camera = function () {
        getId('info').innerHTML += '<p><b>Камера:</b> 8 Mpx</p>'
    }
}
samsungS2.prototype = Phone.prototype;
let s2 = new samsungS2();

function iPhone5S() {
    this.name = function () {
        getId('info').innerHTML += '<p><b>Модель:</b> iPhone 5s 32GB</p>'
    }
    this.date = function () {
        getId('info').innerHTML += '<p><b>Дата виходу:</b> 2013 рік</p>'
    }
    this.os = function () {
        getId('info').innerHTML += '<p><b>Операційна система:</b> iOS 7</p>'
    }
    this.screen = function () {
        getId('info').innerHTML += '<p><b>Дисплей:</b> IPS 16млн. кольорів</p>'
    }
    this.data = function () {
        getId('info').innerHTML += '<p><b>Передача даних:</b> Wi-Fi (802.11 a/b/g/n)</p>'
    }
    this.bluetooth = function () {
        getId('info').innerHTML += '<p><b>Bluetooth:</b> 4.0 (A2DP)</p>'
    }
    this.camera = function () {
        getId('info').innerHTML += '<p><b>Камера:</b> 8 Mpx</p>'
    }
}
iPhone5S.prototype = Phone.prototype;
let i5s = new iPhone5S();


getId('browse').addEventListener('click', () => {
    getId('info').innerHTML = '';
    let year = +getId('getYear').value;
    if (year == 2003) {
        n8210.name();
        n8210.date();
        n8210.screen();
    }
    if (year == 2004) {
        n6100.name();
        n6100.date();
        n6100.screen();
        n6100.data();
    }
    if (year == 2005) {
        n6230i.name();
        n6230i.date();
        n6230i.screen();
        n6230i.data();
        n6230i.bluetooth();
        n6230i.camera();
    }
    if (year == 2006 || year == 2007) {
        n3250.name();
        n3250.date();
        n3250.screen();
        n3250.data();
        n3250.bluetooth();
        n3250.camera();
    }
    if (year == 2008 || year == 2009) {
        n5800.name();
        n5800.date();
        n5800.screen();
        n5800.data();
        n5800.bluetooth();
        n5800.camera();
    }
    if (year == 2010) {
        s1.name();
        s1.date();
        s1.os();
        s1.screen();
        s1.data();
        s1.bluetooth();
        s1.camera();
    }
    if (year >= 2011 && year <= 2013) {
        s2.name();
        s2.date();
        s2.os();
        s2.screen();
        s2.data();
        s2.bluetooth();
        s2.camera();
    }
    if (year >= 2014 && year <= 2019) {
        i5s.name();
        i5s.date();
        i5s.os();
        i5s.screen();
        i5s.data();
        i5s.bluetooth();
        i5s.camera();
    } 
    if (year<2003 || year>2020) {
        alert('Введіть, будь ласка, рік у діапазоні 2003-2019')
    }
})
