import HandlerMess from './hendlerMess';

const { Observable } = require('rxjs');

export default class App {
  constructor() {
    this.place = document.getElementById('pms');
    this.url = 'http://localhost:8090/sse';
    this.init();
  }

  init() {
    const stream$ = Observable.create((subsrt) => {
      const sse = new EventSource(this.url);
      sse.onmessage = (x) => subsrt.next(JSON.parse(x.data));
      sse.onerror = (er) => subsrt.error(er);
      return () => { sse.close(); };
    });
    stream$.subscribe((x) => {
      const way = x.message[0];
      const newMess = new HandlerMess(way.from, way.body, way.received).createM();
      this.place.prepend(newMess);
    });
  }
}
