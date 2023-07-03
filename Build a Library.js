class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const ratingsSum = this._ratings.reduce((acc, rating) => acc + rating, 0);
    return ratingsSum / this._ratings.length;
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
  constructor(title, director, runTime) {
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

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  shuffle() {
    const shuffledSongs = [...this._songs];
    for (let i = shuffledSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]];
    }
    return shuffledSongs;
  }
}

const historyOfEverything = new Book(
  'A Short History of Nearly Everything',
  'Bill Bryson',
  544
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // Output: true

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating()); // Output: 4.666666666666667

const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // Output: true

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating()); // Output: 2.3333333333333335

const myCD = new CD('My CD', 'My Artist', ['Song 1', 'Song 2', 'Song 3']);
console.log(myCD.shuffle()); // Output: [ 'Song 3', 'Song 1', 'Song 2' ]
