import java.util.ArrayList;
import java.util.HashMap;
import java.util.stream.Collectors;

public class PhoneWords {
    public static String phoneWords(String str) {
        ArrayList<String> list = new ArrayList<>();

        String subStr = "";
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '1' || str.charAt(i) == '0') {
                list.add(subStr);
                subStr = "";
                subStr += String.valueOf(str.charAt(i));
            } else if (i == 0 || str.charAt(i - 1) == str.charAt(i)) {
                subStr += String.valueOf(str.charAt(i));
            } else {
                list.add(subStr);
                subStr = "";
                subStr += String.valueOf(str.charAt(i));

            }
        }
        list.add(subStr);
        list = (ArrayList<String>) list.stream().filter(x -> !x.equals("1") && !x.equals(""))
                .collect(Collectors.toList());

        for (int i = 0; i < list.size(); i++) {
            String current = list.get(i);
            if (current.length() > 3) {
                list.remove(i);
                if (current.charAt(0) == '7' || current.charAt(i) == '9') {
                    list.add(i, current.substring(0, 4));
                    if (current.length() > 4) {
                        list.add(i, current.substring(3));
                    }
                } else {
                    list.add(i, current.substring(0, 3));
                    list.add(i, current.substring(3));
                }
            }
        }
        return list.stream().map(x -> getCharFromNumber(x)).collect(Collectors.joining());
    }

    public static String getCharFromNumber(String s) {
        HashMap<String, String> map = new HashMap<>();
        map.put("2", "a");
        map.put("22", "b");
        map.put("222", "c");
        map.put("3", "d");
        map.put("33", "e");
        map.put("333", "f");
        map.put("4", "g");
        map.put("44", "h");
        map.put("444", "i");
        map.put("5", "j");
        map.put("55", "k");
        map.put("555", "l");
        map.put("6", "m");
        map.put("66", "n");
        map.put("666", "o");
        map.put("7", "p");
        map.put("77", "q");
        map.put("777", "r");
        map.put("7777", "s");
        map.put("8", "t");
        map.put("88", "u");
        map.put("888", "v");
        map.put("9", "w");
        map.put("99", "x");
        map.put("999", "y");
        map.put("9999", "z");
        map.put("0", " ");
        return map.get(s);
    }

}