# union-find

JS UnionFind implementation.

A disjoint-set data structure that partitions a set into disjoint subsets.

## Applications

* Dynamic graph connectivity.
* Maze generation.
* Image segmentation.
* Used for managing shared color sets between visualisations in Silk.

## Resources:
* https://en.wikipedia.org/wiki/Disjoint-set_data_structure - Implementation details included here.
* https://www.cs.princeton.edu/~wayne/kleinberg-tardos/pdf/UnionFind.pdf

## Operations

### .make()

Creates a structure. An object with a `ranks` and `roots` field containing an array to hold ranks and roots respectively.

```js
var uf = UF.make(); // => {ranks : [], roots : []}
```

### .makeSet(uf)

Add a set representative to the structure passed, initially the set will be unconnected, and therefore the root would be its own index (if we zero index the sets in insertion order), with its rank being zero.

```js
var uf = UF.make();
for (var i = 0; i < 5; i++)
  UF.makeSet(uf);
// uf: {ranks : [0,0,0,0,0], roots : [0,1,2,3,4]}
```

### .find(uf, x)

Find the root of a given set representative index.

```js
var uf = UF.make();
for (var i = 0; i < 5; i++)
  UF.makeSet(uf);
UF.find(uf, 0); // => 0
UF.find(uf, 0) === UF.find(uf, 1) // => false

```

## .union(uf, a, b)

Unify set a and b, ensuring their roots point to the same representative.

```js
var uf = UF.make();
for (var i = 0; i < 5; i++)
  UF.makeSet(uf);
UF.union(uf, 0, 1);               // Unify set 0 and 1.
UF.find(uf, 0) === UF.find(uf, 1) // => true
```
