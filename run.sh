pip install -r requirements.txt
touch .env
echo "NOTION_TOKEN = 'secret_KhUEyJxSbuU6W2UaefB0Fnw6IxJzwADyFtu3Qfzk9wK'" >> .env
echo "DATABASE_ID = 'e76c1440c8bf42fc855a76adde48c8fe'" >> .env
python3 server.py
