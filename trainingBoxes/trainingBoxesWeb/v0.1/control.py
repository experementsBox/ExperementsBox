# -*- coding: utf8 -*-
from flask import Flask
from flask import render_template
import json


app = Flask(__name__)


@app.route('/getExperimentsInfo', methods=['GET','POST'])
def giveexperimentsinfo():
    with open('experiments.json', 'r', encoding="utf-8") as experimentsFile:
        experimentsInfo = json.loads(experimentsFile.read())
    return json.dumps(experimentsInfo, ensure_ascii = False)


@app.route('/getAboutInfo', methods=['GET','POST'])
def giveabouteinfo(): 
    with open('about.json', 'r', encoding="utf-8") as aboutFile:
        aboutInfo = json.loads(aboutFile.read())
    return json.dumps(aboutInfo, ensure_ascii = False)


@app.route('/main', methods=['GET', 'POST'])
def setupwindow():
    return render_template('mainPage.html')


@app.route('/experiments', methods=['GET', 'POST'])
def experiments():
    return render_template('experimentsPage.html')


@app.route('/gethead', methods=['GET', 'POST'])
def givehead():
    return render_template('header.html')


if __name__ == '__main__':
    app.run(debug=True)
