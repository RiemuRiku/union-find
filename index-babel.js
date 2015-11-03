export { make, find, union, makeSet };

function make () {
  return { ranks : []
         , roots : []
         };
}

function find (uf, x) {
  if (uf.roots[x] !== x)
    uf.roots[x] = find(uf, uf.roots[uf.roots[x]]);
  return uf.roots[x];
}

function union (uf, a, b) {
  var aRoot = find(uf, a);
  var bRoot = find(uf, b);

  if (uf.ranks[a] < uf.ranks[b])
    uf.roots[aRoot] = uf.roots[bRoot];
  else if (uf.ranks[a] > uf.ranks[b])
    uf.roots[bRoot] = uf.roots[aRoot];
  else {
    uf.roots[bRoot] = uf.roots[aRoot];
    uf.ranks[a] += 1;
  }
}

function makeSet (uf) {
  uf.ranks.push(0);
  uf.roots.push(uf.roots.length);
}
