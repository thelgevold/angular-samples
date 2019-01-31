pipeline {
  environment {
    registry = 'thelgevold/syntaxsuccess-angular-samples'
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build registry + ":latest"
        }
      }
    }
    stage('Deploy Image') {
      steps{
         script {
            docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove image') {
      steps{
        sh 'docker rmi $registry:latest'
      }
    }
  }
  }
}
