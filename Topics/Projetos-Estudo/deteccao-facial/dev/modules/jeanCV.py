''''| Author: Jean Vitor de Paulo (https://github.com/Jeanvit/PySkinDetection/blob/master/src/jeanCV.py)
	| Date: 29/09/2018
	| 
'''
import cv2
import numpy as np



class SkinDetector():
    def __init__(self, imageName:str, output_path:str):
        self.output_path = output_path
        self.image = cv2.imread(imageName)   
        if self.image is None:
            print("IMAGE NOT FOUND")
            exit(1)
        #self.image = cv2.resize(self.image,(600,600),cv2.INTER_AREA)	
        self.HSV_image = cv2.cvtColor(self.image, cv2.COLOR_BGR2HSV)
        self.YCbCr_image = cv2.cvtColor(self.image, cv2.COLOR_BGR2YCR_CB)
        self.binary_mask_image = self.HSV_image


    def find_skin(self):
        self.__color_segmentation()
        self.__region_based_segmentation()


    def __color_segmentation(self):
        lower_HSV_values = np.array([0, 40, 0], dtype = "uint8")
        upper_HSV_values = np.array([25, 255, 255], dtype = "uint8")

        lower_YCbCr_values = np.array((0, 138, 67), dtype = "uint8")
        upper_YCbCr_values = np.array((255, 173, 133), dtype = "uint8")

        mask_YCbCr = cv2.inRange(self.YCbCr_image, lower_YCbCr_values, upper_YCbCr_values)
        mask_HSV = cv2.inRange(self.HSV_image, lower_HSV_values, upper_HSV_values) 

        self.binary_mask_image = cv2.add(mask_HSV,mask_YCbCr)


    def __region_based_segmentation(self):
        image_foreground = cv2.erode(self.binary_mask_image,None,iterations = 3)
        dilated_binary_image = cv2.dilate(self.binary_mask_image,None,iterations = 3)
        ret,image_background = cv2.threshold(dilated_binary_image,1,128,cv2.THRESH_BINARY)

        image_marker = cv2.add(image_foreground,image_background)
        image_marker32 = np.int32(image_marker)

        cv2.watershed(self.image,image_marker32)
        m = cv2.convertScaleAbs(image_marker32)

        ret,image_mask = cv2.threshold(m,0,255,cv2.THRESH_BINARY+cv2.THRESH_OTSU)
        output = cv2.bitwise_and(self.image,self.image,mask = image_mask)

        cv2.imwrite(self.output_path, output)
