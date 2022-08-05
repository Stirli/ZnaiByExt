(async () => {
    const src = chrome.runtime.getURL("Content/content-main.js");
    const contentMain = await import(src);
    contentMain.main();
  })();