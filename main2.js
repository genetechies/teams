// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("chart-two"));

// 指定图表的配置项和数据
var option = {
  tooltip: {},
  title: {
    text: "特定领域经验",
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
      { name: "互联网金融", max: 100 },
      { name: "网络安全", max: 100 },
      { name: "车载设备", max: 100 },
      { name: "视频解码", max: 100 },
      { name: "自动化测试/运维", max: 100 },
      { name: "AI， 深度学习", max: 100 },
      { name: "跨端应用", max: 100 },
      { name: "券商投行", max: 100 },
      { name: "云平台", max: 100 },
    ],
  },
  series: [
    {
      name: "预算",
      type: "radar",
      // areaStyle: {normal: {}},
      data: [
        {
          value: [80, 65, 60, 60, 70, 70, 80, 80, 80],
          name: "能力雷达",
        },
      ],
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
