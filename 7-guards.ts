interface Square {
  size: number;
}
interface Rectangle {
  x: number;
  y: number;
}
interface Circle {
  radius: number;
}
type Shape = Square | Rectangle | Circle;

function isCircle(s: Shape): boolean {
  return "radius" in s;
}

function formatDimensions(s: Shape) {
  if ("size" in s) {
    return `Square has size: ${s.size}`;
  } else if ("x" in s) {
    return `Rectangle has x: ${s.x} and y: ${s.y}`;
  } else if (isCircle(s)) {
    return `Circle has radius: ${s.radius}`;
  } else {
    const _exhaustiveCheck: Shape = s;
    return _exhaustiveCheck;
  }
}

export { Square, Circle, Rectangle, Shape, formatDimensions };
