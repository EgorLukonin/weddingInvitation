from requests import post
from os import getenv

from dotenv import load_dotenv

load_dotenv()

NOTION_TOKEN = getenv('NOTION_TOKEN')
DATABASE_ID = getenv('DATABASE_ID')

headers = {
    "Authorization": "Bearer " + NOTION_TOKEN,
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
}


def create_page(data: dict):
    create_url = "https://api.notion.com/v1/pages"

    payload = {"parent": {"database_id": DATABASE_ID}, "properties": data}

    res = post(create_url, headers=headers, json=payload)
    print(res.status_code)
    return res