import Rx from 'rx';
import Client from './client';

class RxClient {
  constructor(url, options) {
    this._client = new Client(url, options);
  }

  getGlobalOption() {
    return Rx.Observable.create(o => {
      this._client.getGlobalOption(this._typicalCallback(o));
    });
  }

  getGlobalStat() {
    return Rx.Observable.create(o => {
      this._client.getGlobalStat(this._typicalCallback(o));
    });
  }

  _typicalCallback(o) {
    return (resp, err) => {
      if (resp) o.onNext(resp);
      if (err) o.onError(err);
      o.onCompleted();
    }
  }
}

function _call() {

}

export default RxClient
