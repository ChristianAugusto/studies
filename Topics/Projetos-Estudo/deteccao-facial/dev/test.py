## Example file
import cv2



# image_path = './images/1.jpeg'
image_path = './images/2.jpeg'
# image_path = './images/3.jpg'
cascade_path = './haarcascade_frontalface_default.xml'


clf = cv2.CascadeClassifier(cascade_path)

img = cv2.imread(image_path)

img_gray_scale = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

faces = clf.detectMultiScale(img_gray_scale, 1.3, 10)


for (x, y, w, h) in faces:
    cv2.rectangle(img, (x,y), (x+w,y+h), (255, 255, 255), 2)

    roi_color = img[y:y + h, x:x + w]

    print("[INFO] Object found. Saving locally.")
    cv2.imwrite(f'./build/{str(w)}{str(h)}-faces.jpg', roi_color)

# cv2.imwrite('./build/teste.png', img)
# cv2.imshow('image', img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
