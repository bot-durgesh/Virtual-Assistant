let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let word = new SpeechSynthesisUtterance(text)
    word.rate = 1
    word.pitch = 1
    word.volume = 1
    word.lang = "hi-GB"
    window.speechSynthesis.speak(word)
}

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours >= 0 && hours < 12){
        speak("Good morning")
    }
    else if(hours >= 12 && hours < 16){
        speak("Good afternoon")
    }
    else if(hours >= 16 && hours < 20){
        speak("Good evening")
    }
    else {
        speak("Good night")
    }
}

// window.addEventListener('load', ()=>{
//     wishMe()
// })

let recognition = window.SpeechRecognition || window.webkitSpeechRecognition
let reco = new recognition()
reco.onresult = (event)=>{
    let index = event.resultIndex
    let transcript = event.results[index][0].transcript
    content.innerText = transcript
    Command(transcript.toLowerCase())
}

btn.addEventListener('click', ()=>{
    reco.start()
    btn.style.display = "none"
    voice.style.display = "block"
    
})

function Command(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    
    if(message.includes("who are you")){
        speak("I am nikko your  virtual Assistant, created by durgesh")
    }
    else if(message.includes("hello" || "hey")){
        speak("hello, how can i help you")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("https://www.whatsapp.com")
    }
    else{
        speak(`this is what i found on internet regarding ${message.replace("nikko", "") || message.replace("nicco", "")}`)
        window.open(`https://www.google.com/search?q=${message.replace("nikko", "") || message.replace("nicco", "")}`)
    }


    
}