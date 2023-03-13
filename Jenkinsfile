pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {

        stage("build") {
            steps {
                echo "building the application"
            }
        }

        stage("test") {
            steps {
                echo "testing the application"
                sh "node --version"
            }
        }
    }
}
