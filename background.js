chrome.tabs.onUpdated.addListener((tabId, tabs) => {
    if(tabs.url && tabs.url.includes("youtube.com/watch")){
        const queryParams = tabs.url.split("?")[1]
        const urlParam = new URLSearchParams(queryParams)

        console.log(urlParam);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParam.get("v")
        })
    }
})