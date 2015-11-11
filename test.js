import Ariac from './src/client';
import Rx from 'rx';
// import {
//   spawnSync
// }
// from 'child_process';
//
const secret = 'TOP_SECRET';
// let aria = spawnSync('./bin/aria2c', ['--enable-rpc', '--rpc-listen-all',
//   `--rpc-secret=${secret}`
// ], {
//   stdio: [
//     0, // use parents stdin for child
//     'pipe', // pipe child's stdout to parent
//     'pipe'
//   ]
// });
//
// console.log("pid •> " + aria.pid);

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

let ariac = new Ariac('http://localhost:6800/jsonrpc', {
  token: secret
});

// ariac.getGlobalStat((resp, err) => {
//   console.log(resp);
// });
ariac.addUri("http://mirror.internode.on.net/pub/test/100meg.test", {}, 0, (
  output, err) => {

  console.log(output);
  ariac.remove(output, (res, error) => {
    console.log(res);
    console.log(error);
  })
});

ariac.getVersion((version, error) => console.log(version));
