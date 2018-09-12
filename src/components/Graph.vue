<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col">
        <button @click="train(xs, ys)" class="btn btn-dark">Train</button>
      </div>
    </div>
    <line-chart></line-chart>
  </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs'
import LineChart from '@/assets/LineChart.js'
export default {
  data () {
    return {
      a: tf.variable(tf.scalar(Math.random())),
      b: tf.variable(tf.scalar(Math.random())),
      c: tf.variable(tf.scalar(Math.random())),
      d: tf.variable(tf.scalar(Math.random())),
      ys: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      xs: [0.010996845, 0.012518795, 0.013057469, 0.012234143, 0.010296892, 0.007784967,
        0.005287197, 0.003225612, 0.001767734, 0.00074558, 0.00038484]
    }
  },

  components: {
    LineChart
  },

  methods: {
    loss (predictions, labels) {
      const meanSquareError = predictions.sub(labels).square().mean()
      return meanSquareError
    },
    predict (x) {
      return tf.tidy(() => {
        return this.a.mul(x.pow(tf.scalar(3)))
          .add(this.b.mul(x.square()))
          .add(this.c.mul(x))
          .add(this.d)
      })
    },
    train (xs, ys, numIterations = 75) {
      const learningRate = 0.5
      const optimizer = tf.train.sgd(learningRate)

      for (let i = 0; i < numIterations; i++) {
        optimizer.minimize(() => {
          const predsYs = this.predict(xs)
          console.log(this.loss(predsYs, ys))
        })
      }
    }
  }
}
</script>

<style lang="css">
</style>
