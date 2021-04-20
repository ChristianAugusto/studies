package sections;

public class Section4 {
    public static void init() {
        int[] array = createLargeArray();

        long time1 = System.currentTimeMillis();
        int result1 = linearSearch(
            array,
            999999
            // 1000001
        );
        long time2 = System.currentTimeMillis();
        System.out.println(
            String.format("Result1 = %d, time elapsed 1: %d", result1, (time2 - time1))
        );


        long time3 = System.currentTimeMillis();
        int result2 = binarySearch(
            array,
            999999
            // 1000001
        );
        long time4 = System.currentTimeMillis();
        System.out.println(
            String.format("Result2 = %d, time elapsed 2: %d", result2, (time4 - time3))
        );


        long time5 = System.currentTimeMillis();
        int result3 = recursiveLinearSearch(
            array,
            999999,
            // 1000001,
            0
        );
        long time6 = System.currentTimeMillis();
        System.out.println(
            String.format("Result3 = %d, time elapsed 3: %d", result3, (time6 - time5))
        );


        long time7 = System.currentTimeMillis();
        int result4 = recursiveBinarySearch(
            array,
            999999,
            // 1000001,
            0,
            array.length - 1
        );
        long time8 = System.currentTimeMillis();
        System.out.println(
            String.format("Result4 = %d, time elapsed 3: %d", result4, (time8 - time7))
        );


        System.out.println("------------------------------------------------");

        
    }

    private static int[] createLargeArray() {
        // int[] array = new int[1000000];
        int[] array = new int[10];

        for (int i = 0; i < array.length; i++) {
            array[i] = i;
        }

        return array;
    }

    private static int linearSearch(int[] array, int x) {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == x) {
                return i;
            }
        }

        return -1;
    }

    private static int binarySearch(int[] array, int x) {
        int q,
            p = 0,
            r = array.length - 1;

        while (p <= r) {
            q = (p+r) / 2;

            if (array[q] == x) {
                return q;
            }

            if (x < array[q]) {
                r = q-1;
            }
            else {
                p = q + 1;
            }
        }

        return -1;
    }

    private static int recursiveLinearSearch(int[] array, int x, int i) {
        if (i >= array.length) {
            return -1;
        }

        if (array[i] == x) {
            return i;
        }

        return recursiveLinearSearch(array, x, i+1);
    }

    private static int recursiveBinarySearch(int[] array, int x, int p, int r) {
        int q = (p+r)/2;

        if (p > r) {
            return -1;
        }

        if (array[q] == x) {
            return q;
        }

        if (x < array[q]) {
            return recursiveBinarySearch(array, x, p, q-1);
        }

        return recursiveBinarySearch(array, x, q+1, r);
    }
}
