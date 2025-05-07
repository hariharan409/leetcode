
/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = (points) => {
    let area = -Infinity;

    for(let i=0;i<points.length;i++) {
        for(let j=1;j<points.length;j++) {
            for(let k=2;k<points.length;k++) {
                let x1 = points[i][0];
                let x2 = points[j][0];
                let x3 = points[k][0];

                let y1 = points[i][1];
                let y2 = points[j][1];
                let y3 = points[k][1];
                

                let temp = (1/2) * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2))
                area = Math.max(area,temp);
            }
        }
    }

    return area;
}

console.log(largestTriangleArea(points = [[4,6],[6,5],[3,1]]))