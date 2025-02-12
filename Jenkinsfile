pipeline {
    agent any
    environment {
        GCP_PROJECT = 'profile-450607'
        GCP_ZONE = 'asia-northeast3-a'
        GCP_REGISTRY = 'asia-northeast3-docker.pkg.dev/profile-450607/profile-repo'
        FRONTEND_IMAGE = 'frontend:latest'
    }
    stages {
      stage('Authenticate GCP') {
            steps {
                sh 'gcloud config set account jenkins-sa@profile-450607.iam.gserviceaccount.com'
                sh 'gcloud auth activate-service-account jenkins-sa@profile-450607.iam.gserviceaccount.com --key-file=/var/lib/jenkins/gcp-key.json'
                sh 'gcloud auth configure-docker asia-northeast3-docker.pkg.dev'
            }
        }
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/gunhee0421/portfolio'
            }
        }
        stage('Build & Push Frontend') {
            steps {
                sh 'docker build -t $GCP_REGISTRY/$FRONTEND_IMAGE -f ./dockerfile .'
                sh 'docker push $GCP_REGISTRY/$FRONTEND_IMAGE'
            }
        }
        stage('Deploy to GKE') {
            steps {
                sh 'gcloud container clusters get-credentials nextjs-cluster --zone=$GCP_ZONE'
                sh 'kubectl apply -f k8s/deployment.yaml || true'
                sh 'kubectl set image deployment/frontend-deployment frontend=$GCP_REGISTRY/$FRONTEND_IMAGE'
                sh 'kubectl rollout status deployment/frontend-deployment'
            }
        }
    }
}
