pipeline {
    agent any

    stages {
        stage("test") {
            steps {
                echo "GIT_COMMIT: is ${env.GIT_PREVIOUS_SUCCESSFUL_COMMIT}"
            }
        }
    }
}
