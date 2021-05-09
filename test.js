

// function watchTutorialCallback(callback, errorCallback) {
//   let danielPlayingXbox = false;
//   let danielIsCoding = false;

//   if (danielPlayingXbox) {
//     errorCallback({
//       name: 'User not playing', 
//       message: ':('
//     })
//   } else if (danielIsCoding) {
//     errorCallback({
//       name: 'daniel is coding',
//       message: 'WebDevSimplified < amazon' 
//     })
//   } else {
//     callback('Thumbs up and Subscribe')
//   }
// }

// watchTutorialCallback((message) => {
//   console.log(message)
// }, (error) => {
//   console.log(error.name + ' ' + error.message)
// })







// function watchTutorialPromise() {
//   let userLeft = false
//   let userWatchingCatMeme = false
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: 'User Left', 
//         message: ':('
//       })
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//       })
//     } else {
//       resolve('Thumbs up and Subscribe')
//     }
//   })
// }

// watchTutorialCallback(message => {
//   console.log(message)
// }, error => {
//   console.log(error.name + ' ' + error.message)
// })

// watchTutorialPromise().then(message => {
//   console.log(message)
// }).catch(error => {
//   console.log(error.name + ' ' + error.message)
// })

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve('Video 3 Recorded')
// })

// Promise.all([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then(messages => {
//   console.log(messages)
// })

// Promise.race([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then(message => {
//   console.log(message)
// })


let danielPlayingXbox = false;
let danielIsCoding = true;

const watchTutorialCallback = new Promise((resolve, reject)=>{
  
  if (danielPlayingXbox){
    reject({name: "Daniel is not palying xbox",
    message: "discipline" 
          });
        } else if(danielIsCoding) {
    reject({
      name: "Daniel is coding",
  message: "hard work"
    });
  } else{
    resolve('Thumbs up')
  }
})
watchTutorialCallback.then((message)=>{
  console.log(`This is the result: ${message}`)
}).catch((reason)=>{

  console.log(reason.name + ' => ' + reason.message)
})