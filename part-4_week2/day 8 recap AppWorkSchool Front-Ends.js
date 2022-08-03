function delayed2(n1, n2, delayTime) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = n1 + n2;
      resolve(result);
    }, delayTime);
  });
  return p;
}

delayed2(4, 5, 3000)
  .then((result) => {
    console.log(result);

    delayed2(1, 2, 5000);
  })
  .then((result) => {
    console.log(result);
  });

delayed2(4, 5, 3000).then((result) => {
  console.log(result);
});

delayed2(1, 2, 5000).then((result) => {
  console.log(result);
});

delayed2(6, 7, 4000).then((result) => {
  console.log(result);
});
