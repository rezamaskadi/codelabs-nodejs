source configuration
export APP_NAME
docker-compose --project-name "$APP_NAME" up -d --build web
echo "================================"
echo "service lifted off"
echo "================================"

echo "Destroying old images . . . .  . . ."
docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
echo "================================"
echo "Old images destroyed"
echo "================================"