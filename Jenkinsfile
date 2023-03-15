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

        stage("install-deps") {
            steps {
                sh "npm install"
            }
        }

        stage("build") {
            steps {
                echo "diff..."
                sh "git diff --name-only --no-renames --relative 'HEAD~1' 'HEAD'"
                echo "Affected packages..."
                sh "npx nx print-affected --target=build --base=HEAD~1 --select=projects"
                sh "npx nx affected --target=build --base=HEAD~1 --parallel"
            }
        }
    }
}
