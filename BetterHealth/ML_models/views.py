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
        # read incoming data
        p_data = request.data
        # print("p_data: ", p_data)
        patientId = request.data.get('patientId')
        age = request.data.get('age')
        patient_data = []
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
        print(patient_data)  

        patient_data = np.array(patient_data).reshape(1, -1)
        # patient_data.reshape(1, -1)
        print("reshaped patient_data: ", patient_data)

        print("patientId: ", patientId)

        # prepare it to match model columns
        # possible use of np.array()
        
        # scale the data using Standard Scaler (sklearn)

        # load the model

        # predict

        # get the output

        # Load the trained model and preprocessing steps from the pickle file
        # with open('/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/cardio_ensemble_model.pkl', 'rb') as file:
        #     model_data = pickle.load(file)

        # load the joblib one
        model_file = '/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/cardio_ensemble_model.joblib'
        ensemble = joblib.load(model_file)

        scaler_file = '/home/felix/Code/DevPortfolio/FinalYearProject/BetterHealth-LDMS/BetterHealth/ML_models/cardio_scaler.joblib'
        scaler = joblib.load(scaler_file)

        # scaler = ensemble.estimators_[0].base_estimator.scaler_
        # scaler = StandardScaler()



        # Assuming model_data is a dictionary containing the model and preprocessing steps
        # model = model_data['ensemble']
        # scaler = model_data['scaler']

        # Prepare the input data (single set of values)
        # patient_data = [[63,0,0,205,138,71,33.11,60,85]]  # Replace feature_valueX with actual values

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


