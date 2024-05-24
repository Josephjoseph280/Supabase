import {createClient} from '@supabase/supabase-js'

const supabase=createClient('https://mmomwaveurbmtooskpvw.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1tb213YXZldXJibXRvb3NrcHZ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjUzNjAyNiwiZXhwIjoyMDMyMTEyMDI2fQ.TpeQyq-6INqiQ54VcG604AGo5Or-MVx4plxwEJOdvZI');

async function fetch(){
 try
 {
const {data,error}=await supabase.from('Todo').select('*');
if(error)console.log(error);
else console.log("data is",data)   
}
catch(error)
    {

     console.log("error is somwthing is",error)
    }
}
fetch();

console.log("hello worked first");