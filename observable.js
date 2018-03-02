// Observable - лифт

function evalator(){ //лифт
  var humans = []; // список наблюдающих
  this.sendMessage = function(msg){ //Оповещение всех наблюдающих
    for (var i = 0, len = humans.length; i < len; i++){
      humans[i].imhere(msg); // для оповещения обращается к методу imhere
    }
  };
  this.addHuman = function(human){ //Добавление человека к списку наблюдающих
    humans.push(human);
  };
}

//[observers] - люди

function human(behavior){ // передаем поведение
  this.imhere = function(msg){ 
    behavior(msg); // порядок обработки полученного сообщения
  };
}

var evalator = new evalator(); //создал лифт

var hum1 = new human(function(msg){console.log("oh evalator, but now "+msg);}); // создал первого человека + его поведение
var hum2 = new human(function(msg){console.log("evalator here at "+msg);}); // создал первого человека + его поведение

evalator.addHuman(hum1); //добавляем в список человека1
evalator.addHuman(hum2); //добавляем в список человека2

setTimeout(function(){evalator.sendMessage('time ' + new Date());}, 4000) // поведение лифта

/*
Есть лифт, за ним наблюдают 2 человека.
Лифт приезжает и оповещает их о прибытии передавая время.
Один кричит ох, лифт здесь, но сейчас столько-то времени.
Второй говорит лифт здесь в столько-то времени.
*/