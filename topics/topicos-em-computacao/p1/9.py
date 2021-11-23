import numpy as np


def main():
    A = np.arange(1, 16).reshape(3,5)

    print(A)

    print(A[1,:])
    print(A[1])
    print(A[1:2,:][0])
    print(A[1,0:])
    print(A[:][1])


main()
