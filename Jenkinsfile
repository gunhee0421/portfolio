pipeline {
    agent any
    environment {
        GCP_PROJECT = 'profile-450607'
        GCP_ZONE = 'asia-northeast3-a'
        GCP_REGISTRY = 'asia-northeast3-docker.pkg.dev/profile-450607/profile-repo'
        FRONTEND_IMAGE = 'frontend:latest'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/gunhee0421/portfolio'
            }
        }
        stage('Build & Push Frontend') {
            steps {
                sh 'docker build -t $GCP_REGISTRY/$FRONTEND_IMAGE -f ./Dockerfile .'
                sh 'docker push $GCP_REGISTRY/$FRONTEND_IMAGE'
            }
        }
        stage('Deploy to GKE') {
            steps {
                sh 'gcloud container clusters get-credentials nextjs-cluster --zone=$GCP_ZONE'
                sh 'kubectl set image deployment/frontend-deployment frontend=$GCP_REGISTRY/$FRONTEND_IMAGE'
                sh 'kubectl rollout status deployment/frontend-deployment'
            }
        }
    }
}
