//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=10; timeIni=10; timeBon=0;
var successes=0; successesMax=20; attempts=0; attemptsMax=3;
var score=0; scoreMax=2; scoreInc=2; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#E21D2C"; colorText="#000000"; colorSele="#FFFFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Lucida Console', Monaco, monospace";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=10; messageOk="Lo lograste"; messageTime="Lo siento se acabo el Tiempo"; messageError="Error"; messageErrorG="Error"; messageAttempts="llegaste al limite de intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmVsYWNpb25hcg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["U0FNVVJBSQ==", "RVNQQURB"],["RVNQQURB", "S1VOQUk="],["QkxFQUNI", "SE9MTE9X"],["SE9MTE9X", "U0hJTklHQU1J"],["TkFSVVRP", "SlVUU1U="],["SlVUU1U=", "TklOSkE="],["QVRUQUNLIE9OIFRJVEFO", "VElUQU5FUw=="],["VElUQU5FUw==", "RVJFTiBZRUFHRVI="],["RFJBR09OIEJBTEw=", "U0FJWUFO"],["U0FJWUFO", "VUxUUkEgSU5TVElOVE8="],["T05FIFBJRUNF", "TU9OS0VZIEQuIExVRkZZ"],["TU9OS0VZIEQuIExVRkZZ", "R09NVSBHT01VIE5PIE1J"],["UE9LRU1PTg==", "QVNI"],["QVNI", "RU5UUkVOQURPUg=="],["Tk8gR0FNRSBOTyBMSUZF", "U09SQQ=="],["U09SQQ==", "REVEVUNDScOTTg=="],["TVkgSEVSTyBBQ0FERU1JQQ==", "REVLVQ=="],["REVLVQ==", "QUxMIEZPUiBPTkU="],["QkVNIDEw", "QkVO"],["QkVO", "T01OSVRSSVg="]];
var c=[[7,6],[6,5],[6,6],[6,9],[6,5],[5,5],[15,7],[7,11],[11,6],[6,14],[9,15],[15,15],[7,3],[3,10],[15,4],[4,9],[16,4],[4,11],[6,3],[3,8]];
var con1=["SAMURAI","BLEACH","NARUTO","ATTACK ON TITAN","DRAGON BALL","ONE PIECE","POKEMON","NO GAME NO LIFE","MY HERO ACADEMIA","BEM 10"];
var con2=["ESPADA","HOLLOW","JUTSU","TITANES","SAIYAN","MONKEY D. LUFFY","ASH","SORA","DEKU","BEN"];
var con3=["KUNAI","SHINIGAMI","NINJA","EREN YEAGER","ULTRA INSTINTO","GOMU GOMU NO MI","ENTRENADOR","DEDUCCIÓN","ALL FOR ONE","OMNITRIX"];
var sel1=""; join1=[]; join2=[];
