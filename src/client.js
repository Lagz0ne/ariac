import urlUtil from 'url';
import j from 'jayson';

const SUPPORTED_PROTOCOL = {
  'http:': j.client.http,
  'https:': j.client.https,
  'tcp:': j.client.tcp,
  'tls:': j.client.tls
};

class Client {
  constructor(url, options) {
    this._urlOptions = urlUtil.parse(url);
    if (!SUPPORTED_PROTOCOL[this._urlOptions.protocol]) {
      throw new Error('Unsupported protocol ' + urlOptions.protocol);
    }
    this._client = SUPPORTED_PROTOCOL[this._urlOptions.protocol](url);

    if (options.token) {
      this._token = `token:${options.token}`;
    }
  }

  getGlobalStat(callback) {
    this._client.request('aria2.getGlobalStat', [this._token],
      _boringCallback(callback));
  }

  addUri(uris, options, queueIndex, callback) {
    this._client.request('aria2.addUri', [
      this._token, [uris], options, queueIndex
    ], _boringCallback(callback));
  }

  addMetalink(metalink, options, callback) {
    // TODO
  }

  addTorrent(torrent, options, callback) {
    // TODO
  }

  addUris(uris, options, queueIndex, callback) {
    this._client.request('aria2.addUri', [
      this._token, uris, options, queueIndex
    ], _boringCallback(callback));
  }

  remove(gid, callback) {
    this._client.request('aria2.remove', [this._token, gid], _boringCallback(
      callback));
  }

  forceRemove(gid, callback) {
    this._client.request('aria2.forceRemove', [this._token, gid],
      _boringCallback(callback));
  }

  pause(gid, callback) {
    this._client.request('aria2.pause', [this._token, gid], _boringCallback(
      callback));
  }

  pauseAll(callback) {
    this._client.request('aria2.pauseAll', [this._token], _boringCallback(
      callback));
  }

  forcePause(gid, callback) {
    this._client.request('aria2.forcePause', [this._token, gid],
      _boringCallback(callback));
  }

  forcePauseAll(callback) {
    this._client.request('aria2.forcePauseAll', [this._token],
      _boringCallback(callback));
  }

  unpause(gid, callback) {
    this._client.request('aria2.unpause', [this._token, gid],
      _boringCallback(callback));
  }

  unpauseAll(callback) {
    this._client.request('aria2.unpauseAll', [this._token],
      _boringCallback(callback));
  }

  tellStatus(gid, status, callback) {
    this._client.request('aria2.tellStatus', [this._token, gid, status],
      _boringCallback(callback));
  }

  getUri(gid, callback) {
    this._client.request('aria2.getUri', [this._token, gid],
      _boringCallback(callback));
  }

  getFiles(gid, callback) {
    this._client.request('aria2.getFiles', [this._token, gid],
      _boringCallback(callback));
  }

  getPeers(gid, callback) {
    this._client.request('aria2.getPeers', [this._token, gid],
      _boringCallback(callback));
  }

  getServers(gid, callback) {
    this._client.request('aria2.getServers', [this._token, gid],
      _boringCallback(callback));
  }

  tellActive(keys, callback) {
    this._client.request('aria2.tellActive', [this._token, gid],
      _boringCallback(callback));
  }

  tellWaiting(offset, num, keys, callback) {
    // TODO
  }

  tellStopped(offset, num, keys, callback) {
    // TODO
  }

  changePosition(gid, pos, how, callback) {
    // TODO
  }

  changeUri(gid, fileIndex, delUris, addUris, options, callback) {
    // TODO
  }

  getOption(gid, callback) {
    this._client.request('aria2.getOption', [this._token, gid],
      _boringCallback(callback));
  }

  changeOption(gid, options, callback) {
    this._client.request('aria2.changeOption', [this._token, gid, options],
      _boringCallback(callback));
  }

  getGlobalOption(callback) {
    this._client.request('aria2.getGlobalOption', [this._token],
      _boringCallback(callback));
  }

  changeGlobalOption(options, callback) {
    this._client.request('aria2.changeGlobalOption', [this._token, options],
      _boringCallback(callback));
  }

  purgeDownloadResult(callback) {
    this._client.request('aria2.purgeDownloadResult', [this._token],
      _boringCallback(callback));
  }

  removeDownloadResult(gid, callback) {
    this._client.request('aria2.removeDownloadResult', [this._token, gid],
      _boringCallback(callback));
  }

  getVersion(callback) {
    this._client.request('aria2.getVersion', [this._token],
      _boringCallback(callback));
  }

  getSessionInfo(callback) {
    this._client.request('aria2.getSessionInfo', [this._token],
      _boringCallback(callback));
  }

  shutdown(callback) {
    this._client.request('aria2.shutdown', [this._token],
      _boringCallback(callback));
  }

  forceShutdown(callback) {
    this._client.request('aria2.forceShutdown', [this._token],
      _boringCallback(callback));
  }

  saveSession(callback) {
    this._client.request('aria2.saveSession', [this._token],
      _boringCallback(callback));
  }

  multiCalls() {
    // TODO
  }
}

function _boringCallback(callback) {
  return (err, error, response) => {
    if (!callback) return;
    if (err) return callback(undefined, err);
    if (error) return callback(undefined, error);
    if (response) return callback(response);
  }
}

export default Client
