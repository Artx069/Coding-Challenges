public class SimpleStringIndices {
    public static int solve(String str, int index){
        int counter = 1;

        if (!String.valueOf(str.charAt(index)).equals("(")) {
            return -1;
        }

        for(int i = index +1; i < str.length(); i++){
            if(String.valueOf(str.charAt(i)).equals("(")){
                counter++;
            }
            if(String.valueOf(str.charAt(i)).equals(")")){
                counter--;
                if(counter == 0){
                    return i;
                }
            }
        } 
        return -1;
    }
}
