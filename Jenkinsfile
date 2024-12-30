pipeline {
    agent any
    
    environment {
        NODE_VERSION = '18.x'
    }
    
    stages {
        stage('Setup') {
            steps {
                nodejs(nodeJSInstallationName: 'Node ' + NODE_VERSION) {
                    sh 'npm install'
                }
            }
        }
        
        stage('Lint') {
            steps {
                nodejs(nodeJSInstallationName: 'Node ' + NODE_VERSION) {
                    sh 'npm run lint'
                }
            }
        }
        
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node ' + NODE_VERSION) {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}