import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_KEY || "")


export default async function Insert() {
    const { data, error:any } = await supabase
      .from('users_student')
      .insert([{ id: 3,  name: 'subh', email:'subh@unib.in', password:'pass', uid:'UNIB0006', uuid:'UNIBXN108'}])
      .select()
    return (
        <h1>result of : <br />
            { data?.map(e => <span>{e.name}<br /></span> ) }
        </h1>
    );


}