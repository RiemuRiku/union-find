var UF   = require("./index.js");
var test = require("tape");

test("UF.find(uf, x)", (t) => {
  t.plan(2);
  var uf = UF.make();
  UF.makeSet(uf);
  UF.makeSet(uf);
  t.equal(UF.find(uf, 0), 0);
  t.equal(UF.find(uf, 1), 1);
});

test("UF.union(uf, a, b)", (t) => {
  t.plan(1);
  var uf = UF.make();
  UF.makeSet(uf);
  UF.makeSet(uf);
  UF.union(uf, 0, 1);
  t.equal(UF.find(uf, 0), UF.find(uf, 1));
});
