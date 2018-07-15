module.exports = (a1, a2) => {
  let dot = 0, n = a1.length
  if (a2) while(n--) dot += a1[n]*a2[n]
  // apparently Math.pow(a1[n],2) is faster than (v=a1[n])*v
  else while(n--) dot += Math.pow(a1[n],2)
  return dot;
}
