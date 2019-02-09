pipeline {
  agent any
  stages {
    stage('Yarn') {
      steps{
        sh 'yarn'
      }
    }
    stage('Build api image') {
      steps{
         sh 'bazel run //src/apps/api:push'
      }
    }
    stage('Build backend image') {
      steps{
        sh 'bazel run //src/apps/backend:push'
      }
    }
  }
}
