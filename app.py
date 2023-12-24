from flask import Flask, render_template, request
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

app = Flask(__name__)

app.secret_key = 'Adewuyi'

app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

# Load the pre-trained model and dataset
file_path = r'C:\Users\USER PC\Downloads\archive\Coimbra_breast_cancer_dataset.csv'
df = pd.read_csv(file_path)

# Extract features (X) and target variable (y)
features = ['Age', 'BMI', 'Glucose', 'Insulin', 'HOMA', 'Leptin', 'Adiponectin', 'Resistin', 'MCP.1']
X = df[features]
y = df['Classification']

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train the model
model = LogisticRegression(random_state=42)
model.fit(X_scaled, y)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Get input values from the form
        age = float(request.form['age'])
        bmi = float(request.form['bmi'])
        glucose = float(request.form['glucose'])
        insulin = float(request.form['insulin'])
        homa = float(request.form['homa'])
        leptin = float(request.form['leptin'])
        adiponectin = float(request.form['adiponectin'])
        resistin = float(request.form['resistin'])
        mcp1 = float(request.form['mcp1'])
        print(f"Received form data: {age}, {bmi}, {glucose}, {insulin}, {homa}, {leptin}, {adiponectin}, {resistin}, {mcp1}")
        
        # Make predictions
        input_data = [[age, bmi, glucose, insulin, homa, leptin, adiponectin, resistin, mcp1]]
        input_data_scaled = scaler.transform(input_data)
        prediction = model.predict(input_data_scaled)[0]

        # Display the result
        return render_template('result.html', prediction=prediction)

    # If the method is not POST, redirect to the index or display an error message
    return render_template('error.html', error_message="Invalid request method")

if __name__ == '__main__':
    app.run(debug=True)
