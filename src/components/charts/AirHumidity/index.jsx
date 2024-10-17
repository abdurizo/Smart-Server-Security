import styles from '../../../styles/stylesCard.module.css';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useTranslation } from "react-i18next";

import AirHumidityIcon from '../../../assets/icons/AirHumidity';

function AirHumidity() {

  const { t } = useTranslation();
  const options = {
    chart: {
      type: 'areaspline',
      backgroundColor: null,
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    title: {
      text: null,
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
      min: 0,
      max: 50,
      tickInterval: 10,
      title: {
        text: ''
      },
      categories: ['0'],
      labels: {
        formatter: function () {
          return this.value + '%'; // Добавляем "м" после каждого значения
        },
        style: {
          color: '#A3AED0',
          fontSize: '1.6rem'
        }
      }
    },
    series: [{
      data: [30, 20, 25, 28, 30, 29, 27, 37, 33, 28, 30],
      color: {
        linearGradient: { x1: 1, y1: 0, x2: 1, y2: 1 }, // Градиент сверху вниз (180 градусов)
        stops: [
          [0, '#295C9E'], // Начальный цвет (соответствует 1.8%)
          [1, 'rgba(41, 92, 158, 0.00)'] // Прозрачный цвет на 95.73%
        ]
      }
    }],
  }
  return (
    <div className={styles.card}>
      <div className={styles.chart_header}>
        <div className={styles.chart_content}>
          <h2 className={styles.title}>{t('air')} <span>28%</span> </h2>
          <h3 className={styles.subtitle}>15.06.2024  / 14:00</h3>
        </div>
        <div><AirHumidityIcon /></div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default AirHumidity
