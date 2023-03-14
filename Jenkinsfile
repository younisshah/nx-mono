pipeline {
    agent none

    stages {

        stage("prep-python") {
            agent {
                docker { image 'python:3.8-slim-buster' }
            }
            steps {
                sh 'python --version'
            }
        }

        stage("prep-node") {
            agent {
                docker { image 'node:16.13.1-alpine' }
            }
            steps {
                sh "npm install"
            }
        }

        stage("build") {
            steps {
                echo "building the application..."
                sh "npx nx affected --target=build --base=origin/develop~1"
            }
        }
    }
}
