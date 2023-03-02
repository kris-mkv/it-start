const myChart = echarts.init(document.getElementById('main'));

const labelOption = {
  normal: {
    show: true,
    position: 'top',
    fontSize: 14,
    fontWeight: 600,
    color: '#002033',
  },
};

this.mySeries = [
  {
    name: 'В программе ИТ',
    type: 'bar',
    stack: 'InProgram',
    label: labelOption,
    data: [220, 182, 191, 234, 290, 330, 310],
  },
  {
    name: 'В программе ЦП',
    type: 'bar',
    stack: 'InProgram',
    label: labelOption,
    data: [120, 120, 120, 120, 120, 120, 120],
  },
  {
    name: 'Вне программ ИТ',
    type: 'bar',
    stack: 'NotOnProgram',
    label: labelOption,
    data: [120, 132, 101, 134, 290, 230, 220],
  },
  {
    name: 'Вне программ ЦП',
    type: 'bar',
    stack: 'NotOnProgram',
    label: labelOption,
    data: [620, 732, 701, 734, 1090, 1130, 1120],
  },
];

myChart.setOption({
  color: ['#0078D2', '#56B9F2', '#00724C', '#22C38E'],
  barWidth: '35',
  title: {
    text: 'Проекты в программах и вне программ',
    subtext:
      'Сумма и процентное соотношение проектов, находящихся в программах и вне программ',
    left: '4%',
    itemGap: 8,
    textStyle: {
      fontSize: 16,
      color: '#002033',
    },
    subtextStyle: {
      fontSize: 14,
      color: 'rgba(0, 32, 51, 0.6)',
    },
  },
  legend: {
    icon: 'circle',
    bottom: 0,
    formatter: function (name) {
      return `${name} П.`;
    },
    textStyle: {
      color: 'rgba(0, 32, 51, 0.6)',
    },
  },
  tooltip: {
    trigger: 'axis',
    valueFormatter: (value) => value + ' шт.',
    textStyle: {
      fontWeight: 400,
      fontSize: 12,
      color: '#002033',
    },
  },
  xAxis: {
    type: 'category',
    data: ['Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь'],
  },
  yAxis: { type: 'value' },
  series: this.mySeries,
});
