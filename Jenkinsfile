pipeline {
    agent any

    tools {error 'error'}

    stages {
        stage("test") {
            steps {
                echo "GIT_COMMIT is: ${env.GIT_PREVIOUS_SUCCESSFUL_COMMIT}"
            }
        }
    }
}
