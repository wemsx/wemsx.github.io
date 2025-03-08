var ctx = document.querySelector("canvas").getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var sparks = [];
var fireworks = [];
var i = 20;
while (i--) {
  fireworks.push(
    new Firework(
      Math.random() * window.innerWidth,
      window.innerHeight * Math.random()
    )
  );
}

render();
function render() {
  setTimeout(render, 1000 / 60);
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (var firework of fireworks) {
    if (firework.dead) continue;
    firework.move();
    firework.draw();
  }

  for (var spark of sparks) {
    if (spark.dead) continue;
    spark.move();
    spark.draw();
  }

  if (Math.random() < 0.05) {
    fireworks.push(new Firework());
  }
}

// 修改 Spark 对象以模拟更自然的下落效果
function Spark(x, y, color) {
  this.x = x;
  this.y = y;
  this.dir = Math.random() * (Math.PI * 2);
  this.dead = false;
  this.color = color;
  this.speed = Math.random() * 4 + 2; // 调整速度范围
  this.gravity = 0.1; // 初始重力
  this.alpha = 1; // 引入透明度
  this.fadeSpeed = 0.03; // 透明度减少速度
  this.life = Math.random() * 3 + 2; // 火花生命周期
  this.lived = 0; // 已存活时间

  this.move = function () {
    this.lived += 0.05; // 更新存活时间
    if (this.lived >= this.life) {
      this.dead = true;
      this.alpha -= this.fadeSpeed; // 逐渐淡出
    }

    this.speed -= 0.05; // 速度逐渐减小
    this.gravity += 0.02; // 重力逐渐增加

    // 更新位置
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed + this.gravity;
  };

  this.draw = function () {
    if (this.alpha <= 0) return; // 完全透明则不绘制
    ctx.fillStyle = `rgba(${parseColor(this.color).join(",")},${this.alpha})`; // 使用带透明度的颜色
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fill();
  };
}

// 解析颜色字符串为RGBA数组
function parseColor(color) {
  return color
    .slice(1)
    .match(/.{2}/g)
    .map((hex) => parseInt(hex, 16));
}

// 修改 Firework 对象的 burst 方法以产生更自然的火花散布
Firework.prototype.burst = function () {
  this.dead = true;
  var i = Math.random() * 100 + 50; // 产生50到150之间的火花数
  while (i--) {
    var angle = Math.random() * Math.PI * 2; // 火花散布角度
    var velocity = Math.random() * 3 + 1; // 火花初始速度
    var spark = new Spark(
      this.x + Math.cos(angle) * 10, // 在烟花周围的小范围内产生火花
      this.y + Math.sin(angle) * 10,
      this.color
    );
    spark.speed = velocity; // 应用初始速度
    sparks.push(spark);
  }
};

// 在 render 函数中更新透明度
ctx.globalAlpha = 1; // 确保全局透明度为1

function Firework(x, y) {
  this.xmove = new Walker({ radius: 10, speed: 0.5 });
  this.x = x || Math.random() * ctx.canvas.width;
  this.y = y || ctx.canvas.height;
  this.height = (Math.random() * ctx.canvas.height) / 2;
  this.dead = false;
  this.color = randomColor();

  this.move = function () {
    this.x += this.xmove.step();
    if (this.y > this.height) this.y -= 1;
    else this.burst();
  };
  this.draw = function () {
    drawCircle(this.x, this.y, 1, this.color);
  };
  this.burst = function () {
    this.dead = true;
    var i = 100;
    while (i--) sparks.push(new Spark(this.x, this.y, this.color));
  };
}

function drawCircle(x, y, radius, color) {
  color = color || "#FFF";
  ctx.fillStyle = color;
  ctx.fillRect(x - radius / 2, y - radius / 2, radius, radius);
}

function randomColor() {
  return ["#FFD700", "#87CEEB", "#F0ADA0", "#A78E44", "#F15642", "#A4CAB6"][
    Math.floor(Math.random() * 6)
  ];
}
// Plan A ["#ff0043", "#14fc56", "#1e7fff", "#e60aff", "#ffbf36", "#ffffff"]
// Plan B ["#93c47d", "#a4c2f4", "#b4a7d6", "#c27ba0", "#f6b26b", "#ffd966"]
// Plan C ["#FFD700", "#87CEEB", "#F0ADA0", "#FFFACD", "#F15642", "#A4CAB6"]

function Walker(options) {
  this.step = function () {
    this.direction = Math.sign(this.target) * this.speed;
    this.value += this.direction;
    this.target
      ? (this.target -= this.direction)
      : this.value
      ? this.wander
        ? (this.target = this.newTarget())
        : (this.target = -this.value)
      : (this.target = this.newTarget());
    return this.direction;
  };

  this.newTarget = function () {
    return Math.round(Math.random() * (this.radius * 2) - this.radius);
  };

  this.start = 0;
  this.value = 0;
  this.radius = options.radius;
  this.target = this.newTarget();
  this.direction = Math.sign(this.target);
  this.wander = options.wander;
  this.speed = options.speed || 1;
}

// 假设 canvas 是你的画布元素
document.addEventListener("click", function (event) {
  // 获取点击位置
  var x = event.clientX - ctx.canvas.offsetLeft;
  var y = event.clientY - ctx.canvas.offsetTop;

  console.log(x, "+", y);
  // 创建新的烟花并初始化
  var firework = new Firework(x, y);

  // 将新的烟花添加到你的烟花数组中（如果有的话）
  //fireworks.push(firework);

  // 你可以选择立即引爆烟花，或者按照你的逻辑来处理
  firework.burst();
});
