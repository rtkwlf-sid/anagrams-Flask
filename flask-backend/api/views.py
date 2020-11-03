from flask import Blueprint, jsonify, request, Response
from . import db
from .models import Anagram
import re
import flask
import json
from collections import Counter
from sqlalchemy import func

main = Blueprint('main', __name__)

# Function to check if two strings are anagrams or not


def anagram_check(string1, string2):
    if(sorted(string1) == sorted(string2)):
        print("The strings are anagrams.")
        return True
    else:
        print("The strings are not anagrams.")
        return False


# POST Endpoint inserts the strings into the database, only if the strings are anagrams


@main.route('/anagrams', methods=['POST'])
def Anagrams():

    Anagram_data = request.get_json()

    if Anagram_data['stringA'] is None or Anagram_data['stringB'] is None:
        return Response("{'failure':'Strings cannot be null'}", status=400, mimetype='application/json')

    if Anagram_data['stringA'].isalpha() == False or Anagram_data['stringB'].isalpha() == False:
        return Response("{'failure':'Strings should only consist of a-z letters'}", status=400, mimetype='application/json')

    if (anagram_check(Anagram_data['stringA'], Anagram_data['stringB'])) == True:
        new_Anagram = Anagram(
            stringA=Anagram_data['stringA'], stringB=Anagram_data['stringB'])
        db.session.add(new_Anagram)
        db.session.commit()
        return Response("{'success':'Record successfully added'}", status=201, mimetype='application/json')

    return Response("{'failure':'Not Anagrams'}", status=400, mimetype='application/json')


# GET Endpoint queries and returns most popular anagram requests from the database


@main.route('/popular', methods=['GET'])
def Popular():

    # SQL query to get the most popular anagrams
    Anagram_list = Anagram.query.group_by(Anagram.stringA).order_by(
        func.count(Anagram.stringA).desc()).all()

    anagrams = []

    for anagram in Anagram_list:
        anagrams.append({'stringA': anagram.stringA,
                         'stringB': anagram.stringB})

    return jsonify({'anagrams': anagrams})
