import cv2



class DetectFace():
    def __init__(self, image_path:str, cascade_path:str):
        self.clf = cv2.CascadeClassifier(cascade_path)
        self.image = cv2.imread(image_path)

    def get_faces(self):
        img_gray_scale = cv2.cvtColor(self.image, cv2.COLOR_BGR2GRAY)

        faces_points = self.clf.detectMultiScale(img_gray_scale, 1.3, 10)

        faces = []

        for (x, y, w, h) in faces_points:
            cv2.rectangle(self.image, (x,y), (x+w,y+h), (255, 255, 255), 2)

            faces.append(self.image[y:y + h, x:x + w])

        self.faces = faces

        return faces

    def write_images_faces(self, build_dir:str, image_extension:str):
        faces_images_path = []

        for i in range(0, len(self.faces)):
            face_image_path = f'{build_dir}/{i}-faces.{image_extension}'
            faces_images_path.append(face_image_path)
            cv2.imwrite(face_image_path, self.faces[i])

        return faces_images_path
