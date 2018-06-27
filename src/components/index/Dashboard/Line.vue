<template>
  <div id="dashbord-line">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix card-top">
        <span>每月登录账户数量统计</span>
        <div class="dash-line-content">
          <span class="time-error" v-if="timeError">开始时间不能大于结束时间</span>
          <el-date-picker
            v-model="startTime"
            :editable="false"
            size="mini"
            type="date"
            value-format="timestamp"
            placeholder="开始时间">
          </el-date-picker>
          -
          <el-date-picker
            v-model="endTime"
            :editable="false"
            size="mini"
            type="date"
            value-format="timestamp"
            placeholder="结束时间">
          </el-date-picker>
          <el-button size="mini" type="primary" @click="checkTime">确定</el-button>
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
      startTime: '',
      endTime: '',
      timeError: false,
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
    checkTime () {
      if (this.endTime !== '' && typeof this.endTime !== 'object') {
        if (this.startTime !== '' && typeof this.startTime !== 'object') {
          if (this.startTime > this.endTime) {
            this.timeError = true;
          } else {
            this.timeError = false;
          }
        } else {
          this.timeError = false;
        }
      } else {
        this.timeError = false;
      }
      if (!this.timeError) {
        this.getChartData();
      }
    },
    getChartData () {
      let params = {
        startTime: '',
        endTime: ''
      };
      if (this.startTime !== '' && typeof this.startTime !== 'object') {
        params.startTime = this.$common.timeFormat(this.startTime);
      };
      if (this.endTime !== '' && typeof this.endTime !== 'object') {
        params.endTime = this.$common.timeFormat(this.endTime);
      };
      console.log(params);
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
    padding: 6px 20px;
  }
  .card-top {
    font-size: 14px;
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
