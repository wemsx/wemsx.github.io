const url = new URL(window.location.href);
let qurey = url.searchParams.get("vme50");
if (qurey) {
  let k = JSON.parse(
    decodeURIComponent(atob(qurey))
  );
  document.getElementById("pen").innerHTML = k.name;
  document.getElementById("special").innerHTML = decodeURIComponent(k.e)
} else {
  document.getElementById("pen").innerHTML = "正在看这里的你";
}
var getRandom = function (minNumber, maxNumber) {
  var range = maxNumber - minNumber;
  var random = Math.random();
  return minNumber + Math.round(random * range);
};

const grt = [
  "启一元复始，待四序更新。",
  "吉吉利利，百事都如意。",
  "愿保兹善，千载为常。",
  "欢笑尽娱，乐哉未央。",
  "所求皆如愿，所行化坦途。",
  "多喜乐，长安宁。",
  "律回春渐，新元肇启，烟火照夜白。",
  "共欢新故岁，迎送一宵中。",
  "岁岁年年，共欢同乐，嘉庆与时新。",
  "愿得长如此，年年物候新。",
  "由暗夜，由荆棘，行至春光。",
  "何其有幸，年岁并进。",
  "新年快乐常在，欢愉岁末未央！",
];
document.getElementById("greeting").innerHTML =
  grt[getRandom(0, grt.length - 1)];
