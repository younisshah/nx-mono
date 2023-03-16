pipeline {
    agent any

    stages {
        stage("test") {
            steps {
                echo "GIT_COMMIT= ${env.GIT_PREVIOUS_SUCCESSFUL_COMMIT}"
            }
        }
    }
}
