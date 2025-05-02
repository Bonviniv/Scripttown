document.addEventListener('DOMContentLoaded', () => {
    function createLabTextDisplay() {
        const textDisplay = document.createElement('div');
        textDisplay.id = 'lab-text-display';
        document.body.appendChild(textDisplay);
        return textDisplay;
    }

    const labText = `Welcome to the Lab!\n 
      Here you can find information about\n
      my technical skills and projects.\n
      Feel free to explore!\n`;

    const textElement = createLabTextDisplay();
    textElement.innerHTML = labText.replace(/\n/g, '<br>');

    // Initialize transition logic
    const transitionLogics = new TransitionLogics();

    function simulateUpKeyPress() {
        // Simulate key press down
        const keyDownEvent = new KeyboardEvent('keydown', {
            key: 'w',
            code: 'KeyW',
            bubbles: true
        });
        document.dispatchEvent(keyDownEvent);

        // Release key after 10ms
        setTimeout(() => {
            const keyUpEvent = new KeyboardEvent('keyup', {
                key: 'w',
                code: 'KeyW',
                bubbles: true
            });
            document.dispatchEvent(keyUpEvent);
        }, 10);
    }

    // Set initial spawn point for lab if no transition spawn point exists
    const existingSpawnPoint = sessionStorage.getItem('spawnPoint');
    if (!existingSpawnPoint) {
        document.dispatchEvent(new CustomEvent('setPlayerPosition', {
            detail: { x: -10, y: 100 }
        }));
        setTimeout(simulateUpKeyPress, 100); // Slight delay to ensure character is spawned
    }

    // Set player position if coming from another scenario
    const spawnPoint = sessionStorage.getItem('spawnPoint');
    if (spawnPoint) {
        const spawn = JSON.parse(spawnPoint);
        document.dispatchEvent(new CustomEvent('setPlayerPosition', {
            detail: spawn
        }));
        setTimeout(simulateUpKeyPress, 100); // Slight delay to ensure character is spawned
        sessionStorage.removeItem('spawnPoint');
    }

    // Listen for player movement and check transitions
    document.addEventListener('playerMoved', (event) => {
        const { position, direction } = event.detail;
        const transition = transitionLogics.checkTransition(position, direction);
        
        if (transition) {
            const transitionEvent = new CustomEvent('transitionTriggered', {
                detail: {
                    newScenario: transition.newScenario,
                    spawnPoint: transition.spawnPoint
                }
            });
            document.dispatchEvent(transitionEvent);
        }
    });
});


function simulateDebugKeyPress() {
        // First press
        const keyDownEvent1 = new KeyboardEvent('keydown', {
            key: 'c',
            code: 'KeyC',
            bubbles: true
        });
        document.dispatchEvent(keyDownEvent1);
        
        setTimeout(() => {
            const keyUpEvent1 = new KeyboardEvent('keyup', {
                key: 'c',
                code: 'KeyC',
                bubbles: true
            });
            document.dispatchEvent(keyUpEvent1);

            // Second press after first one completes
            setTimeout(() => {
                const keyDownEvent2 = new KeyboardEvent('keydown', {
                    key: 'c',
                    code: 'KeyC',
                    bubbles: true
                });
                document.dispatchEvent(keyDownEvent2);

                setTimeout(() => {
                    const keyUpEvent2 = new KeyboardEvent('keyup', {
                        key: 'c',
                        code: 'KeyC',
                        bubbles: true
                    });
                    document.dispatchEvent(keyUpEvent2);
                }, 0.1);
            }, 0.1);
        }, 0.1);
    }

    // Call the function when the lab loads
    setTimeout(simulateDebugKeyPress, 200);