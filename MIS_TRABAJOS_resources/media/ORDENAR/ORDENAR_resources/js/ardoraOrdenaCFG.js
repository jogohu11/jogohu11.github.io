var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=4;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#FF0000"; colorText="#000000"; colorSele="#FFFFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="LLEGASTE A TU LIMKITE DE TIEMPO"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="LLEGASTE AL LIMITE DE INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T1JERU5BUg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Tm8gaW1wb3J0YSBjdcOhbnRhcyB2ZWNlcyBjYWlnYXMsIGxvIGltcG9ydGFudGUgZXMgY3XDoW50YXMgdmVjZXMgdGUgbGV2YW50ZXM=","U2llbXByZSBoYXkgdW5hIHNvbHVjacOzbi4gTG8gw7puaWNvIHF1ZSBzZSBuZWNlc2l0YSBlcyBlbmNvbnRyYXJsYQ==","TGEgdmVyZGFkZXJhIHBlbGVhIGNvbWllbnphIGN1YW5kbyB1bm8gZXN0w6EgY2Fuc2FkbyBkZSBsdWNoYXIsIHBlcm8gc2lndWUgYWRlbGFudGU=","TGFzIGhlcmlkYXMgcHVlZGVuIHNhbmFyLCBwZXJvIGxvcyByZWN1ZXJkb3Mgc2llbXByZSBlc3RhcsOhbiBhaMOt","TnVuY2EgdGUgcmluZGFzLCBpbmNsdXNvIGN1YW5kbyBlbmZyZW50ZXMgZGlmaWN1bHRhZGVzLiDCoUNvbmbDrWEgZW4gdGkgbWlzbW8geSBzaWd1ZSBhZGVsYW50ZSE="];imaW=["NARUTO.jpeg","EREN.jpg","VEGETA.jpg","LUFFY.jpg","YuGiOh.jpg"];queW=["Naruto Uzumaki","Eren Yeager","Vegeta","Monkey D. Luffy","Yugi Muto"];altW=["","","","",""];c=[75,65,82,64,93];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="355";indexG=0;profG=0;dirMedia="ORDENAR_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
