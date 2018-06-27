<template>
  <div id="dashbord-pie">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix card-top">
        <span>注册账号统计及占比</span>
      </div>
      <div id="dashPie" ref="mychart"></div>
    </el-card>
  </div>
</template>
<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/chart/pie');
require('echarts/lib/component/markLine');
require('echarts/lib/component/legend');
export default {
  mounted () {
    this.initCharts();
  },
  data () {
    return {
      PieChart: {},
      pieData: {
        finacing: 1,
        ecommerce: 0,
        rb: 0
      },
      option: {
        title: {
          text: null,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        grid: {
          bottom: '90',
          top: '0'
        },
        legend: {
          orient: 'horizontal',
          top: 'bottom',
          data: ['融资平台', '电商平台', '荣邦']
        },
        color: ['#68B595', '#FA7272', '#F7A910'],
        series: [{
          name: null,
          type: 'pie',
          radius: '85%',
          center: ['50%', '50%'],
          data: [
            {value: 0, name: '融资平台'},
            {value: 0, name: '电商平台'},
            {value: 0, name: '荣邦'}
          ],
          itemStyle: {
            normal: {
              borderWidth: 4,
              borderColor: '#ffffff'
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          label: {
            normal: {
              show: true,
              position: 'inner',
              textStyle: {
                fontWeight: 300,
                fontSize: 16
              },
              formatter: '{d}%'
            }
          }
        }]
      }
    };
  },
  methods: {
    initCharts () {
      let dom = this.$refs.mychart;
      this.PieChart = echarts.init(dom);
      this.PieChart.setOption(this.option);
    }
  },
  watch: {
    pieData: {
      handler (options) {
        // 没有有相关数据的情况下给echarts标题 并置空data
        if (options.finacing === 0 && options.ecommerce === 0 && options.rb === 0) {
          this.option.series[0].data = [];
          this.option.title.text = '暂无数据';
          this.PieChart.setOption(this.option);
        } else {
          this.option.series[0].data = [
            {value: options.fireCount, name: '融资平台'},
            {value: options.warningCount, name: '电商平台'},
            {value: options.errorCount, name: '荣邦'}
          ];
          this.option.title.text = null;
          this.PieChart.setOption(this.option);
        }
      },
      deep: true
    }
  }
};
</script>
<style>
#dashbord-pie .box-card {
  width: 100%;
  border-top: 2px solid #8DE1DB;
}
#dashbord-pie .el-card {
  height: 100%;
}
#dashbord-pie .el-card__header {
  background: #f1f1f1;
}
#dashbord-pie .el-card__body {
  padding: 0;
  width: 100%;
  height: 83%;
}
#dashbord-pie .clearfix:before,
#dashbord-pie .clearfix:after {
  display: table;
  content: "";
}
#dashbord-pie .clearfix:after {
  clear: both
}
#dashbord-pie .el-card__header {
  padding: 10px 20px;
}
.card-top {
  font-size: 14px;
}
#dashbord-pie {
  height: 100%;
}
#dashPie {
  height: 100%;
}
</style>
