"use strict";
/*
Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

Examples
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"
*/

function int32ToIp(int32) {
  if (int32 == 0) {
    return "0.0.0.0";
  }
  let binary = int32.toString(2);
  let octets = [];

  while (binary.length != 0) {
    let part = binary.substr(0, 8);
    octets.push(part);
    binary = binary.substr(8, binary.length);
  }
  let ipFormatArr = [];
  for (let octet of octets) {
    let bits = octet.split("");
    ipFormatArr.push(
      bits[0] * 128 +
        bits[1] * 64 +
        bits[2] * 32 +
        bits[3] * 16 +
        bits[4] * 8 +
        bits[5] * 4 +
        bits[6] * 2 +
        bits[7] * 1
    );
  }
  return ipFormatArr.join(".");
}
