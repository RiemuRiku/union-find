
var make = function () {
  return { ranks : []
         , roots : []
         };
};

var find = function (uf, x) {
  if (uf.roots[x] !== x)
    uf.roots[x] = find(uf, uf.roots[uf.roots[x]]);
  return uf.roots[x];
};

var union = function (uf, a, b) {
  var aRoot = find(uf, a);
  var bRoot = find(uf, b);

  if (uf.ranks[a] < uf.ranks[b])
    uf.roots[aRoot] = uf.roots[bRoot];
  else if (uf.ranks[a] > uf.ranks[b])
    uf.roots[bRoot] = uf.roots[aRoot];
  else
  {
    uf.roots[bRoot] = uf.roots[aRoot];
    uf.ranks[a] += 1;
  }
};

var makeSet = function (uf) {
  uf.roots.push(uf.roots.length);
  uf.ranks.push(0);
};

exports.make    = make;
exports.find    = find;
exports.union   = union;
exports.makeSet = makeSet;
