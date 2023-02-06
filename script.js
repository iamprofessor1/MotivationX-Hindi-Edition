fetch('https://hindi-quotes.vercel.app/random')
    .then(data => data.json())
    .then(motivation => {
        const motivationText = motivation.quote;
        const motivationElement = document.getElementById('motivationElement');

        motivationElement.innerHTML = motivationText;
    })