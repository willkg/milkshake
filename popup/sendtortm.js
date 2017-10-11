console.info("rtm test");
document.addEventListener("DOMContentLoaded", (e) => {
  console.info("rtm load");
  // Get the active tab--we need the title and url for this
  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
  gettingActiveTab.then((tabs) => {
    var url = tabs[0].url;
    document.getElementById('rtmsiteurl').value = url;

    var title = tabs[0].title;
    document.getElementById("rtmtodo").value = title;
  });
});
