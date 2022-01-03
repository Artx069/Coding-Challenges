/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
ipsBetween("10.0.0.0", "10.0.0.50")  ===   50 
ipsBetween("10.0.0.0", "10.0.1.0")   ===  256 
ipsBetween("20.0.0.10", "20.0.1.0")  ===  246
*/
public class countIpAddresses {
    public static long ipsBetween(String start, String end) {
    
    
        int[] ip1Split = Arrays.stream(start.split("[.]")).mapToInt(Integer::parseInt).toArray();
        int[] ip2Split = Arrays.stream(end.split("[.]")).mapToInt(Integer::parseInt).toArray();

        long ip1AsDecimal = 0;
        for(int i = 0; i < ip1Split.length; i++){
            ip1AsDecimal += ip1Split[ip1Split.length -1 - i] * Math.pow(256, i);
        }
        long ip2AsDecimal = 0;
        for(int i = 0; i < ip2Split.length; i++){
            ip2AsDecimal += ip2Split[ip2Split.length -1 - i] * Math.pow(256, i);
        }

        return ip2AsDecimal - ip1AsDecimal;
    }
}
