import java.util.*;
import java.security.MessageDigest;

public class Cracker {
    static String crackSha256(String hash, String s) {
        ArrayList<String> arrayList = new ArrayList<>();
        permutn(s, "", arrayList);

        for(String e : arrayList){
            String temp = sha256(e);
            if(temp.equals(hash)){
                return e;
            }
        }
      return null;
    }
  
    static void permutn(String str, String ans, ArrayList<String> arrayList) {
      if (str.length() == 0) {
          arrayList.add(ans);
          return;
      }

      for (int i = 0; i < str.length(); i++) {

          char ch = str.charAt(i);

          String ros = str.substring(0, i) +
                  str.substring(i + 1);

          permutn(ros, ans + ch, arrayList);
      }
    }
  
      public static String sha256(final String base) {
        try{
            final MessageDigest digest = MessageDigest.getInstance("SHA-256");
            final byte[] hash = digest.digest(base.getBytes("UTF-8"));
            final StringBuilder hexString = new StringBuilder();
            for (int i = 0; i < hash.length; i++) {
                final String hex = Integer.toHexString(0xff & hash[i]);
                if(hex.length() == 1)
                    hexString.append('0');
                hexString.append(hex);
            }
            return hexString.toString();
        } catch(Exception ex){
            throw new RuntimeException(ex);
        }
    }
}