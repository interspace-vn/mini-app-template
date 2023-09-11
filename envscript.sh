if [ "$ENV" == "development"  ];
then
  echo "Switching to Dev environment"
  yes | cp -rf "app.json.dev" "app.json"

elif [ "$ENV" == "staging"  ];
then
  echo "Switching to Staging environment"
  yes | cp -rf "app.json.stag" "app.json"
else
  echo "Switching to Production environment"
  yes | cp -rf "app.json.prod" "app.json"
fi