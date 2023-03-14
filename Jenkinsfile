pipeline {
    agent {
        docker {
            image 'python3.11-nodejs19'
        }
    }

    stages {

        stage("check-python") {
            steps {
                sh 'python --version'
            }
        }

        stage("install-deps") {
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
