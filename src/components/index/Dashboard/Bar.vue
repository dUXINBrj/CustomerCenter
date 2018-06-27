<template>
  <div id="dashbord-bar">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix card-top">
        <span>注册企业数统计</span>
      </div>
      <div id="dashBar" ref="mychart"></div>
    </el-card>
  </div>
</template>
<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/chart/bar');
require('echarts/lib/component/markLine');
require('echarts/lib/component/legend');
export default {
  data () {
    return {
      Chart: {},
      Data: {
        finacing: 1,
        ecommerce: 0,
        rb: 0
      },
      option: {
        title: {
          show: false,
          text: ''
        },
        color: ['#faa401'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '45',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['融资平台', '电商平台', '荣邦'],
          axisTick: {
            alignWithLabel: true
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: {
          name: '注册数量',
          type: 'bar',
          barWidth: '30%',
          barMaxWidth: 80,
          data: [1, 2, 3],
          label: {
            normal: {
              show: true,
              position: 'top',
              distance: 18,
              formatter: function (params) {
                return params.data.value;
              },
              textStyle: {
                color: '#999',
                fontSize: 18
              }
            }
          },
          itemStyle: {
            // 通常情况下：
            normal: {
              // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
              color: function (params) {
                let colorList = ['#68B595', '#FA7272', '#F7A910'];
                return colorList[params.dataIndex];
              }
            },
            // 鼠标悬停时：
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      }
    };
  },
  mounted () {
    this.initCharts();
  },
  methods: {
    initCharts () {
      let dom = this.$refs.mychart;
      this.Chart = echarts.init(dom);
      this.Chart.setOption(this.option);
    }
  }
};
</script>
<style>
  #dashbord-bar .box-card {
    width: 100%;
    border-top: 2px solid #8DE1DB;
  }
  #dashbord-bar .el-card {
    height: 100%;
  }
  #dashbord-bar .el-card__header {
    background: #f1f1f1;
  }
  #dashbord-bar .el-card__body {
    padding: 0;
    width: 100%;
    height: 83%;
  }
  #dashbord-bar .clearfix:before,
  #dashbord-bar .clearfix:after {
    display: table;
    content: "";
  }
  #dashbord-bar .clearfix:after {
    clear: both
  }
  #dashbord-bar .el-card__header {
    padding: 10px 20px;
  }
  .card-top {
    font-size: 14px;
  }
  #dashbord-bar {
    height: 100%;
  }
  #dashBar {
    height: 100%;
  }
</style>
