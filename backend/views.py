from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from serializers import LoanSerializer
import pickle
import pandas as pd

model_path = 'ML_models/lr_model.sav'
model = pickle.load(open(model_path, 'rb'))
result = ''

@api_view(['GET', 'POST'])
def load_prediction(request):
    if request.method == 'GET':
        serializer = LoanSerializer(many = True)
        return Response(serializer.data)

    elif request.method =='POST':
        serializer = LoanSerializer(data=request.data)
        print(type(request.data['loan_amount']))
        if serializer.is_valid():
            gender = request.data['gender']
            married = request.data['married']
            education = request.data['education']
            dependents = request.data['dependents']
            self_employment = request.data['self_employment']
            property_area = request.data['property_area']
            applicant_income = request.data['applicant_income']
            loan_amount = request.data['loan_amount']
            coapplicant_income = request.data['coapplicant_income']
            loan_amount_term = request.data['loan_amount_term']
            credit_history = request.data['credit_history']

            input = dict()
            input['Gender'] = gender
            input['Married'] = married
            input['Education'] = education
            input['Dependents'] = dependents
            input['Self_Employed'] = self_employment
            input['Property_Area'] = property_area
            input['ApplicantIncome'] = applicant_income
            input['LoanAmount'] = loan_amount
            input['CoapplicantIncome'] = coapplicant_income
            input['Loan_Amount_Term'] = loan_amount_term
            input['Credit_History'] = credit_history
            
            columns = ['Gender', 'Married', 'Dependents', 'Education', 'Self_Employed',
                        'ApplicantIncome', 'CoapplicantIncome', 'LoanAmount',
                        'Loan_Amount_Term', 'Credit_History', 'Property_Area']
                        
            temp_df = pd.DataFrame(data = input, columns = columns, index =[1])
            result =  model.predict(temp_df)[0]
            return Response({'input': input, 'result':result})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    