// Reference Code: https://raw.githubusercontent.com/GoogleChrome/chrome-extensions-samples/main/api-samples/contextMenus/basic/sample.js

chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
  switch (info.menuItemId) {
    case 'setMeetingUrl':
      // Radio item function
      console.log('setMeetingUrl item clicked. Status:', info);
      const zoomUrl = info.selectionText;
      
      const formattedUrl = `http://alpha.l3squad.com:3000/meeting-url/${encodeURIComponent(zoomUrl)}`;

      // Open a new tab with the formatted URL
      chrome.tabs.create({ url: formattedUrl });
      break;
    case 'checkbox':
      // Checkbox item function
      console.log('Checkbox item clicked. Status:', info.checked);
      break;
    default:
      // Standard context menu item function
      console.log('Standard context menu item clicked.');
  }
}

chrome.runtime.onInstalled.addListener(function () {
  // Create one test item for each context type.
  let menuContexts = [
    'page',
    'selection',
    'link',
    'editable',
    'image',
    'video',
    'audio'
  ];
//   for (let i = 0; i < contexts.length; i++) {
//     let context = contexts[i];
//     let title = "Test '" + context + "' menu item";
//     chrome.contextMenus.create({
//       title: title,
//       contexts: [context],
//       id: context
//     });
//   }

  // Create a parent item and two children.
//   let parent = chrome.contextMenus.create({
//     title: 'Test parent item',
//     id: 'parent'
//   });
//   chrome.contextMenus.create({
//     title: 'Child 1',
//     parentId: parent,
//     id: 'child1'
//   });
//   chrome.contextMenus.create({
//     title: 'Child 2',
//     parentId: parent,
//     id: 'child2'
//   });

  // Create a radio item.
    chrome.contextMenus.create({
      title: 'Set as L3 Meeting URL',
      contexts: ['selection'],
      id: 'setMeetingUrl'
    });

  // Create a checkbox item.
//   chrome.contextMenus.create({
//     title: 'checkbox',
//     type: 'checkbox',
//     id: 'checkbox'
//   });

  // Intentionally create an invalid item, to show off error checking in the
  // create callback.
//   chrome.contextMenus.create(
//     { title: 'Oops', parentId: 999, id: 'errorItem' },
//     function () {
//       if (chrome.runtime.lastError) {
//         console.log('Got expected error: ' + chrome.runtime.lastError.message);
//       }
//     }
//   );
});