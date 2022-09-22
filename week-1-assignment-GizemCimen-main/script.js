
/* Cookie 
Cookie (Çerez) kullanıcıların tarayıcıların çeşitli bilgilerin tutulduğu bölümdür. Oluşturulurken belli bir süre verilir
Belirlenen süre boyunca kullanıcının tarayıcısında saklanır.

setCookie fonksiyonu cookie oluşturmamızı sağlıyor. 
getCookie fonksiyonu parametre olarak sadece cookie adını alır ve o cookieye ait değeri bize getirir.

*/

document.cookie = "name=Gizem"; //cookie oluşturulur

document.cookie = "name=Gizem; expires=Mon, 11 Nov 2022 12:00:00 UTC";//cookie'nin son kullanma tarihi eklenebilir.Bu tarihte cookie silinir

let x = document.cookie;//document.cookietüm çerezleri tek bir dizgede döndürür: cookie1=value; cookie2=değer; cookie3=değer;

document.cookie = "name=Gizem; expires=Mon, 11 Nov 2022 12:00:00 UTC; path=/";//daha önce tanımladığımız cookieyi değştirip yeni değer ekleyebiliriz. path cookie'nin hangi yola ait olduğunu gösterir 

document.cookie = "name=Gizem; expires=Thu, 01 Jan 1973 12:00:00 UTC; path=/;";//cookie silme işlemi geçmiş bir tarihe ayarlanıp, yolu doğru verilir ve cookie silinir


//Cookie Oluşturmak
function cookieOlustur() {
	var cookieName=document.getElementById("cookieName").value;
	var cookieDay=parseInt(document.getElementById("cookieDay").value,10); //cookieGun içeriğini int bir değere parse ettik. Virgülden sonraki 10, sayı tabanını temsil ediyor.
	var cookieDate=new Date();
	cookieDate.setDate(cookieDate.getDate()+cookieDay);
	document.cookie= cookieName +"="+escape(cookieIcerik) + ";expires=" + cookieDate.toString();
}

//Var olan Cookie’leri okumak için ise document.cookie komutu kullanır.
function cookieOku() {
	document.write(document.cookie);
}


/*
Session Storage
Bir web tarayıcısında key değerlerini yalnızca bir oturum süresi için tarayıcıya 
kaydedebilmesine izin veren bir özelliktir. Yani tarayıcı sekmesi kapatıldığında veriler de kaybolur.
*/


//Değer tanımlama için kullanılır key=name value=gizem
sessionStorage.setItem('name', 'gizem')
sessionStorage.setItem('age', '23')
console.log(sessionStorage.getItem('name'))
console.log(sessionStorage.getItem('age'))
sessionStorage.getItem('key') //değerlere erişim

sessionStorage.removeItem(key);
sessionStorage.removeItem("isim");//değerleri silmek



