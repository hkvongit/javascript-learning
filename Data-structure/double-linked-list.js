// Explaining double linked list with music playlist

// A music playlist have 3 parts: first song, current song, last song
// Each current song has PREVIOUS and NEXT.

// Functionalities
// - Play song
// - Add song
// - Next song
// - Previous song
// - Show playlist

class Song {
  constructor(songContent) {
    this.songContent = songContent;
    this.prev = null;
    this.next = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
    this.current = null;
    this.tail = null;
  }

  addSong(songContent) {
    const newSong = new Song(songContent);
    if (!this.head) {
      this.head = newSong;
      this.tail = newSong;
    } else {
      this.tail.next = newSong;
      newSong.prev = this.tail;
      this.tail = newSong;
    }
    console.log("New song added to playlist");
  }
  play() {
    if (!this.head) {
      console.log("No songs available");
      return;
    } else if (!this.current) {
      this.current = this.head;
    }
    console.log(`playing: ${this.current.songContent}`);
  }
}
