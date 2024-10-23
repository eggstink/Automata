let currentState = 'OFF';
let blinkInterval;

function updateStateDisplay() {
    const lightBulb = document.getElementById('lightBulb');
    const stateInfo = document.getElementById('stateInfo');

    if (blinkInterval) {
        clearInterval(blinkInterval);
        blinkInterval = null;
    }

    switch (currentState) {
        case 'OFF':
            lightBulb.className = 'light-bulb';
            stateInfo.innerText = 'Current State: OFF';
            break;
        case 'DIM':
            lightBulb.className = 'light-bulb dim';
            stateInfo.innerText = 'Current State: DIM';
            break;
        case 'ON':
            lightBulb.className = 'light-bulb on';
            stateInfo.innerText = 'Current State: ON';
            break;
        case 'BLINK':
            stateInfo.innerText = 'Current State: BLINK';
            blinkInterval = setInterval(() => {
                if (lightBulb.classList.contains('dim')) {
                    lightBulb.className = 'light-bulb on';
                } else {
                    lightBulb.className = 'light-bulb dim';
                }
            }, 300);
            break;
    }
}

function turnOff() {
    currentState = 'OFF';
    updateStateDisplay();
}

function turnDim() {
    if (currentState === 'BLINK') {
        clearInterval(blinkInterval);
    }
    if (currentState === 'ON' || currentState === 'BLINK') {
        currentState = 'DIM';
        updateStateDisplay();
    }
}

function turnOn() {
    if (currentState === 'BLINK') {
        clearInterval(blinkInterval); 
    }
    if (currentState === 'OFF' || currentState === 'DIM' || currentState === 'BLINK') {
        currentState = 'ON';
        updateStateDisplay();
    }
}

function startBlink() {
    if (currentState === 'ON' || currentState === 'DIM') {
        currentState = 'BLINK';
        updateStateDisplay();
    }
}

updateStateDisplay();
