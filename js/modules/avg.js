const avg = (n1, n2, n3) => {
  const avgInner = (n1 + n2 + n3) / 3;
  console.log(`${n1} + ${n2} + ${n3} / 3 = ${avgInner.toFixed(2)}`);
  return avgInner;
};

export default avg;

// avg(10, 15, 30);
