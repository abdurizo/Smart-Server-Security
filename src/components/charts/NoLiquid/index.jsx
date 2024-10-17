import styles from '../../../styles/stylesCard.module.css';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import NoLiquidIcon from '../../../assets/icons/NoLiquid';

function NoLiquid() {
    const options = {
        chart: {
            type: 'area',
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
            title: null,
            min:0,
            max:40,
            labels: {
                enabled: false // Отключаем метки
            },
        },
        series: [{
            data: [10, 11, 13, 12, 14, 16, 15, 14, 16, 15, 12],
            color: {
                linearGradient: { x1: 1, y1: 0, x2: 1, y2: 1 }, // Градиент сверху вниз (180 градусов)
                stops: [
                    [0, '#295C9E'], // Начальный цвет (соответствует 1.8%)
                    [1, 'rgba(41, 92, 158, 0.00)'] // Прозрачный цвет на 95.73%
                ]
            },
            marker: {
                enabled: false // Отключаем отображение точек
            }
        }],
    }
    return (
        <div className={styles.card}>
            <div className={styles.chart_header}>
                <div className={styles.chart_content}>
                    <h2 className={styles.title}>Suyuqlik <span>yo‘q</span> </h2>
                    <h3 className={styles.subtitle}>15.06.2024  / 14:00</h3>
                </div>
                <div><NoLiquidIcon /></div>
            </div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default NoLiquid




