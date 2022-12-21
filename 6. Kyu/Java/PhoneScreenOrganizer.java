/*
 * When you delete an app on your phone, a blank space is left behind. I find
 * these to be unsightly, so I try to fill that space. Initially, I thought a
 * decent strategy for dealing with this would be moving over all of the apps
 * after this spot over to the left, but this could be quite time-consuming if
 * you had, say, 100 apps!
 * 
 * So, I thought of a better solution: take the app furthest to the right and
 * put it in the empty spot. This way, we only have to move as many apps as
 * there are empty spaces!
 * 
 * Given an array of Objects, perform the described algorithm, with null
 * references representing empty spaces. Return a resized array with no trailing
 * or leading nulls so that is just big enough for all of the actual apps.
 */

import java.util.*;

public class PhoneScreenOrganizer {
    public static Object[] moveOver(Object[] a) {
        if (Arrays.stream(a).filter(x -> x != null).count() == 0) {
            return new Object[0];
        }
        List<Object> arrayList = new ArrayList<>();
        arrayList.addAll(Arrays.asList(a));
        for (int i = 0; i < arrayList.size(); i++) {
            if (arrayList.get(i) == null && i < arrayList.size()) {
                while (arrayList.get(arrayList.size() - 1) == null) {

                    arrayList.remove(arrayList.size() - 1);
                }
                if (i < arrayList.size() - 1) {
                    arrayList.set(i, arrayList.get(arrayList.size() - 1));
                    arrayList.set(arrayList.size() - 1, null);
                }

            }
        }

        return arrayList.toArray();
    }
}