public class PasswordMaker{
    public static String makePassword(int len, boolean flagUpper, boolean flagLower, boolean flagDigit) {
        String password = "";
        int cUp = 65;
        int cLo = 97;
        int dig = 0;
    
        while(password.length() < len) {
            if (flagUpper == true && cUp <= 90) {
                password += (char) cUp;
                cUp += 1;
            }
            if (flagLower == true && cLo <= 122) {
                password += (char) cLo;
                cLo += 1;
            }
            if (flagDigit == true && dig < 10) {
                password += dig;
                dig += 1;
            }
        }
        return password.substring(0, len);
      }
}