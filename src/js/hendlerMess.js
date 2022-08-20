export default class HandlerMess {
  constructor(from, body, time) {
    this.fm = from;
    this.by = body.length < 15 ? body : `${body.slice(0, 16)} ...`;
    this.tim = time;
  }

  createM() {
    const messag = document.createElement('div');
    messag.className = 'messag';
    const frm = document.createElement('p');
    frm.className = 'frm';
    frm.textContent = this.fm;
    messag.append(frm);
    const bdy = document.createElement('p');
    bdy.className = 'by';
    bdy.textContent = this.by;
    messag.append(bdy);
    const tm = document.createElement('p');
    tm.className = 'tm';
    tm.textContent = HandlerMess.getData(this.tim);
    messag.append(tm);
    return messag;
  }

  static getData(tim) {
    const dat = new Date(tim);
    const year = `${dat.getFullYear()}`;
    const month = dat.getMonth() < 10 ? `0${dat.getMonth()}` : `${dat.getMonth()}`;
    const day = dat.getDate() < 10 ? `0${dat.getDate()}` : `${dat.getDate()}`;
    const haurs = dat.getHours() < 10 ? `0${dat.getHours()}` : `${dat.getHours()}`;
    const minut = dat.getMinutes() < 10 ? `0${dat.getMinutes()}` : `${dat.getMinutes()}`;
    const result = `${haurs}:${minut} ${day}.${month}.${year}`;
    return result;
  }
}
