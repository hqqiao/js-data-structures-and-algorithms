import { GraphData } from './graph';

// ---------------- 封装的图结构测试 ---------------- //
console.log('// ----- 图结构测试 START -----//');

const graph = new GraphData();

// addVertex() 添加顶点
const vertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let v of vertexes) {
  graph.addVertex(v);
}

// addEdge() 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('E', 'I');
graph.addEdge('G', 'H');

// toString() 输出邻接表
console.log(graph.toString());

// dfs() 深度优先搜索
console.log('dfs:', graph.dfs('A'));
// 预期: ['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H']

// bfs() 广度优先搜索
console.log('bfs:', graph.bfs('A'));
// 预期: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I', 'H']

console.log('// ----- 图结构测试 END -----//');
