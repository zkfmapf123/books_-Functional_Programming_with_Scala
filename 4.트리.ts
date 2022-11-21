interface _node {
  value: number
  pLeft?: _node
  pRight?: _node
}

class Tree {
  makeTree(value: number) {
    return {
      value,
    } as _node
  }

  setLeft(src: _node, pleft: _node): void {
    src.pLeft = pleft
  }

  setRight(src: _node, pright: _node): void {
    src.pRight = pright
  }

  getLeap() {}

  getBranch() {}

  getMax() {}

  getDepth() {}
}

// implementation
{
  const t = new Tree()

  const n1 = t.makeTree(1)
  const n2 = t.makeTree(2)
  const n3 = t.makeTree(3)
  const n4 = t.makeTree(4)
  const n5 = t.makeTree(5)

  t.setLeft(n1, n2)
  t.setRight(n1, n3)
  t.setLeft(n2, n4)
  t.setRight(n2, n5)

  console.log(n1)
}
