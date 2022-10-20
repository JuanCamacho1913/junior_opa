 function EsPerfecto(n) {
     let sum = 1;
  
     for (let i = 2; i*i < n; i++){
     if (n%i==0)
     {
       if(i*i!=n)
         sum = sum + i + n/i;
       else
         sum=sum+i;
     }
   }
  
   if (sum == n && n != 1)
     return true;
   else
     return false;
 }


 function NumerosPerfectosRango(numero) {
   for(let i = 1;i <= numero; i++){ // i es el número que vamos a comprobar
     if (EsPerfecto(i))
       console.info(i);
   }
 }

 console.clear();
 NumerosPerfectosRango(1000000);



