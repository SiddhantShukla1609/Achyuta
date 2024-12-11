#importing the dependencies
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score

#DATA COLLECTION AND ANALYSIS
# Load the dataset
diabetes_dataset = pd.read_csv(r'C:\Users\admin\Desktop\initialpython\myenv\Scripts\diabetesdata.csv')

# Printing the first five rows of the dataset
print(diabetes_dataset.head())

# Getting the shape of the dataset
print(diabetes_dataset.shape)

# Getting the statistical measures
print(diabetes_dataset.describe())

# Counting the number of occurrences of each outcome
print(diabetes_dataset['Outcome'].value_counts())

# Comment about outcomes
# 0 represents non-diabetic
# 1 represents diabetic

# Grouping by outcome and getting the mean for each group
print(diabetes_dataset.groupby('Outcome').mean())

#seperating the data and labels
x = diabetes_dataset.drop(columns = 'Outcome', axis=1)
y = diabetes_dataset['Outcome']
print(x)
print(y)

#data standardization
scaler = StandardScaler()
scaler.fit(x)
standardized_data = scaler.transform(x)
print(standardized_data)
x = standardized_data
y = diabetes_dataset['Outcome']
print(x)
print(y)

#train test split
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, stratify=y, random_state=2)
print(x.shape, x_train.shape, x_test.shape)

#training the model
classifier = svm.SVC(kernel='linear')

#training the support vector machine classifier
classifier.fit(x_train, y_train)

#model evaluation - accuracy score on the training data
x_train_prediction = classifier.predict(x_train)
training_data_accuracy = accuracy_score(x_train_prediction, y_train)
print("ACCURACY SCORE OF THE TRAINING DATA: ", training_data_accuracy)

#model evaluation - accuracy score on the test data
x_test_prediction = classifier.predict(x_test)
test_data_accuracy = accuracy_score(x_test_prediction, y_test)
print("ACCURACY SCORE OF THE TEST DATA: ", test_data_accuracy)

#Making a predictive system
pregnancies = int(input("Enter the total number of your pregnancy periods: "))
glucose = int(input("Enter your glucose level: "))
bp = int(input("Enter your blood pressure: "))
skin_thickness = int(input("Enter your skin thickness: "))
insulin = int(input("Enter your insulin amount: "))
bmi = float(input("Enter your BMI: "))
diabetes_pedigree_function = float(input("Enter your diabetes pedigree function: "))
age = int(input("Enter your age: "))

# Ensure the input data matches the feature order of the dataset
input_data = (pregnancies, glucose, bp, skin_thickness, insulin, bmi, diabetes_pedigree_function, age)

# Changing the input_data to numpy array
input_data_as_numpy_array = np.asarray(input_data)

# Reshape the array as we are predicting for one instance
input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

# Standardize the input data
std_data = scaler.transform(input_data_reshaped)
print(std_data)

# Prediction
prediction = classifier.predict(std_data)
print(prediction)

if prediction[0] == 0:
    print("The person is not suffering from diabetes")
else:
    print("The person is suffering from diabetes")
