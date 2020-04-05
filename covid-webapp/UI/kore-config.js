(function(KoreSDK){

    var KoreSDK=KoreSDK||{};

    var botOptions = {};
    botOptions.logLevel = 'debug';
    botOptions.koreAPIUrl = "https://bots.kore.ai/api/";
    botOptions.koreSpeechAPIUrl = "";//deprecated
    botOptions.koreAnonymousFn = koreAnonymousFn;
    botOptions.recorderWorkerPath = '../libs/recorderWorker.js';

    botOptions.JWTUrl ="https://demo.kore.net/users/sts";
    botOptions.botInfo = {"name":"Covid Helper","_id":"st-b76ae715-1fcc-55f9-87d4-3dfc2547f18a"}; // bot name is case sensitive
    botOptions.clientId   = "cs-693a618f-a634-564e-a471-8d96f7aa167b"; 
    botOptions.clientSecret= "Xbm1Je9WGvt04WqKDlTHdH/mLC9LGBQrmNn4cOT0iBQ=";
    
    var chatConfig={
        botOptions:botOptions,
        allowIframe: false,             // set true, opens authentication links in popup window, default value is "false"
        isSendButton: false,            // set true, to show send button below the compose bar
        isTTSEnabled: false,            // set true, to hide speaker icon
        isSpeechEnabled: false,         // set true, to hide mic icon
        allowGoogleSpeech: false,       // set true, to use Google speech engine instead KORE.AI engine.This feature requires valid Google speech API key. (Place it in 'web-kore-sdk/libs/speech/key.js')
        allowLocation: false,           // set false, to deny sending location to server
        loadHistory: false,             // set true to load recent chat history
        messageHistoryLimit: 10,        // set limit to load recent chat history
        autoEnableSpeechAndTTS: false,  // set true, to use talkType voice keyboard.
        graphLib: "d3" ,                // set google, to render google charts.This feature requires loader.js file which is available in google charts documentation.
        googleMapsAPIKey:"",
        minimizeMode:false,              // set true, to show chatwindow in minized mode 
        enterMessage:"Enter Message"
    };
    KoreSDK.chatConfig=chatConfig
})(window.KoreSDK);