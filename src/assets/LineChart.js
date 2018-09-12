import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      datasets: [
        {
          label: 'Distribution of Violations/Case',
          // backgroundColor: '#f87979',
          data: [0.010996845, 0.012518795, 0.013057469, 0.012234143, 0.010296892, 0.007784967,
            0.005287197, 0.003225612, 0.001767734, 0.00074558, 0.00038484]
        }
      ]
    })
  }
}
