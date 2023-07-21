//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=5;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="SE ACABO TU TIEMPO:("; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="LLEGASTE AL LIMITE DE INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,1,1,1]];
var vCell=[["1","3","1","0"],["0","2","2","2"],["0","2","2","2"],["0","2","2","2"]];
var a0Cell=[["UkVTUE9OREU=","wr9FbCBhbmltZSBcIkF0dGFjayBvbiBUaXRhblwiIGVzdMOhIGJhc2FkbyBlbiB1biBtYW5nYT8=","wr9FbCBwZXJzb25hamUgcHJpbmNpcGFsIGRlIFwiRGVhdGggTm90ZVwiIHNlIGxsYW1hIExpZ2h0IFlhZ2FtaT8=","wr9cIk5hcnV0b1wiICBubyBlcyB1bmEgc2VyaWUgZGUgYW5pbWUgc29icmUgbmluamFzPw=="],["UkVTUE9OREUgU0k=","MQ==","MQ==","MA=="],["UkVTUE9OREUgTk8=","MA==","MA==","MQ=="],["UFVFREUgU0VS","MA==","MA==","MA=="]];
var c=[[8,52,62,49],[11,1,1,1],[11,1,1,1],[9,1,1,1]];
var c1=[[0,2,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var c2=[[0,2,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var c3=[[0,9,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var a1Cell=[["UkVTUE9OREU=","U0k=","wr9FbCBwZXJzb25hamUgcHJpbmNpcGFsIGRlICJEZWF0aCBOb3RlIiBzZSBsbGFtYSBMaWdodCBZYWdhbWk/","wr8iTmFydXRvIiAgbm8gZXMgdW5hIHNlcmllIGRlIGFuaW1lIHNvYnJlIG5pbmphcz8="],["UkVTUE9OREUgU0k=","MQ==","MQ==","MA=="],["UkVTUE9OREUgTk8=","MA==","MA==","MQ=="],["UFVFREUgU0VS","MA==","MA==","MA=="]];
var a2Cell=[["UkVTUE9OREU=","Tk8=","wr9FbCBwZXJzb25hamUgcHJpbmNpcGFsIGRlICJEZWF0aCBOb3RlIiBzZSBsbGFtYSBMaWdodCBZYWdhbWk/","wr8iTmFydXRvIiAgbm8gZXMgdW5hIHNlcmllIGRlIGFuaW1lIHNvYnJlIG5pbmphcz8="],["UkVTUE9OREUgU0k=","MQ==","MQ==","MA=="],["UkVTUE9OREUgTk8=","MA==","MA==","MQ=="],["UFVFREUgU0VS","MA==","MA==","MA=="]];
var a3Cell=[["UkVTUE9OREU=","UFVFREUgU0VS","wr9FbCBwZXJzb25hamUgcHJpbmNpcGFsIGRlICJEZWF0aCBOb3RlIiBzZSBsbGFtYSBMaWdodCBZYWdhbWk/","wr8iTmFydXRvIiAgbm8gZXMgdW5hIHNlcmllIGRlIGFuaW1lIHNvYnJlIG5pbmphcz8="],["UkVTUE9OREUgU0k=","MQ==","MQ==","MA=="],["UkVTUE9OREUgTk8=","MA==","MA==","MQ=="],["UFVFREUgU0VS","MA==","MA==","MA=="]];
var wordsGame="VEFCTEFT"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=4;var showC=true;
