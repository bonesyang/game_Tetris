var local = new local();
local.start();
var remote = new remote();
remote.start(2, 2);
remote.bindEvents();