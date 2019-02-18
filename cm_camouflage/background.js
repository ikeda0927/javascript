var judge = true;
function resetJudge(){
  judge = true;
}
chrome.webRequest.onBeforeRequest.addListener(
  function (details){
	console.log(details.url);
    if(judge){
      var win = window.open("https://www.ikegon.tk/","safe_area");
      win.close();
      window.open("https://www.ikegon.tk/","safe_area");
      judge = false;
      chrome.alarms.create("alarm1",{delayInMinutes: 5});
      console.log("ALARM SET.");
    }
  },
  {urls: ["*://trk.ad.abema.io/*"]},
  []
);

chrome.webRequest.onBeforeRequest.addListener(
  function (details){
	console.log(details.url);
    resetJudge();
  },
  {urls: ["*://lk.ameba.jp/*"]},
  []
);
chrome.alarms.onAlarm.addListener(alarm => {
  if(alarm.name === "alarm1"){
    resetJudge();
    chrome.alarms.clearAll();
    console.log("ALARM FIRED AND CLEARED.");
  }
});