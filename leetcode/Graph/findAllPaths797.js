var allPathsSourceTarget = function(graph) {
    const queue = [[0]]
    const results = []
    while(queue.length > 0) {
        const lastPath = queue.shift()
        const lastNode = lastPath[lastPath.length - 1]
        if(lastNode === graph.length - 1) {
            results.push(lastPath)
        }
        const connectedPoints = graph[lastNode]
        if (connectedPoints.length > 0) {
            const newPaths = connectedPoints.map(node => ([...lastPath, node]));
            queue.push(...newPaths);
        }
    }
    return results;
};

const graph = [[1,2], [3], [3], []];
const results = allPathsSourceTarget(graph)
console.log('results', results)