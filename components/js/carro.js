let settings = {
    personx: document.getElementById('pessoa').offsetLeft,
    persony: document.getElementById('pessoa').offsetTop,
    velocity: 1,
    limitAfter: 10,
    limitLow: 20,
    limitRight: eval(screen.width - document.getElementById('carro').width),
    limitUp: 120
};
console.log(settings);
    document.addEventListener('keyup', function(event) {
        let carrox  = Number(document.getElementById('carro').style.marginLeft.replace('px', ''));
        let carroy  = Number(document.getElementById('carro').style.marginTop.replace('px', ''));
        let carroX  = Number(document.getElementById('carro').style.marginBottom.replace('px', ''));

        const keyName = event.keyCode;
        const unidade = 'px';

        if (keyName === 37) {
            console.log(carrox + '' +settings.limitAfter);
            for(let i = 0; i < settings.limitAfter; i++) {
                carrox = eval(carrox - settings.velocity);
                if(carrox > settings.limitAfter) {
                    carrox -= 10;
                    carro.style.marginLeft = carrox + unidade;
                } else {
                    carrox.marginLeft = settings.limitAfter;
                    alert('Limit reached');
                    break;
                }
            }

        } else if(keyName === 38) {
            for(let i = 0; i < settings.limitUp; i++) {
                carroX = eval(carroX + settings.velocity);
                if(carroX < settings.limitUp) {
                    carrox -= 10;
                    carro.style.marginTop = carroX + unidade;
                } else {
                    carro.style.marginTop = settings.limitUp;
                    alert('Ops!!')
                }
                caroX++;
            }
        } else if(keyName === 39) {
            let accidentWitchPerson = 0;
            for(let i = 0; i < settings.limitRight; i++) {
                carroy = eval(carroy - settings.velocity);
                if(carroy < settings.limitRight) {
                    carroy += 10;
                    carro.style.marginLeft = carroy + unidade;

                    if(carroy >= (settings.personx - 150) || accidentWitchPerson == 0) {
                        confirm = confirm ("You want run over this person?");
                        if (confirm == true) {
                            document.getElementById ('pessoa').src = './assets/wings.png';
                            for(let i = 0; i  <= 580; i++){
                                guard = [i];
                                document.getElementById('pessoa').style.marginTop = '-'+i+'px';
                                i++;
                            }
                        } else if(confirm == false) {
                            carro.style.width = '210px';
                            carro.style.marginTop = '100px';
                            carro.src = './assets/carcrash.png';
                            document.getElementById ('pessoa').style.visibility = 'hidden';
                        }
                        accidentWitchPerson++;
                    }
                }

            }
        } else if(keyName === 40) {
            for(let i = 0; i < settings.limitLow; i++) {
                if(carroy < settings.limitLow) {
                    carroy += 10;
                    carro.style.marginTop = carroy + unidade;
                }  else {
                    carro.style.marginTop = settings.limitLow;
                }
            }
        }
    });


