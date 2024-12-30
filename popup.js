// function click() {
//     let txt = document.getElementById("txt");
//     if (txt) {
//         if (txt.innerHTML === "champu") {
//             txt.innerHTML = "Original Text";
//         } else {
//             txt.innerHTML = "champu";
//         }
//     } else {
//         console.error('Element with id "txt" not found.');
//     }
// }

document.getElementById("changeTextButton").addEventListener("click", click);

document.getElementById('readButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          const element = document.querySelector('.hP');
          return element ? element.textContent : 'Element with class "hP" not found';
        }
      }, (results) => {
        document.getElementById('htmlContent').value = results[0].result;
      });
    });
  });