pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {

        stage("prepare") {
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
