console.log('background is running')

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'theme-change') {
    // Broadcast the new theme to all tabs
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (!tab.id) return
        chrome.tabs.sendMessage(tab.id, { type: 'apply-theme', theme: message.theme })
      })
    })
  }
})
