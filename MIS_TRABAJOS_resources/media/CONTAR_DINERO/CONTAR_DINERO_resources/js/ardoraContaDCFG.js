//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#FF0000"; colorText="#000000"; colorSele="#FFFFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES LO HAS LOGRADO"; messageTime="UPPS SE ACABO EL TIEMPO"; messageError="ERROR"; messageErrorG="ERROR"; messageAttempts="LLEGASTE AL LIMITE DE TIEMPO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q09OVEFSX0RJTkVSTw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var m=["cns000001","cns000005","cns000010","cns000020","cns000050","cns000100","cns000200","cns000500","cns001000","cns002000","cns005000","cns010000","cns020000"];
var values=[10,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000];
var tiC=[30,30,30,30,30,30,30,30,20,20,20,20,20];
var imaH=[0,0,0];
var totEuros=0;var totCent=0;var nameEuro="€";var nameCent="Cént.";
var te=["10 NUEVOS SOLES Y 20 CENTAVOS","300 NUEVOS SOLES Y 10 CENTAVOS","30 NUEVOS SOLES Y 5 CENTAVOS"];var im=["","",""];var a1=["","",""];var imalt=["","",""];
var indexGame=0;var totCentFixed=0; var totEurosFixed=0; var avaiCoins=[];var correct=[];
var ce=[200,100,50];var eu=[10000,300000,30000];var ram_G=[-1,-1,-1];
