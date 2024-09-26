


function generate(){
    const gen = document.getElementById('Quote');
    //var quote = quotes[Math.floor(Math.random()*quotes.length)];
    //gen.innerHTML = quote;
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data => { console.log(data.content) 
        gen.innerHTML = data.content;
    
    });
}
