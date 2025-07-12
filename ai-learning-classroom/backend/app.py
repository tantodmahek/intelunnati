from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Simple in-memory storage (for demo purposes)
users = {}
user_sessions = {}
timetables = {}
chat_history = {}

@app.route('/')
def home():
    return jsonify({'message': 'AI Learning Assistant Backend is running!'})

@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        name = data.get('name')
        
        if email in users:
            return jsonify({'error': 'Email already registered'}), 400
        
        users[email] = {
            'name': name,
            'email': email,
            'password': password,  # In production, hash this!
            'created_at': datetime.now().isoformat()
        }
        
        # Create session token (simplified)
        token = f"token_{len(users)}"
        user_sessions[token] = email
        
        return jsonify({
            'access_token': token,
            'user': {
                'name': name,
                'email': email
            }
        })
    except Exception as e:
        return jsonify({'error': 'Registration failed'}), 500

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        
        if email not in users or users[email]['password'] != password:
            return jsonify({'error': 'Invalid credentials'}), 401
        
        # Create session token
        token = f"token_{email.replace('@', '_').replace('.', '_')}"
        user_sessions[token] = email
        
        return jsonify({
            'access_token': token,
            'user': users[email]
        })
    except Exception as e:
        return jsonify({'error': 'Login failed'}), 500

@app.route('/api/profile', methods=['GET'])
def get_profile():
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if token not in user_sessions:
            return jsonify({'error': 'Unauthorized'}), 401
        
        email = user_sessions[token]
        return jsonify(users[email])
    except Exception as e:
        return jsonify({'error': 'Profile fetch failed'}), 500

@app.route('/api/ai-tutor', methods=['POST'])
def ai_tutor():
    try:
        data = request.get_json()
        message = data.get('message', '').lower()
        
        # Simple AI responses
        responses = {
            'hello': 'Hello! I\'m your AI tutor. How can I help you learn today?',
            'math': 'I can help you with mathematics! What specific topic would you like to work on?',
            'science': 'Science is fascinating! Which area interests you - physics, chemistry, or biology?',
            'history': 'History helps us understand the world. What period would you like to explore?',
            'english': 'English language arts covers reading, writing, and communication. How can I assist?',
            'help': 'I can assist with Math, Science, History, and English. Just ask me a question!'
        }
        
        response = 'I\'m here to help you learn! What subject would you like to study?'
        for keyword, reply in responses.items():
            if keyword in message:
                response = reply
                break
        
        return jsonify({'response': response})
    except Exception as e:
        return jsonify({'error': 'AI tutor error'}), 500

@app.route('/api/practice-questions', methods=['GET'])
def get_practice_questions():
    try:
        subject = request.args.get('subject', 'math')
        
        questions = {
            'math': [
                {
                    'id': 1,
                    'question': 'What is 15 + 27?',
                    'options': ['42', '41', '43', '40'],
                    'correct': 0,
                    'explanation': '15 + 27 = 42'
                },
                {
                    'id': 2,
                    'question': 'Solve for x: 2x + 5 = 13',
                    'options': ['4', '3', '5', '6'],
                    'correct': 0,
                    'explanation': '2x = 13 - 5 = 8, so x = 4'
                }
            ],
            'science': [
                {
                    'id': 3,
                    'question': 'What is the chemical symbol for water?',
                    'options': ['H2O', 'CO2', 'NaCl', 'O2'],
                    'correct': 0,
                    'explanation': 'Water consists of 2 hydrogen atoms and 1 oxygen atom: H2O'
                }
            ]
        }
        
        return jsonify(questions.get(subject, []))
    except Exception as e:
        return jsonify({'error': 'Questions fetch failed'}), 500

@app.route('/api/timetable', methods=['GET'])
def get_timetable():
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if token not in user_sessions:
            return jsonify({'error': 'Unauthorized'}), 401
        
        email = user_sessions[token]
        return jsonify(timetables.get(email, []))
    except Exception as e:
        return jsonify({'error': 'Timetable fetch failed'}), 500

@app.route('/api/timetable', methods=['POST'])
def add_timetable_entry():
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if token not in user_sessions:
            return jsonify({'error': 'Unauthorized'}), 401
        
        email = user_sessions[token]
        data = request.get_json()
        
        if email not in timetables:
            timetables[email] = []
        
        entry = {
            'id': len(timetables[email]) + 1,
            'day': data.get('day'),
            'time': data.get('time'),
            'subject': data.get('subject'),
            'duration': data.get('duration'),
            'completed': False
        }
        
        timetables[email].append(entry)
        return jsonify({'message': 'Timetable entry added successfully'})
    except Exception as e:
        return jsonify({'error': 'Timetable add failed'}), 500

if __name__ == '__main__':
    print("Starting AI Learning Assistant Backend...")
    print("Backend will be available at: http://localhost:5000")
    app.run(debug=True, host='0.0.0.0', port=5000)