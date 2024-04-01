from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics
import pickle, joblib
import numpy as np
from sklearn.preprocessing import StandardScaler

# Create your views here.
@api_view(['GET', 'POST'])
def prediction(request):
    if request.method == 'GET':        
        data = {'risk_score': 0.95}
        print('Data retrived successfully: ', data)
        return Response(data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        # patient_data = [[63,0,0,205,138,71,33.11,60,85]]  
        # read incoming data
        p_data = request.data

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
            patient_data.pop(0)
            patient_data.remove('cardio')
            print(patient_data)  

            patient_data = np.array(patient_data).reshape(1, -1)
            print("reshaped patient_data: ", patient_data)

            # Load the trained model and preprocessing steps from the pickle file
            # with open('/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/cardio_ensemble_model.pkl', 'rb') as file:
            #     model_data = pickle.load(file)

            # load the joblib one
            model_file = '/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/cardio_ensemble_model.joblib'
            ensemble = joblib.load(model_file)

            scaler_file = '/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/cardio_scaler.joblib'
            scaler = joblib.load(scaler_file)       

            # Transform the input data using the StandardScaler
            scaled_patient_data = scaler.transform(patient_data)

            # Reshape the scaled input data to 2D array
            scaled_patient_data_2d = np.array(scaled_patient_data).reshape(1, -1)

            # Predict probability scores for the scaled input data
            proba_scores = ensemble.predict_proba(scaled_patient_data_2d)
            risk_score = proba_scores[0][1]

            # Assuming you have binary classification, print the probability score for class 1
            print("Probability score for class 1 (risk score):", risk_score)

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
            model_file = '/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/stroke_ensemble_model.joblib'
            ensemble = joblib.load(model_file)

            scaler_file = '/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/stroke_scaler.joblib'
            scaler = joblib.load(scaler_file)       

            # Transform the input data using the StandardScaler
            scaled_patient_data = scaler.transform(patient_data)

            # Reshape the scaled input data to 2D array
            scaled_patient_data_2d = np.array(scaled_patient_data).reshape(1, -1)

            # Predict probability scores for the scaled input data
            proba_scores = ensemble.predict_proba(scaled_patient_data_2d)
            risk_score = proba_scores[0][1]

            # Assuming you have binary classification, print the probability score for class 1
            print("Probability score for class 1 (risk score):", risk_score)            


        return Response(risk_score, status=status.HTTP_200_OK)


