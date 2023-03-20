pipeline {
    agent {
        docker {
            image 'nikolaik/python-nodejs:python3.11-nodejs19'
        }
    }

    stages {

        stage("check-python") {
            steps {
                sh 'python --version'
            }
        }

        stage("affected") {
            steps {
                echo "Affected packages..."
                sh 'chmod +x print-affected.sh'
                sh 'sh print-affected.sh'
            }
        }

        stage("build") {
            steps {
                echo "Building..."
                sh 'chmod +x build.sh'
                sh 'sh build.sh'
            }
        }
    }
}
