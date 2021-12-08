/*
A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/
import java.util.ArrayList;
import java.util.Arrays;
public class DataReverse{
    public static int[] DataReverse(int[] data) {
        ArrayList<String> dataArrList = new ArrayList<>();
        String temp = "";
        for(int i = 0; i < data.length; i++){
            temp += data[i];
            if((i+1) % 8 == 0){
                System.out.println(temp);
                dataArrList.add(temp);
                temp = "";
            }
        }
        String sol = "";
        for(int i = dataArrList.size() -1; i >= 0; i--){
            for(int j = 0; j < dataArrList.get(i).length(); j++){
                sol += dataArrList.get(i).charAt(j);
            }
        }

        return Arrays.stream(sol.split("")).mapToInt(x -> Integer.parseInt(x)).toArray();
    
  }
}