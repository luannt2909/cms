docker-build: ## build docker
	docker build -t cms-strapi -f Dockerfile .
	docker tag cms-strapi luannt2909/cms-strapi:latest
	docker push luannt2909/cms-strapi:latest
