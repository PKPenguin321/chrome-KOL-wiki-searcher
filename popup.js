// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let doSearch = document.getElementById('doSearch');
let searchTerm = document.getElementById('searchTerm');
  doSearch.onclick = function(element) {
    var inputText = searchTerm.value;
	var correctedInput = inputText.replace(" ", "_");
	var newUrl = "http://kol.coldfront.net/thekolwiki/index.php/" + correctedInput;
	console.log("URL is " + newUrl + " time to open page!");
	window.open(newUrl, '_blank');
  };
searchTerm.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    doSearch.click();
  }
});