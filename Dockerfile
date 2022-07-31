FROM python:3.10 as build

WORKDIR /project-scandiacus/iad/
RUN python -m venv /project-scandiacus/iad/venv
ENV PATH="/project-scandiacus/iad/venv/bin:$PATH"

COPY api/requirements.txt ./
RUN pip install -r requirements.txt

FROM node:16

# RUN apt-get update \
#     && apt-get install software-properties-common \
#     && add-apt-repository ppa:deadsnakes/ppa \
#     && apt-get update \
#     && apt-get install python3.10 -y

#Debian only
RUN apt-get update || : && apt-get install python -y

WORKDIR /project-scandiacus/iad
COPY --from=build /project-scandiacus/iad/venv /venv

ENV PATH="/project-scandiacus/iad/venv/bin:$PATH"
ENV NODE_ENV=container

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]

#Create multipe docker files and use docker compose
#Look into builder patterns
#Look into slim versions
#Google has container w/o unix commands -- far more secure [Distroless Container]
#Rancher Desktop -- docker alternative
#Look into best practices for building a Python container and implement them
