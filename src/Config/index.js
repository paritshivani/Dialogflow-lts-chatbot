export default {
    API_URL: 'https://bot.letstalksexuality.com/', // <- enter your API URL here
    speaker: false, //<- make true if want speaker
    muted: true, // <- mute microphone at start
    start_suggestions: ["Age: 16-18", "Age: 19-29","Age: 30-39","Age: 40 and above"], // <- array of suggestions, displayed at the start screen
    start_message:["Before we get started, I have just a few questions which will help me do a better job.","सुरुवात करण्यापूर्वी मला तुमच्याकडून काही प्रश्नांची उत्तरे मिळाली तर मला माझं काम आणखी चांगल्या पद्धतीने करता येऊ शकेल."],
    first_question:["Choose your age category","तुमचा वयोगट निवडा"],
    fallback_lang: 'mr', // <- fallback language code, if history mode or network is unavailable
    voice: 'native' // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI
}