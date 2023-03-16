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
                sh "git diff --name-only --no-renames --relative '${env.GIT_PREVIOUS_SUCCESSFUL_COMMIT}' 'HEAD'"
                echo "Affected packages..."
                sh "npx nx print-affected --target=build --base=${env.GIT_PREVIOUS_SUCCESSFUL_COMMIT} --select=projects"

                sh "npx nx affected --target=build --base=HEAD~1 --parallel"
            }
        }
    }
}
