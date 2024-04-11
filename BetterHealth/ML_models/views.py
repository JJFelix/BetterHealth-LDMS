from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics
import pickle, joblib
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
from tensorflow.keras.models import load_model
from joblib import load

# Create your views here.
@api_view(['GET', 'POST'])
def prediction(request):
    if request.method == 'GET':        
        data = {'risk_score': 0.95}
        print('Data retrived successfully: ', data)
        return Response(data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        print("We received the data")
        # read incoming data
        p_data = request.data
        print(p_data)

        # print("p_data: ", p_data)
        patientId = request.data.get('patientId')
        disease = request.data.get('disease')

        patient_data = []

        if disease == 'cardio':
            for key, value in p_data.items():
                # print(value)
                if value == 'yes':
                    value = 1
                elif value == "no":
                    value = 0
                else:
                    value = value
                print(value)
                patient_data.append(value)

            print(patient_data)        
            #patient_data.pop(0)
            patient_data.remove('cardio')
            print(patient_data)  

            patient_data = np.array(patient_data).reshape(1, -1)
            print("reshaped patient_data: ", patient_data)

            # Load the trained model and preprocessing steps from the pickle file
            # with open('/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/cardio_ensemble_model.pkl', 'rb') as file:
            #     model_data = pickle.load(file)

            # load the joblib one
            model_file = '../../models/cardio_ensemble_model.joblib'
            ensemble = joblib.load(model_file)

            scaler_file = '../../models/cardio_scaler.joblib'
            scaler = joblib.load(scaler_file)       

            # Transform the input data using the StandardScaler
            scaled_patient_data = scaler.transform(patient_data)

            # Reshape the scaled input data to 2D array
            scaled_patient_data_2d = np.array(scaled_patient_data).reshape(1, -1)

            # Predict probability scores for the scaled input data
            proba_scores = ensemble.predict_proba(scaled_patient_data_2d)
            risk_score = proba_scores[0][1]

            # Assuming you have binary classification, print the probability score for class 1
            # print("Probability score for class 1 (risk score):", risk_score)

            # Recommendation
            cardio_model_path = '../../models/cardio_reco_model_1.h5'

            cardio_model = load_model(cardio_model_path)

            pred_data = [[risk_score, 29.79, 227.59, 40.73, 15.53, 0.84, 611.53]]

            # patient_data[0][9] = int(binary[0])
            # patient_data[0][10] = risk_score

            reco_data = np.concatenate((patient_data, pred_data), axis=1)

            print(reco_data)
            
            # Load Scaler
            scaler_loaded = joblib.load('../../models/cardio_reco_scaler.pkl')
            # /home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/LSTM-Recommender-main/Scalers/diabetes_scaler.pkl')

            data_scaled = scaler_loaded.transform(reco_data)
            recommendations = cardio_model.predict(data_scaled)
            print(f"Probability score for class 1 {risk_score}:<=>: Recommendations: {recommendations[0]}") 

        if disease == 'stroke':
            print('Stroke')
            for key, value in p_data.items():
                # print(value)
                if value == 'yes':
                    value = 1
                if value == "no":
                    value = 0

                if value == "Male":
                    value = 1
                if value == "Female":
                    value = 0

                if value == "Government Job":
                    value = 0
                if value == "Never Worked":
                    value = 1
                if value == "Private":
                    value = 2
                if value == "Self Employed":
                    value = 3
                if value == "Child":
                    value = 4

                if value == "Formerly Smoked":
                    value = 1
                if value == "Never Smoked":
                    value = 2
                if value == "Currently Smokes":
                    value = 3
                if value == "Unknown":
                    value = 0

                if value == "Rural":
                    value = 0
                if value == "Urban":
                    value = 1
                
                else:
                    value = value
                print(value)
                patient_data.append(value)

            print(patient_data)        
            patient_data.pop(0)
            patient_data.remove('stroke')
            print(patient_data)  

            patient_data = np.array(patient_data).reshape(1, -1)
            print("reshaped patient_data: ", patient_data)

            # load the joblib one
            model_file = '../../models/stroke_ensemble_model.joblib'
            ensemble = joblib.load(model_file)

            scaler_file = '../../models/stroke_scaler.joblib'
            scaler = joblib.load(scaler_file)       

            # Transform the input data using the StandardScaler
            scaled_patient_data = scaler.transform(patient_data)

            # Reshape the scaled input data to 2D array
            scaled_patient_data_2d = np.array(scaled_patient_data).reshape(1, -1)

            # Predict probability scores for the scaled input data
            proba_scores = ensemble.predict_proba(scaled_patient_data_2d)
            risk_score = proba_scores[0][1]

            # Assuming you have binary classification, print the probability score for class 1
            # print("Probability score for class 1 (risk score):", risk_score)     

            # Recommendation
            stroke_model_path = '../../models/stroke_reco_model_1.h5'

            stroke_model = load_model(stroke_model_path)

            # pred_data = [[0,	1,	40,	1,	0,	1, 	0,	1, 	11,	0,	0.77701071,	0.78,	150.59]]
            pred_data = [[risk_score, 30.36, 340.58, 0.55, 119.79, 211.45, 16.04]]

            # patient_data[0][9] = int(binary[0])
            # patient_data[0][10] = risk_score

            reco_data = np.concatenate((patient_data, pred_data), axis=1)

            print(reco_data)
            
            # Load Scaler
            scaler_loaded = joblib.load('../../models/stroke_reco_scaler.pkl')
            # /home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/LSTM-Recommender-main/Scalers/diabetes_scaler.pkl')

            data_scaled = scaler_loaded.transform(reco_data)
            recommendations = stroke_model.predict(data_scaled)

            print(f"Probability score for class 1 {risk_score}:<=>: Recommendations: {recommendations[0]}") 
                  
        if disease == 'diabetes':
            for key, value in p_data.items():
                if key == 'Age':
                    # print('Age: ',value)
                    # print(type(int(value)))
                    age = int(value)
                    print(age)
                    print(type(age))
                    if 0 <= age <= 24:
                        value = 1
                    if 25 <= age <= 29:
                        value = 2
                    if 30 <= age <= 34:
                        value = 3
                    if 35 <= age <= 39:
                        value = 4
                    if 40 <= age <= 44:
                        value = 5
                    if 45 <= age <= 49:
                        value = 6
                    if 50 <= age <= 54:
                        value = 7
                    if 55 <= age <= 59:
                        value = 8
                    if 60 <= age <= 64:
                        value = 9
                    if 65 <= age <= 69:
                        value = 10
                    if 70 <= age <= 74:
                        value = 11
                    if 75 <= age <= 79:
                        value = 12
                    if age >= 80:
                        value = 13
                    print(age)

                if value == 'yes':
                    value = 1
                elif value == "no":
                    value = 0

                if value == "M":
                    value = 1
                if value == "F":
                    value = 0
                
                else:
                    value = value
                print(value)
                patient_data.append(value)

            print(patient_data)        
            #patient_data.pop(0)
            patient_data.remove('diabetes')
            print(patient_data)  

            patient_data = np.array(patient_data).reshape(1, -1)
            print("reshaped patient_data: ", patient_data)

            # Load the trained model and preprocessing steps from the pickle file
            # with open('/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/cardio_ensemble_model.pkl', 'rb') as file:
            #     model_data = pickle.load(file)

            # load the joblib one
            # model_file = '/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/diabetes_ensemble_model2.joblib'
            model_file = '../../models/diabetes_ensemble_model1.joblib'

            ensemble = joblib.load(model_file)

            scaler_file = '../../models/diabetes_scaler.joblib'
            scaler = joblib.load(scaler_file)       

            # Transform the input data using the StandardScaler
            scaled_patient_data = scaler.transform(patient_data)

            # Reshape the scaled input data to 2D array
            scaled_patient_data_2d = np.array(scaled_patient_data).reshape(1, -1)

            # Predict probability scores for the scaled input data
            proba_scores = ensemble.predict_proba(scaled_patient_data_2d)
            risk_score = proba_scores[0][1]

            binary = ensemble.predict(scaled_patient_data_2d)
            # bin_p = int(binary[0])

            # Assuming you have binary classification, print the probability score for class 1
            print("Probability score for class 1 (risk score):", risk_score)
            print(f"Class: {binary[0]}, prob_score: {risk_score}")

            # Recommendation
            diabetes_model_path = '../../models/diabetes_reco_model_1.h5'

            diabetes_model = load_model(diabetes_model_path)

            features = ['HighBP', 'HighChol', 'BMI', 'Smoker', 'HeartDiseaseorAttack',
                    'Fruits', 'DiffWalk', 'Sex', 'Age', 'Diabetes_binary', 'Diabetes_probability',
                    'Glycemic Index', 'Calories']

            target = ['Carbohydrates', 'Protein', 'Fat', 'Magnesium Content', 'Fiber Content']

            # pred_data = [[0,	1,	40,	1,	0,	1, 	0,	1, 	11,	0,	0.77701071,	0.78,	150.59]]
            pred_data = [[binary[0], risk_score, 0.78, 150.59]]

            # patient_data[0][9] = int(binary[0])
            # patient_data[0][10] = risk_score

            reco_data = np.concatenate((patient_data, pred_data), axis=1)

            print(reco_data)
            
            # Load Scaler
            scaler_loaded = joblib.load('../../models/diabetes_reco_scaler.pkl')
            # /home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/LSTM-Recommender-main/Scalers/diabetes_scaler.pkl')

            data_scaled = scaler_loaded.transform(reco_data)
            recommendations = diabetes_model.predict(data_scaled)
            print(f"Probability score for class 1 {risk_score}:<=>: Recommendations: {recommendations[0]}")

        if disease == 'cancer':
            for key, value in p_data.items():
                # print(value)
                if value == 'yes':
                    value = 2
                elif value == "no":
                    value = 1
                else:
                    value = value
                print(value)
                patient_data.append(value)

            print(patient_data)        
            patient_data.pop(0)
            patient_data.remove('cancer')
            print(patient_data)  

            patient_data = np.array(patient_data).reshape(1, -1)
            print("reshaped patient_data: ", patient_data)

            # Load the trained model and preprocessing steps from the pickle file
            # with open('/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/cardio_ensemble_model.pkl', 'rb') as file:
            #     model_data = pickle.load(file)

            # load the joblib one
            model_file = '../../models/cancer_ensemble_model.joblib'
            ensemble = joblib.load(model_file)

            scaler_file = '../../models/cancer_scaler.joblib'
            scaler = joblib.load(scaler_file)       

            # Transform the input data using the StandardScaler
            scaled_patient_data = scaler.transform(patient_data)

            # Reshape the scaled input data to 2D array
            scaled_patient_data_2d = np.array(scaled_patient_data).reshape(1, -1)

            # Predict probability scores for the scaled input data
            proba_scores = ensemble.predict_proba(scaled_patient_data_2d)
            risk_score = proba_scores[0][1]

            binary = ensemble.predict(scaled_patient_data_2d)

            # Assuming you have binary classification, print the probability score for class 1
            # print("Probability score for class 1 (risk score):", risk_score)

            # Recommendation
            cancer_model_path = '../../models/cancer_reco_model_1.h5'

            cancer_model = load_model(cancer_model_path)

            pred_data = [[binary[0], risk_score, 55.12, 389.13]]

            # patient_data[0][9] = int(binary[0])
            # patient_data[0][10] = risk_score

            reco_data = np.concatenate((patient_data, pred_data), axis=1)

            print(reco_data)
            
            # Load Scaler
            scaler_loaded = joblib.load('../../models/cancer_reco_scaler.pkl')
            # /home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/LSTM-Recommender-main/Scalers/diabetes_scaler.pkl')

            data_scaled = scaler_loaded.transform(reco_data)
            recommendations = cancer_model.predict(data_scaled)
            print(f"Probability score for class 1 {risk_score}:<=>: Recommendations: {recommendations[0]}") 
        
        # return Response("Success", status=status.HTTP_200_OK)
        #create the response:

        print(recommendations)
        response = {
            "riskScore": risk_score,
            "recommendation1": recommendations[0][0],
            "recommendation2": recommendations[0][1],
            "recommendation3": recommendations[0][2],
            "recommendation4": recommendations[0][3],
            "recommendation5": recommendations[0][4],
        }

        return Response(response, status=status.HTTP_200_OK)


