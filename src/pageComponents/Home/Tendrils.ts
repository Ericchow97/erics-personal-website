class Node {
  x: number;
  y: number;
  vx: number;
  vy: number;

  constructor(x: number, y: number) {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;

  }
}
export class Tendrils {
  spring: number;
  friction: number;
  nodes: Node[];

  constructor(spring: number, target: [number, number]) {
    this.spring = spring + (Math.random() * 0.1) - 0.05;
    this.friction = 0.5 + (Math.random() * 0.01) - 0.005;
    this.nodes = Array.from(Array(30), () => new Node(target[0], target[1]));
  }

  update(target: [number, number]) {
    let spring = this.spring
    for (let prev = null, i = 0; i < this.nodes.length; i++) {
      let node = this.nodes[i]

      if (i === 0) {
        node.vx += (target[0] - node.x) * spring;
        node.vy += (target[1] - node.y) * spring;
      } else {
        node.vx += (prev!.x - node.x) * spring;
        node.vy += (prev!.y - node.y) * spring;
        node.vx += prev!.vx * 0.25;
        node.vy += prev!.vy * 0.25;
      }

      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;

      spring *= 0.98;

      prev = this.nodes[i];
    }
  }

  draw(ctx: CanvasRenderingContext2D ) {
    ctx.beginPath();
    ctx.moveTo(this.nodes[0].x, this.nodes[0].y);

    for (let i = 1, n = this.nodes.length - 2; i < n; i++) {

      let a = this.nodes[i];
      let b = this.nodes[i + 1];
      let x = (a.x + b.x) * 0.5;
      let y = (a.y + b.y) * 0.5;

      ctx.quadraticCurveTo(a.x, a.y, x, y);
    }

   let  a = this.nodes[this.nodes.length - 2];
   let  b = this.nodes[this.nodes.length - 1];

    ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
    ctx.stroke();
    ctx.closePath();
  }
}