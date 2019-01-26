pipeline {
  agent any
  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/thelgevold/angular-samples.git'
      }
    }
    stage('npm Install') {
      steps {
        sh 'npm i'
      }
    }
    stage('Build') {
      steps {
        sh 'yarn build-all'
      }
    }
  }
}
