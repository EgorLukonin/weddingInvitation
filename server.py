from flask import Flask, render_template, redirect, request
from create_page import create_page


app = Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/sending', methods=['POST'])
def sending():
    name_surname = request.form['NameSurname']
    allergy = request.form['Allergy'] if len(str(request.form['Allergy']).strip()) != 0 else 'отсутсвует'
    

    data = {
    "NameSurname": {"title": [{"text": {"content": f'{name_surname}'}}]},
    "Allergy": {"rich_text": [{"text": {"content": f'{allergy}'}}]}
    }
    create_page(data)

    return redirect('/')


app.run(debug=True, port=80)