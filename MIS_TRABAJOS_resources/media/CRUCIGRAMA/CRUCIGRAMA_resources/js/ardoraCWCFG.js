//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#B9E916"; colorButton="#FFFF00"; colorText="#000000"; colorSele="#A426D9";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Georgia, Serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q1JVQ0lHUkFNQQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["TA==","","","UA==","","","","","","","","","","",""],["RQ==","","","QQ==","","","","","","","","","","",""],["Tw==","","","Tg==","","","","","","","","","","",""],["Tg==","RQ==","Qw==","VA==","Tw==","Ug==","QQ==","","","","","","","",""],["","","","RQ==","","","","","","","","","","",""],["","","","Ug==","QQ==","Tg==","QQ==","","","","","","","",""],["","","","QQ==","","","Ug==","","","","","","","",""],["","","","","","","QQ==","TA==","Qw==","RQ==","","","","",""],["","","","","","","w5E=","","","","","","","",""],["","","","QQ==","TA==","UA==","QQ==","Qw==","QQ==","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""]];
var x1=[1,1,4,7,4,7,4];
var y1=[1,4,1,6,6,8,10];
var x2=[1,7,4,7,7,10,9];
var y2=[4,4,7,10,6,8,10];
var imaCW=["CRUCIGRAMA_resources/media/1366_2000.jpg","CRUCIGRAMA_resources/media/pngtree-braised-crabs-png-image_2843438.jpg","CRUCIGRAMA_resources/media/42e37e500a28931b3b956de3fa93037b.jpg","CRUCIGRAMA_resources/media/png-transparent-cartoon-spider-cartoon-insect-cartoon-arachnid-spider-insect-bug-cartoon-animal-line-art.png","CRUCIGRAMA_resources/media/png-transparent-frog-cartoon-rama-comics-animals-photography.png","CRUCIGRAMA_resources/media/png-clipart-reindeer-cartoon-reindeer-antler-comics.png","CRUCIGRAMA_resources/media/png-clipart-drawing-alpaca-animal-mud-horse.png"];
var audioCW=["","","","","","",""];
var defCW=["Es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género","Es una especie de crustáceo decápodo del infraorden Brachyura","Es una variación negra de varias especies de grandes félidos, en especial del leopardo y del jaguar.","Son animales pertenecientes al orden de los arácnidos.","Los anuros son un grupo de anfibios, con rango taxonómico de orden.","Es una especie de mamífero artiodáctilo de la familia de los cérvidos.","Es un mamífero que viene de la especie Camelidae."];
var altCW=["","","","","","",""];
var colNum=15;
var rowNum=15;
