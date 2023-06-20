# remove existing deployment, service in kube

docker build . -t localhost:32000/container-web-tag-3:hello3
docker push localhost:32000/container-web-tag-3:hello3

kubectl apply -f ../kube-conf/d1-deployment-web.yaml
kubectl expose deployment counter-web-deployment  --type="LoadBalancer"
