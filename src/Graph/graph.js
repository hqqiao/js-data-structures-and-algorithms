import Queue from '../Queue/queue';

// 封装图结构
export class GraphData {

  constructor() {
    this.vertexes = [];       // 顶点列表
    this.adjList = new Map(); // 邻接表：顶点 -> 邻居数组
  }

  // addVertex(v) 添加顶点
  addVertex(v) {
    this.vertexes.push(v);
    this.adjList.set(v, []);
  }

  // addEdge(v1, v2) 添加无向边
  // 在两个顶点之间添加一条无向边。由于是无向图，需要同时在两个顶点的邻接表中添加对方
  // v1 -> v2：v2 被添加到 v1 的邻接列表中
  // v2 -> v1：v1 被添加到 v2 的邻接列表中
  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  // toString() 以字符串形式输出邻接表
  toString() {
    let result = '';
    for (let v of this.vertexes) {
      result += v + ' -> ';
      const neighbors = this.adjList.get(v);
      for (let n of neighbors) {
        result += n + ' ';
      }
      result += '\n';
    }
    return result;
  }

  // ----------- 图的遍历 ----------- //

  // dfs(initV) 深度优先搜索，返回访问顺序数组
  dfs(initV) {
    const result = [];
    const visited = new Set();
    this.dfsNode(initV, visited, result);
    return result;
  }

  dfsNode(v, visited, result) {
    visited.add(v);
    result.push(v);
    const neighbors = this.adjList.get(v);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this.dfsNode(neighbor, visited, result);
      }
    }
  }

  // bfs(initV) 广度优先搜索，返回访问顺序数组
  bfs(initV) {
    const result = [];
    const visited = new Set();
    const queue = new Queue();
    visited.add(initV);
    queue.enqueue(initV);
    while (!queue.isEmpty()) {
      const v = queue.dequeue();
      result.push(v);
      for (let neighbor of this.adjList.get(v)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.enqueue(neighbor);
        }
      }
    }
    return result;
  }

}
