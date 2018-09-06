//这个JS做倒计时，并且多了小球动效

var WINDOW_WIDTH = 1024
var WINDOW_HEIGHT = 600
var RADIUS = 8 //小球半径
var MARGIN_TOP = 60
var MARGIN_LEFT = 30

//设计数据结构,小球数组和颜色库
var balls = []
const colors = [
  '#33B5E5',
  '#0099CC',
  '#AA66CC',
  '#9933CC',
  '#99CC00',
  '#669900',
  '#FFBB33',
  '#FF8800',
  '#FF4444',
  '#CC0000'
]
function getNowTime() {
  var nowTime = new Date()
  var hours = nowTime.getHours()
  var minutes = nowTime.getMinutes()
  var seconds = nowTime.getSeconds()
  var h1, h2, m1, m2, s1, s2
  ;[h1, h2, m1, m2, s1, s2] = [
    (hours - (hours % 10)) / 10,
    hours % 10,
    (minutes - (minutes % 10)) / 10,
    minutes % 10,
    (seconds - (seconds % 10)) / 10,
    seconds % 10
  ]
  return [h1, h2, m1, m2, s1, s2]
}
getNowTime()
var zTime = getNowTime()

window.onload = function() {
  canvas = document.getElementById('canvas')
  var context = canvas.getContext('2d')

  canvas.height = WINDOW_HEIGHT
  canvas.width = WINDOW_WIDTH

  //每段时间执行一次 帧率=1000/50
  setInterval(function() {
    render(context)
    update()
  }, 100)

  //对已经存在的小球的状态做更新
}

//变化更新,数据改变
function update() {
  var [h1, h2, m1, m2, s1, s2] = [...getNowTime()]
  //小时的十位数
  if (zTime[0] != h1) {
    addBalls(MARGIN_LEFT + 0, MARGIN_TOP, zTime[0]) //传值坐标和当前数字
  }

  //   //小时的个位数
  if (zTime[1] != h2) {
    addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, zTime[1])
  }

  //   //分钟
  if (zTime[2] != m1) {
    addBalls(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, zTime[2]) //传值坐标和当前数字
  }
  if (zTime[3] != m2) {
    addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, zTime[3])
  }
  //   //秒钟
  if (zTime[4] != s1) {
    addBalls(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, zTime[4]) //传值坐标和当前数字
  }

  if (zTime[5] != s2) {
    addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, zTime[5])
  }
  zTime = [h1, h2, m1, m2, s1, s2]
  updateBalls() //对已经存在的小球的状态做更新
}

function updateBalls() {
  //对所有小球进行一个更新
  for (var i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].vx
    balls[i].y += balls[i].vy
    balls[i].vy += balls[i].g

    //碰撞检测
    if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
      balls[i].y >= WINDOW_HEIGHT - RADIUS
      balls[i].vy = -balls[i].vy * 0.75
    }
  }
}

//添加小球函数
function addBalls(x, y, num) {
  //在对应点阵，加上彩色小球
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        //如果点阵对应的是1，创建一个小球
        //包括每个小球的横纵坐标，加速度（为了效果用随机的），vx代表横向速度Math.pow算-1的几次方,Math.ceil（上舍入取大的值）,Math.random() 取0到1直接的随机数
        var aBall = {
          x: x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y: y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          g: 1.5 + Math.random(), //加速度给个随机数
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4, //正一或负一乘四  ，随机的方法不唯一
          vy: -5, //y轴方向稍微向上抛一下
          color: colors[Math.floor(Math.random() * colors.length)] //随机数并向下取整，选择颜色
        }
        balls.push(aBall)
      }
    }
  }
}

//渲染
function render(cxt) {
  ;[h1, h2, m1, m2, s1, s2] = getNowTime()
  cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT) //矩形区域刷新

  renderDigit(MARGIN_LEFT, MARGIN_TOP, h1, cxt)
  renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, h2, cxt) //7个长度14 为了留有空位 改成15
  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt) //绘制冒号
  //绘制分钟
  renderDigit(MARGIN_LEFT + 39 * (RADIUS + 1), MARGIN_TOP, m1, cxt)
  renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, m2, cxt)
  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt)
  //绘制秒
  renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, s1, cxt)
  renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, s2, cxt)

  //绘制彩色动效小球
  for (var i = 0; i < balls.length; i++) {
    cxt.fillStyle = balls[i].color

    cxt.beginPath()
    cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true)
    cxt.closePath()

    cxt.fill()
  }
}

function renderDigit(x, y, num, cxt) {
  cxt.fillStyle = 'rgb(0,102,153)'
  for (var i = 0; i < digit[num].length; i++) {
    //一个点阵有几行 i行数
    for (var j = 0; j < digit[num][i].length; j++) {
      //每行有几列 j列数
      if (digit[num][i][j] == 1) {
        cxt.beginPath()
        cxt.arc(
          x + j * 2 * (RADIUS + 1) + (RADIUS + 1),
          y + i * 2 * (RADIUS + 1) + (RADIUS + 1),
          RADIUS,
          0,
          2 * Math.PI
        )
        cxt.closePath()

        cxt.fill()
      }
    }
  }
}
