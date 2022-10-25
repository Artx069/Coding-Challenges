public class EqualsSidesOfArray {

    public static int findEvenIndex(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            int sumLeft = 0;
            int sumRight = 0;

            for (int j = 0; j < i; j++) {
                sumLeft += arr[j];
            }
            for (int k = arr.length - 1; k > i; k--) {
                sumRight += arr[k];
            }

            if (sumLeft == sumRight) {
                return i;
            }
        }
        return -1;
    }
}