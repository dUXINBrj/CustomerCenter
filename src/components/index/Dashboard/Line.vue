<template>
  <div id="dashbord-line">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix card-top">
        <span>每月登录账户数量统计</span>
        <div class="dash-line-content">
          统计范围：
          <el-select v-model="timeType" placeholder="请选择" @change="getChartData" size="mini">
            <el-option
              v-for="item in timeTypeOption"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div id="dashLine" ref="mychart"></div>
    </el-card>
  </div>
</template>
<script>
const echarts = require('echarts/lib/echarts');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/chart/line');
require('echarts/lib/component/markLine');
require('echarts/lib/component/legend');
export default {
  data () {
    return {
      timeType: 1,
      timeTypeOption: [{
        value: 1,
        label: '近一周'
      }, {
        value: 2,
        label: '近一个月'
      }, {
        value: 3,
        label: '近三个月'
      }, {
        value: 4,
        label: '近半年'
      }, {
        value: 5,
        label: '近一年'
      }],
      Chart: {},
      Data: {
        finacing: 1,
        ecommerce: 0,
        rb: 0
      },
      option: {
        title: {
          show: false,
          text: '折线图堆叠'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: 'bottom',
          data: ['融资平台', '电商平台', '荣邦']
        },
        color: ['#68B595', '#FA7272', '#F7A910'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '30',
          top: '10%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [
          {
            name: '融资平台',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '电商平台',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '荣邦',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
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
    },
    getChartData () {
      let days = '';
      switch (this.timeType) {
        case 1: days = 7; break;
        case 2: days = 30; break;
        case 3: days = 90; break;
        case 4: days = 183; break;
        case 5: days = 365; break;
        default: days = 7; break;
      }
      let end = new Date();
      let start = new Date();
      end.setTime(start.getTime() - 3600 * 1000 * 24);
      end = Number(end);
      end = this.$common.timeFormat(end);
      start.setTime(start.getTime() - 3600 * 1000 * 24 * days);
      start = Number(start);
      start = this.$common.timeFormat(start);
      console.log(start, end);
      /* let params = {
        timeType: '',
        time: ''
      }; */
    }
  }
};
</script>
<style>
  #dashbord-line .box-card {
    width: 100%;
    border-top: 2px solid #8DE1DB;
  }
  #dashbord-line .el-card {
    height: 100%;
  }
  #dashbord-line .el-card__header {
    background: #f1f1f1;
  }
  #dashbord-line .el-card__body {
    padding: 0;
    width: 100%;
    height: 83%;
  }
  #dashbord-line .clearfix:before,
  #dashbord-line .clearfix:after {
    display: table;
    content: "";
  }
  #dashbord-line .clearfix:after {
    clear: both
  }
  #dashbord-line .el-card__header {
    padding: 5px 20px;
  }
  #dashbord-line .card-top {
    line-height: 28px;
  }
  #dashbord-line {
    height: 100%;
  }
  #dashLine {
    height: 100%;
  }
  .dash-line-content {
    display: inline-block;
    float: right;
    color: #666;
  }
  .dash-line-content .el-date-editor {
    width: 135px;
  }
  .time-error {
    color: red;
  }
</style>
