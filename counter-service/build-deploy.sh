#-----------How to run this file
#  Step 1 docker build & push to registry
docker build . -t localhost:32000/container-service-tag-1:hello-1
docker push localhost:32000/container-service-tag-1:hello-1

#  Step 2 kube deploy & expose
kubectl apply -f d1-service.yaml
kubectl expose deployment counter-service-deployment  --type="LoadBalancer"
