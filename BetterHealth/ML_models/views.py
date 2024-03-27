from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics

# Create your views here.
@api_view(['GET', 'POST'])
def prediction(request):
    if request.method == 'GET':        
        data = {'risk_score': 0.95}
        print('Data retrived successfully: ', data)
        return Response(data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        
        return Response(data, status=status.HTTP_200_OK)


