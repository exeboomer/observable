class subj {
    constructor(){
        this.subscribers = new Array();
    }

    subscribe (onPublish){
        this.subscribers.push(onPublish);
    }

    sendMessage (message){
        this.subscribers.forEach(function(subscriber) {
            subscriber(message);
        });
    }

}

//лифт
const evalator = new subj();

//Люди
let hum1 = {
    wow: (msg) => {
        console.log('Ого, лифт тут, но сейчас' + msg);
    }
};

let hum2 = {
    ok: (msg) => {
        console.log('Лифт приехал в ' + msg);
    }
};



evalator.subscribe(hum1.wow);
evalator.subscribe(hum2.ok);

setTimeout(function(){evalator.sendMessage('время ' + new Date());}, 3500);