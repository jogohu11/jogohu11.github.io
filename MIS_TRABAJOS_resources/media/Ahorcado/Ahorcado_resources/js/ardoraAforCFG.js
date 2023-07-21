//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=3;
var successes=0; successesMax=6; attempts=0; attemptsMax=4;
var score=0; scoreMax=12; scoreInc=2; scoreDec=2;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
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
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="LO SIENTO SE ACABO EL TIEMPO"; messageError="VUELVE A INTENTAR"; messageErrorG="VUELVE A INTENTAR"; messageAttempts="SE ACABO EL LIMITE DE INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QWhvcmNhZG8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["QVJDRVVT","TFVHSUE=","TUVX","WllHQVJERQ==","UkFJS09V","U1VJQ1VORQ==","","","",""];imaW=["0_Pokemon-legendarios-historia_1280882010_255862_1024x576.png","0_Lugia_1280882039_256301_1024x576.png","0_151Mew_OS_anime_5.jpg","0_Z.jpg","0_The_Legend_of_Thunder.png","0_aabd5c2f619802294acd58432a35b3b5.png","","","",""];queW=["está basado en el concepto de una deidad creadora. Físicamente tiene una clara semejanza con una alpaca o una llama, haciendo referencia a la primera porque las culturas incas y aztecas las consideraban divinas, pero puede tener influencia también de ciervos, caballos y del Quilin, una criatura míst","Es una criatura ficticia que forma parte del universo Pokémon. Es conocido como el Pokémon \"Divergente\" o \"Guardián de los Mares\"","Su forma física es similar al embrión de un animal; siguiendo la teoría de la recapitulación, según la cual los animales comparten una misma forma física en el embrión repitiendo todas sus etapas evolutivas anteriores antes de nacer","Es un Pokémon que comparte rasgos comunes con Xerneas e Yveltal, como el color negro que adorna su cuerpo y los rasgos de organismos vivos, como los hexágonos que conforman su cuerpo similar a células vegetales, los cuales suelen brillar en diferentes patrones.","Tiene la velocidad del rayo. Los rugidos de este Pokémon emiten ondas de choque que se esparcen vibrando por el aire y sacuden el suelo como si fueran auténticas descargas de rayo.","Emana la pureza de los manantiales. Suele corretear por el campo con gran elegancia. Este Pokémon tiene el poder de purificar el agua contaminada.","","","",""];var wordsL=[6,5,3,7,6,7,"","","",""];var altW=["","","","","","","","","",""];
var auW=["MQ==","Mg==","Mw==","NA==","NQ==","Ng==","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Ahorcado_resources/media/"; textBNext="";
