import Ariac from './src/rx-client';
import running from 'running';
import Rx from 'rx';
import fs from 'fs';
import {
  spawn
}
from 'child_process';


let process = spawn('ls', ['-l'], {},
  function(p) {
    console.log(p.pid);
  });

// console.log("pid> " + process.pid);

// ariac.getGlobalOption(function(resp) {
//   console.log(resp);
// });
// ariac.getGlobalStat();
// ariac.getGlobalOption().subscribe(function(resp) {
//   console.log(resp);
// });
// ariac.getGlobalOption().subscribe(function(resp) {
//   console.log(resp);
// });

// let ariac = new Ariac('http://localhost:6800/jsonrpc');
//
// ariac.getGlobalStat().subscribe(function(resp) {
//   console.log(resp);
// });
//
//
//
// console.log("finished test");
