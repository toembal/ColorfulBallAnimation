// 获取Canvas元素
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 设置Canvas尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 定义圆球对象
class Circle {
  constructor(x, y, radius, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  // 绘制圆球
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  // 更新圆球位置
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // 边界检测
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.speedY = -this.speedY;
    }
  }
}

// 创建圆球数组
const circles = [];

// 初始化圆球
for (let i = 0; i < 10; i++) {
  const radius = Math.random() * 30 + 10; // 半径范围：10到40
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const speedX = (Math.random() - 0.5) * 4; // 水平速度范围：-4到4
  const speedY = (Math.random() - 0.5) * 4; // 垂直速度范围：-4到4
  const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  circles.push(new Circle(x, y, radius, color, speedX, speedY));
}

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 更新和绘制每个圆球
  for (let circle of circles) {
    circle.update();
    circle.draw();
  }
}

// 开始动画
animate();
