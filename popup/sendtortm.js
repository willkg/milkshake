async function rtmonclick(ev) {
    console.info("click!");
    let task = document.getElementById("rtmtodo").value;
    let siteurl = document.getElementById("rtmsiteurl").value;

    let url = "https://m.rememberthemilk.com/add?" +
        "name=" + encodeURIComponent(task) + "&" +
        "url=" + encodeURIComponent(siteurl);

    let w = await browser.windows.create({
        width: 250,
        height: 580,
        url: url,
        type: "popup"
    });
}

async function rtmonload(ev) {
    // Get the active tab--we need the title and url for this
    let activeTabs = await browser.tabs.query({active: true, currentWindow: true});
    let url = activeTabs[0].url;
    let title = activeTabs[0].title;

    document.getElementById('rtmsiteurl').value = url;
    document.getElementById("rtmtodo").value = title;
    document.getElementById("rtmsubmit").addEventListener("click", rtmonclick);
}


document.addEventListener("DOMContentLoaded", rtmonload);
