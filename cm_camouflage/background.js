var judge = true;
function resetJudge(){
  judge = true;
}
chrome.webRequest.onBeforeRequest.addListener(
  function (details){
    var today = new Date();
	console.log(today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s,"+details.url);
    if(judge){
      var win = window.open("https://www.ikegon.tk/","safe_area");
      win.close();
      window.open("https://www.ikegon.tk/","safe_area");
      judge = false;
      chrome.alarms.create("alarm1",{delayInMinutes: 5});
      console.log(today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s,"+"ALARM SET.");
    }
  },
  {urls: ["*://trk.ad.abema.io/*"]},
  []
);

chrome.webRequest.onBeforeRequest.addListener(
  function (details){
    var today = new Date();
	console.log(today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s,"+details.url);
    resetJudge();
  },
  {urls: ["*://lk.ameba.jp/*"]},
  []
);
chrome.webRequest.onBeforeRequest.addListener(
  function (details){
    var today = new Date();
	console.log(today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s,"+details.url);
    resetJudge();
  },
  {urls: ["*://api.bucketeer.jp/*"]},
  []
);
chrome.alarms.onAlarm.addListener(alarm => {
  if(alarm.name === "alarm1"){
    resetJudge();
    chrome.alarms.clearAll();
    var today = new Date();
    console.log(today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s,"+"ALARM FIRED AND CLEARED.");
  }
});