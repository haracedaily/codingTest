const solution = (s, n) => 
  s.split(" ")
   .map(word => 
     word.split("")
         .map(ch => {
           if (ch >= 'a' && ch <= 'z') {
             return String.fromCharCode((ch.charCodeAt(0) - 97 + n) % 26 + 97);
           } else if (ch >= 'A' && ch <= 'Z') {
             return String.fromCharCode((ch.charCodeAt(0) - 65 + n) % 26 + 65);
           } else {
             return ch;
           }
         }).join("")
   ).join(" ");