document.getElementById("viewTable").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    openBusinessCentralTable(tabs);
  });
});

function openBusinessCentralTable(tabs) {
  if (!tabs || tabs.length === 0) {
    alert("No active tabs found.");
    return;
  }

  let activeTab = tabs[0];
  let urlObj = new URL(activeTab.url);
  if (!urlObj.origin.includes("businesscentral.dynamics.com")) {
    alert(
      "This extension only works on tabs that have businesscentral.dynamics.com open."
    );
    return;
  }

  let tableID = document.getElementById("tableId").value;
  if (tableID == null || tableID == "") {
    alert("Please enter a Table ID.");
    return;
  }

  const params = new Proxy(new URLSearchParams(urlObj.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  let company = "";
  if (params.company) {
    company = `&company=${params.company}`;
  }

  let tenant = `tenant=${params.tenant}`;
  if ((urlObj.origin = "https://businesscentral.dynamics.com/")) {
    tenant = "";
  }

  let myNewUrl = `${urlObj.origin}${urlObj.pathname}?${tenant}${company}&Table=${tableID}`;
  window.open(myNewUrl);
}
