# Deploy Multiple services to App Engnine

This source material that is based of a technical walthrough on how to deploy a Backend and Frontend to App Engine. 


## Access cloud shell 

```bash
git clone https://github.com/Ianodad/AppEngine
```

## Deploy to App Engine
  This applciation has to in deployed in order

### Frontend
cd AppEngine/Frontend

```bash
npm install

npm run build

gcloud app deploy
```

To get the url link for page.
 
```bash
gcloud app run
```

### Backend

```bash
cd AppEngine/Backend

gcloud app deploy
```

### Dispatch Api

```bash
cd AppEngine

gcloud app deploy
```

### SHORTCUT

Use the script file within each service to run
```bash
chmod +x install.sh

./install.sh

```




