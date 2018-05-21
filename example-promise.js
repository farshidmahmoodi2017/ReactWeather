//
// function getTempCallback(location,callback) {
//   callback(undefined,78);
//   callback('City not fount');
//
// }
//
// getTempCallback('Tehran', function(err,temp){
//   if(err){
//     console.log('error',err);
//   }
//   else {
//     console.log('success',temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve,reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     },1000);
//   });
// }
//
// getTempPromise('Tehran').then(function (temp) {
//   console.log('Promise success',temp);
// },function (err) {
//   console.log('Promise error',err);
// });

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a ==='number' && typeof b ==='number'){
      resolve(a+b);
    }
    else{
      reject('Invalid inputs');
    }
  });
}

addPromise(3,9).then(function (sum) {
  console.log('sum of 3 & 9 is',sum);
},function (err) {
  console.log('err', err);
});

addPromise(6,'salam').then(function (sum) {
  console.log('sum is',sum);
},function (err) {
  console.log('err', err);
});
