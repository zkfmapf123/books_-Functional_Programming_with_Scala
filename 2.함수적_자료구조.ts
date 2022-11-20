interface _Node<T> {
  value: T
  next?: _Node<T>
}

class LinkedList<T> {
  list(l: T[]): _Node<T> {
    const newNode: _Node<T> = {
      value: l[0],
    }

    let currentNode = newNode
    l.forEach((item, index) => {
      if (index !== 0) {
        currentNode.next = {
          value: item,
        }

        currentNode = currentNode.next
      }
    })

    return newNode
  }

  /**
   * sum of list
   */
  sum(list: _Node<T>, sumFn: (arr: T[]) => T) {
    let crnList: _Node<T> | null = list
    let arr: T[] = []

    while (crnList) {
      arr.push(crnList.value)

      if (crnList?.next) {
        crnList = crnList.next
      } else {
        crnList = null
      }
    }

    return sumFn(arr)
  }

  /**
   *
   */
  product() {}

  /**
   * append list but, empty is null
   */
  append() {}
}

{
  const numList = new LinkedList<number>()

  // list
  const node1 = numList.list([1, 2, 3, 4, 5])
  const node2 = numList.list([100, 200, 300, 400, 500])

  // sum
  const sumOfNode1 = numList.sum(node1, (arr) => arr.reduce((acc, cur) => acc + cur, 0))
  const sumOfNode2 = numList.sum(node2, (arr) => arr.reduce((acc, cur) => acc + cur, 0))
}
