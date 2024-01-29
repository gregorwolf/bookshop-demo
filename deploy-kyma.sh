kubectl create namespace bookshop-demo
kubectl -n bookshop-demo apply -f kyma/deployment.yaml

# kubectl -n bookshop-demo rollout restart deployment/bookshop-demo
