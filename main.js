// 基于准备好的 DOM，初始化 echarts 实例
var myChart = echarts.init(document.getElementById("chart-one"));

// 指定图表的配置项和数据
var option = {
  tooltip: {},
  title: {
    text: "技能熟练度",
    textStyle: {
      color: "#999",
    },
  },
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#999",
        borderRadius: 4,
        padding: [4, 6],
      },
    },
    indicator: [
      { name: "JS, HTML, CSS", max: 100 },
      { name: "Angular,Vue,React", max: 100 },
      { name: "Java, C++", max: 100 },
      { name: "Webpack, Vite, Node, KOA", max: 100 },
      { name: "Python, Electron", max: 100 },
      { name: "Php, .NET(C#), MATLAB", max: 100 },
      { name: "uniapp, minprogram, hybrid, RN, Electron", max: 100 },
      { name: "MongoDB, MySQL, SQLServer", max: 100 },
    ],
  },
  series: [
    {
      name: "预算",
      type: "radar",
      // areaStyle: {normal: {}},
      data: [
        {
          value: [90, 85, 80, 75, 70, 70, 65, 70],
          name: "能力雷达",
        },
      ],
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
