# remove existing deployment, service in kube

docker build . -t localhost:32000/container-web-tag:registry
docker push localhost:32000/container-web-tag:registry

kubectl apply -f ../kube-conf/d1-deployment-web.yaml
kubectl expose deployment counter-web-deployment  --type="LoadBalancer"
