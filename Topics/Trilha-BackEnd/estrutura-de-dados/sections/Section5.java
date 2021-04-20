package sections;

import java.util.Arrays;

public class Section5 {
    public static void init() {
        int[] array = createArray();

        System.out.println(String.format("Original: %s", Arrays.toString(array)));

        // selectionSort(array);
        insertionSort(array);

        System.out.println(String.format("Sorted: %s", Arrays.toString(array)));
    }

    private static int[] createArray() {
        int[] array = { 25, 47, 3, 19, 8, 18 };

        return array;
    }

    private static void selectionSort(int[] array) {
        // O(n^2) complexity

        for (int i = 0; i < array.length - 1; i++) {
            int minimum = i;

            for (int j = i + 1; j < array.length; j++) {
                if (array[j] < array[minimum]) {
                    minimum = j;
                }
            }

            if (minimum != i) {
                int aux = array[i];
                array[i] = array[minimum];
                array[minimum] = aux;
            }
        }
    }

    private static void insertionSort(int[] array) {
        // O(n^2) complexity

        for (int i = 1; i < array.length; i++) {
            int element = array[i];
            int j = i - 1;

            while (j >= 0 && array[j] > element) {
                array[j + 1] = array[j];
                j--;
            }

            array[j + 1] = element;
        }
    }

    private static void mergeSort(int[] array) {
        // O(n log n) complexity

    }

    private static void quickSort(int[] array) {
        // O(n log n) until O(n^2) complexity

    }
}
