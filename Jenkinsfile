pipeline {
  agent any
  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/thelgevold/angular-samples.git'
      }
    }
    stage('yarn Install') {
      steps {
        sh 'yarn'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build-all'
      }
    }
  }
}
