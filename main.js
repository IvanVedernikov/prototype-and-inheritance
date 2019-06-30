
var counterModule = (function (jQ) {
  var counter = 0;

  var incrementCounter = function () {
    counter++;
  }

  var getCounter = function () {

    console.log(jQ('body'));
    return counter;
  }
  return {
    incrementCounter: incrementCounter,
    getCounter: getCounter
  };
})(jQuery)





// var Track = function (params) {
//   this.name = params.name;
//   this.url = params.url;
//   // this.playTrack = function () {
//   //   console.log('We play ' + this.name);
//   // }
// };
// Track.prototype.playTrack = function () {
//     console.log('We play ' + this.name);
// };
//
// var track01 = new Track({
//   name: 'track01',
//   url: 'track01.mp3'
// });
//
// var track02 = new Track({
//   name: 'track02',
//   url: 'track02.mp3'
// });
//
// console.log(track01);
// console.log(track02);
//
// track01.playTrack();
// track02.playTrack();
//
// var YoutubeTrack = function (params) {
//   Track.apply(this, arguments);
//   this.image = params.image;
// }
//
// YoutubeTrack.prototype = Object.create(Track.prototype);
// YoutubeTrack.prototype.constructor = YoutubeTrack;
// YoutubeTrack.prototype.playTrack = function () {
//   console.log('Hello youtube', this.name);
// };
//
// var youtubeTrack01 = new YoutubeTrack({
//   name: 'youtubeTrack01',
//   url: 'youtubeTrack01.mp3',
//   image: 'youtubeTrack01.jpg'
// });
//
// var youtubeTrack02 = new YoutubeTrack({
//   name: 'youtubeTrack02',
//   url: 'youtubeTrack02.mp3',
//   image: 'youtubeTrack02.jpg'
// });
//
// console.log(youtubeTrack01);
// console.log(youtubeTrack02);
//
// youtubeTrack01.playTrack();

// var Track = function (name) {
//   this.name = name
// };
//
// // Track.prototype.getName = function () {
// //   return this.name;
// // };
// //
// // Track.prototype.play = function () {
// //   console.log(this.name + ' started playing')
// // };
//
// var Playlist = function (name) {
//   this.name = name
// };
//
// var nameMixin = {
//   getName: function () {
//     return this.name;
//   }
// };
//
// var controlMixin = {
//   play: function () {
//     console.log(this.name + ' started playing')
//   }
// };
//
// // Playlist.prototype.getName = function () {
// //   return this.name;
// // };
// //
// // Playlist.prototype.play = function () {
// //   console.log(this.name + ' started playing')
// // };
//
// var superTrack = new Track('Super track');
// var coolPlaylist = new Playlist('Cool playlist');
//
// $.extend(Track.prototype, nameMixin, controlMixin);
// $.extend(Playlist.prototype, nameMixin, controlMixin);
//
// console.log(superTrack);
// console.log(coolPlaylist);
//
// superTrack.play();
// coolPlaylist.play();./§x c 0
