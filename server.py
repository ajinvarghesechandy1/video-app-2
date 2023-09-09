from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin

app = Flask(__name__)

@app.route('/scrape_images', methods=['POST'])
def scrape_images():
    try:
        url = request.json.get('url')
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')

        images = soup.find_all('img')
        image_urls = [urljoin(url, img['src']) for img in images if 'src' in img.attrs]

        # Create a directory to save images
        os.makedirs('downloaded_images', exist_ok=True)

        for idx, img_url in enumerate(image_urls):
            img_data = requests.get(img_url).content
            with open(f'downloaded_images/image_{idx}.jpg', 'wb') as img_file:
                img_file.write(img_data)

        return jsonify({'message': f'Successfully downloaded {len(image_urls)} images.'})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='localhost', port=5000)
