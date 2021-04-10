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
    }

    private static int[] createLargeArray() {
        int[] array = new int[1000000];

        for (int i = 0; i < array.length; i++) {
            array[i] = i;
        }

        return array;
    }

    private static int linearSearch(int[] a, int x) {
        for (int i = 0; i < a.length; i++) {
            if (a[i] == x) {
                return i;
            }
        }

        return -1;
    }

    private static int binarySearch(int[] a, int x) {
        int q,
            p = 0,
            r = a.length - 1;

        while (p <= r) {
            q = (p+r) / 2;

            if (a[q] == x) {
                return q;
            }

            if (x < a[q]) {
                r = q-1;
            }
            else {
                p = q + 1;
            }
        }

        return -1;
    }
}
