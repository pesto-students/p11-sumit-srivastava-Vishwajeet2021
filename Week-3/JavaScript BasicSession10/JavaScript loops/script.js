function drawTriangle(triangleSize) {
  for (let i = triangleSize; i >= 1; i--) {
    let asterisks = '';
    for (let j = 1; j <= i; j++) {
      asterisks += '*';
    }
    console.log(asterisks);
  }
}
