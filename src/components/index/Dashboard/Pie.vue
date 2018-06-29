<template>
  <div id="dashbord-pie">
    <el-card class="box-card" shadow="hover" v-loading="loading">
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
  activated () {
    this.getCountData();
  },
  data () {
    return {
      loading: false,
      PieChart: {},
      pieData: {
        finacing: 0,
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
    },
    getCountData () {
      this.loading = true;
      this.$http({
        url: this.$api.findUserCount,
        method: 'POST'
      }).then(res => {
        this.loading = false;
        let code = res.data.retCode;
        code = code * 1;
        if (code !== 0) {
          return false;
        }
        this.pieData.finacing = res.data.responseDate.counts[0].count;
        this.pieData.ecommerce = res.data.responseDate.counts[1].count;
        this.pieData.rb = res.data.responseDate.counts[2].count;
      }).catch(err => {
        this.loading = false;
        console.log(err);
      });
    }
  },
  watch: {
    pieData: {
      handler (options) {
        this.option.series[0].data = [
          {value: options.finacing, name: '融资平台'},
          {value: options.ecommerce, name: '电商平台'},
          {value: options.rb, name: '荣邦'}
        ];
        this.PieChart.setOption(this.option);
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
