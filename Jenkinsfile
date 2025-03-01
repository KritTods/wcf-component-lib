pipeline {
    agent any

    parameters {
        booleanParam(name: 'Lint', defaultValue: true, description: '')
        booleanParam(name: 'Sonarqube', defaultValue: true, description: '')
    }

    environment {
        PATH = '/home/jenkins/.nvm/versions/node/v20.15.0/bin:' +
        '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:'+
        '/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:'
        version = ''
    }
    stages {
        stage('Clone repository') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Get Version') {
            steps {
                script {
                    // Read the version from package.json
                    version = sh(script: 'cat package.json | grep \\"version\\" | awk -F: \'{ print $2 }\' | sed \'s/[", ]//g\'', returnStdout: true).trim()
                    echo "Version: ${version}"
                }
            }
        }

        stage('Prepare') {
            steps {
                script {
                    projectID = 'wcf-component-lib'
                    registryIP = 'registry.hub.docker.com'
                    sh 'npm -v'
                    sh 'which node'
                    sh 'npm install'
                }
            }
        }

        stage('Lint') {
            when {
                expression { params.Lint == true }
            }
            steps {
                script {
                    sh 'npm run lint'
                }
            }
        }

        stage('SonarQube analysis') {
            when {
                expression { params.Sonarqube == true }
            }
            steps {
                script {
                    def scannerHome = tool 'sonar-scanner'
                    withSonarQubeEnv('sonarqube-server') {
                        echo "scannerHome = ${scannerHome}"
                        sh "${scannerHome}/bin/sonar-scanner -X \
                        -Dsonar.sources=. "
                    }
                }
            }
        }

        stage('Build Frontend') {
            steps {
                script {
                    echo "Start building image [${projectID}:${version}]"
                    docker.withRegistry("http://${registryIP}", 'dockerhubSoilfish') {
                        def img = docker.build("soilfish/${projectID}:${version}")
                        img.push("${version}")
                    }
                    echo "Removing docker image ${projectID}:${version}"
                    sh "docker rmi soilfish/${projectID}:${version}"
                    sh "docker rmi ${registryIP}/soilfish/${projectID}:${version}"
                }
            }
        }
    }
}
