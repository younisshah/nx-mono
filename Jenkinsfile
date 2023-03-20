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

        stage("build") {
            steps {
                echo "Affected packages..."
                sh "npx nx print-affected --targets=install:ci,build --base=${env.GIT_PREVIOUS_SUCCESSFUL_COMMIT} --head=HEAD"

                echo "Building..."
                sh 'chmod +x build.sh'
                sh 'sh build.sh'
            }
        }
    }
}
