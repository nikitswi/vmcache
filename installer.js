

if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        const deferredPrompt = e;
    
        document.getElementById('installbutton').addEventListener('click', () => {

            deferredPrompt.prompt();

            deferredPrompt.userChoice.then(choiceResult => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('App installed');
                } else {
                    console.log('App installation declined');
                }
            });
        });
    });
    
}