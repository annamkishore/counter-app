# remove existing deployment, service in kube

docker build . -t localhost:32000/container-web-tag-3:hello-3
docker push localhost:32000/container-web-tag-3:hello-3

kubectl apply -f d2-web.yaml
kubectl expose deployment counter-web-deployment  --type="LoadBalancer"
