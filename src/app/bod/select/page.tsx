
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL || "", process.env.SUPABASE_KEY || "")


export default async function BOD() {
    const { data, error:any } = await supabase
      .from('users_student')
      .select()

    return (
        <h1>result of : <br />
            { data?.map(e => <span>{e.name}<br /></span> ) }
        </h1>
    );


}