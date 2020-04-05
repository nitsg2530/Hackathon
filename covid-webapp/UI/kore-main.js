(function($){

    $(document).ready(function () {
        function assertion(options, callback) {
            var jsonData = {
                "clientId": options.clientId,
                "clientSecret": options.clientSecret,
                "identity": options.userIdentity,
                "aud": "",
                "isAnonymous": false
            };
            $.ajax({
                url: options.JWTUrl,
                type: 'post',
                data: jsonData,
                dataType: 'json',
                success: function (data) {
                    options.assertion = data.jwt;
                    options.handleError = koreBot.showError;
                    options.chatHistory = koreBot.chatHistory;
                    options.botDetails = koreBot.botDetails;
                    callback(null, options);
                    setTimeout(function () {
                        if (koreBot && koreBot.initToken) {
                            koreBot.initToken(options);
                        }
                    }, 2000);
                },
                error: function (err) {
                    koreBot.showError(err.responseText);
                }
            });
        }

        function koreGenerateUUID() {
            console.info("generating UUID");
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
            }

            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        }


        var chatConfig=window.KoreSDK.chatConfig;
        chatConfig.botOptions.assertionFn=assertion;
        var korecookie = localStorage.getItem("korecom");
        var uuid = (korecookie) || koreGenerateUUID();
        chatConfig.botOptions.userIdentity= uuid;


        var koreBot = koreBotChat();
        koreBot.show(chatConfig);
        $('.openChatWindow').click(function () {
            koreBot.show(chatConfig);
        });
        $( ".accordion" ).accordion({
        collapsible: true
        });
        $(".bannerImage").click(function(){
        $(".bannerBlock").toggle("hide");
        });
        $(".bannerCollapse").click(function(){
        $(".bannerBlock").toggle("hide");
        });
    });

})(jQuery || (window.KoreSDK && window.KoreSDK.dependencies && window.KoreSDK.dependencies.jQuery));