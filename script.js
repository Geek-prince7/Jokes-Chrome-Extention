async function fetchJoke()
{
    let resp=await fetch('https://icanhazdadjoke.com/slack')
    let resp2=await resp.json()
    console.log(resp2)
    // console.log('---------------------------------------------')
    // console.log(resp2.attachments[0].text)
    let joke=resp2.attachments[0].text;
    const element=document.getElementById('joke-para');
    element.innerHTML=joke;
}

fetchJoke();