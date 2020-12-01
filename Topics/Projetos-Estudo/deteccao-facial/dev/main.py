from modules.detectFace import DetectFace
from modules.jeanCV import SkinDetector



def main():
    # image_path = './images/1.jpeg'
    image_path = './images/2.jpeg'
    # image_path = './images/3.jpg'

    cascade_path = './haarcascade_frontalface_default.xml'

    detect_face = DetectFace(image_path, cascade_path)

    detect_face.get_faces()

    faces_images_path = detect_face.write_images_faces('./build', 'jpg')

    for i in range(0, len(faces_images_path)):
        detector = SkinDetector(faces_images_path[i], f'./build/{i}-skin.jpg')
        detector.find_skin()


if __name__ == "__main__":
    main()