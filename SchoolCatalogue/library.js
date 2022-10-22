class Media {
  constructor(title) {
    this._title = title;
    this._isCheckOut = false;
    this._ratings = [];
    }

  get title() {
    return this._title;
  }

  get isCheckOut() {
    return this._isCheckOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckOut(itIsCheckOut) {
    return this._isCheckOut;
  }

  getAverageRating() {
    const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0)
    const ratingsLength = this._ratings.length;
    return ratingsSum / ratingsLength;
  }

  toggleCheckOutStatus() {
    this._isCheckOut = !this._isCheckOut;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class Cd extends Media {
  constructor(title) {
    super(title);
    this._songs = [''];
  }

  get songs() {
    return this._songs;
  }
}

let historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
console.log(speed.title);