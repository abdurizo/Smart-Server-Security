import styles from '../../../styles/stylesCard.module.css';

import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import ElectricPower from '../../../assets/icons/ElectricPower';

function ElectricChart() {
  const options = {
    chart: {
      type: 'column',
      backgroundColor: null,
      style: {
        fontFamily: 'NunitoSans_10pt_SemiCondensed-Bold',
      },
    },
    title: {
      text: '',
    },

    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      column: {
        // borderRadius: '100%',
        maxPointWidth: 12,

        borderRadiusTopLeft: '10%',
        borderRadiusTopRight: '10%',
        pointPadding: 0.2,
        borderWidth: 0,
        colorByPoint: true,
        colors: [
          {
            linearGradient: { x1: 1, y1: 1, x2: 1, y2: 0 },
            stops: [
              [0, '#40ff99'],
              [1, '#1e2d3d'],
            ]
          }
        ]
      }
    },
    xAxis: {
      categories: ['0', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20'],
      labels: {
        style: {
          color: '#A3AED0',
          fontSize: '1.6rem',
          fontFamily: 'NunitoSans_10pt_SemiCondensed-Bold'
        }
      },
      lineWidth: 0,
    },
    yAxis: {
      gridLineDashStyle: 'Dash',
      gridLineColor: 'rgba(255, 255, 255, 0.5)',
      min: 200,
      max: 240,
      tickInterval: 10,
      title: {
        text: ''
      },
      categories: ['200v'],
      labels: {
        formatter: function () {
          return this.value + 'V'; // Добавляем "м" после каждого значения
        },
        style: {
          color: '#A3AED0',
          fontSize: '1.6rem'
        }
      }
    },
    series: [{
      // color: 'rgba(28, 202, 184, 1)',
      color: 'rgba(28, 202, 184, 1)',
      data: [239, 210, 220, 220, 203, 236, 207, 215, 210, 230, 220],
    }],

  }
  return (
    <div className={styles.card}>
      <div className={styles.chart_header}>
        <div className={styles.chart_content}>
          <h2 className={styles.title}>Elektr quvvati <span>220</span> </h2>
          <h3 className={styles.subtitle}>15.06.2024  / 14:00</h3>
        </div>
        <div><ElectricPower/></div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>

  )
}

export default ElectricChart
