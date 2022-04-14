class Diamond {
    public static String print(int n) {
      if(n % 2 == 0 || n < 0){
        return null;
      }
      String sol = "";
  
      for(int i = 1; i < n; i += 2){
          sol += " ".repeat((n - i)/2) + "*".repeat(i);
          if(i != 0){
              sol += "\n";
          }
      }
      for(int i = n; i >= 0; i -= 2){
          sol += " ".repeat((n - i)/2) + "*".repeat(i);
          if(i >= 1){
              sol += "\n";
          }
      }
      return sol;
      }
  }