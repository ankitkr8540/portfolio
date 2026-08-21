---
title: 'Understanding K-Nearest Neighbors (KNN): From Basics to Weighted KNN'
date: '2024-07-23'
slug: 'knn-basics-to-weighted'
tags: ['Machine Learning', 'KNN', 'Python', 'Algorithm']
category: 'ML & Deep Learning'
excerpt: 'KNN is one of the most intuitive algorithms in ML. Learn how it works, why weighted KNN improves accuracy, and how to implement it in Python from scratch.'
---

![KNN visualization](https://cdn.hashnode.com/res/hashnode/image/upload/v1721687280178/f90adda4-c096-4d54-adae-caff59a35cda.png)

## Introduction

K-Nearest Neighbors (KNN) is an intuitive algorithm used for classification and regression. Imagine you move to a new neighborhood and want to know the best restaurant. You ask your closest neighbors for recommendations, and the majority vote wins. KNN works similarly but with data points.

## How Does KNN Work?

Let's break down the steps involved in the KNN algorithm:

1. **Choose the number of neighbors (k)**: The algorithm considers the 'k' closest data points (neighbors) to make a prediction.

2. **Calculate the distance**: The distance to all other data points is calculated for each data point. Common metrics include Euclidean Distance, Manhattan Distance, and Minkowski Distance.

3. **Sort the distances**: Sort these distances in ascending order and select the nearest 'k' neighbors.

4. **Vote for the classes**: The majority class among the neighbors determines the predicted class for classification. For regression, the average value of the neighbors is taken.

5. **Assign the class or value**: The class or value determined by the neighbors is assigned to the data point.

## Importance of Weighted KNN

Sometimes, it's better to give more importance to closer neighbors than those farther away. Weighted KNN assigns weights to neighbors based on their distance — closer neighbors have higher weights. This can improve the accuracy of the predictions, especially when data points are unevenly distributed.

## Implementing Weighted KNN in Python

### 1. Initialize the prediction list

```python
y_pred = []
```

This list will store the predicted class for each test instance.

### 2. Iterate over each test instance

```python
for x in X_test:
```

Loop through all test data points.

### 3. Calculate distances

```python
distances = [np.sqrt(np.sum((x - x_train) ** 2)) for x_train in self.X_train]
```

Compute the Euclidean distance between the test instance and all training instances.

### 4. Sort distances and select nearest neighbors

```python
sorted_distances = np.argsort(distances)
neighbors_elements = sorted_distances[:self.k]
```

Sort distances and pick the indices of the 'k' nearest neighbors.

### 5. Compute weights

```python
weights = [1 / (distances[i] + 1e-5) for i in neighbors_elements]
```

Assign weights to each neighbor based on their distance — closer neighbors get higher weights. The small `1e-5` prevents division by zero.

### 6. Perform weighted vote

```python
weighted_votes = np.bincount(nearest_labels, weights=weights)
```

Use `np.bincount` to perform a weighted vote where closer neighbors have more influence.

### 7. Assign the predicted class

```python
predicted_label = weighted_votes.argmax()
```

The class with the highest weighted vote is chosen as the predicted class.

## Full Implementation

```python
import numpy as np

def KNN(X_train, y_train, X_test, k):
    """
    Predict the class labels for the provided test data using the
    K-Nearest Neighbors algorithm.

    Parameters:
    X_train (numpy.ndarray): Training data points.
    y_train (numpy.ndarray): Labels corresponding to the training data.
    X_test (numpy.ndarray): Test data points for which predictions are made.
    k (int): Number of nearest neighbors to consider.

    Returns:
    numpy.ndarray: Predicted class labels for the test data points.
    """
    y_pred = []

    for x in X_test:
        # Calculate the Euclidean distance from the test point to all training points
        distances = [np.sqrt(np.sum((x - x_train) ** 2)) for x_train in X_train]

        # Sort the distances and get the indices of the k nearest neighbors
        sorted_distances = np.argsort(distances)
        neighbors_elements = sorted_distances[:k]

        # Retrieve the labels of the k nearest neighbors
        nearest_labels = [y_train[i] for i in neighbors_elements]

        # Compute the weights for each neighbor (inverse of distance)
        weights = [1 / (distances[i] + 1e-5) for i in neighbors_elements]

        # Perform a weighted vote for the nearest labels
        weighted_votes = np.bincount(nearest_labels, weights=weights)

        # Determine the predicted label as the one with the highest weighted vote
        predicted_label = weighted_votes.argmax()

        y_pred.append(predicted_label)

    return np.array(y_pred)
```

## Conclusion

K-Nearest Neighbors is a simple yet powerful algorithm for classification and regression tasks. By understanding the importance of choosing the right number of neighbors (k) and incorporating distance-based weights, we can enhance the accuracy of our predictions — especially in datasets where data points are unevenly distributed.

Weighted KNN is a small change with a meaningful impact. Give it a try on your next classification problem.
