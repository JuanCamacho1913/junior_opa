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
   for(let i = 1;i <= numero; i++){ 
     if (EsPerfecto(i))
      alert(i);
   }
 }

 console.clear();
 NumerosPerfectosRango(numero = parseInt(prompt('Introduce un numero')));



